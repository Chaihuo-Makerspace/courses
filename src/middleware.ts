import { defineMiddleware } from 'astro:middleware';
import { defaultLocale, type Locale, localePathMap, locales } from './i18n/types';

const LANG_COOKIE = 'chaihuo-lang';

function parseAcceptLanguage(header: string | null): string | null {
  if (!header) return null;
  try {
    const langs = header
      .split(',')
      .map((part) => {
        const [tag, q = '1'] = part.trim().split(';q=');
        return { tag: tag.trim().split('-')[0].toLowerCase(), q: parseFloat(q) };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of langs) {
      if (tag === 'zh') return 'zh-CN';
      if (tag === 'pt') return 'pt-BR';
      const match = locales.find((l) => l.startsWith(tag));
      if (match) return match;
    }
  } catch {
    // ignore
  }
  return null;
}

function getLocaleFromPath(pathname: string): { locale: Locale; pathKey: string } | null {
  for (const [pathKey, locale] of Object.entries(localePathMap)) {
    if (pathname.startsWith(`/${pathKey}/`) || pathname === `/${pathKey}`) {
      return { locale, pathKey };
    }
  }
  return null;
}

export const onRequest = defineMiddleware(async (context, next) => {
  // Skip if already handled by a rewrite
  if (context.locals._localeHandled) {
    return next();
  }

  const { url, cookies, request } = context;
  const pathname = url.pathname;

  // Skip static assets
  if (pathname.match(/\.(ico|svg|png|jpg|jpeg|gif|css|js|woff2?|txt|map)$/)) {
    return next();
  }

  const localeInfo = getLocaleFromPath(pathname);

  if (localeInfo) {
    // Strip locale prefix and rewrite
    const prefix = `/${localeInfo.pathKey}`;
    let newPath = pathname.slice(prefix.length) || '/';
    if (newPath !== '/' && !newPath.startsWith('/')) {
      newPath = `/${newPath}`;
    }
    context.locals.locale = localeInfo.locale;
    context.locals._localeHandled = true;
    return context.rewrite(newPath);
  }

  // Default locale path — check for auto-redirect
  const cookieLang = cookies.get(LANG_COOKIE)?.value;
  if (cookieLang && locales.includes(cookieLang as Locale) && cookieLang !== defaultLocale) {
    context.locals.locale = defaultLocale;
    return next();
  }

  if (!cookieLang) {
    const acceptLang = parseAcceptLanguage(request.headers.get('accept-language'));
    if (acceptLang && acceptLang !== defaultLocale) {
      const target = pathname === '/' ? `/${acceptLang}/` : `/${acceptLang}${pathname}`;
      return new Response(null, {
        status: 302,
        headers: {
          Location: target,
          'Set-Cookie': `${LANG_COOKIE}=${acceptLang}; Path=/; Max-Age=31536000; SameSite=Lax`,
        },
      });
    }
  }

  context.locals.locale = defaultLocale;
  return next();
});
