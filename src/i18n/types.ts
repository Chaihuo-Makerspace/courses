export type Locale = 'zh-CN' | 'en' | 'ja' | 'es' | 'pt-BR';

export const locales: Locale[] = ['zh-CN', 'en', 'ja', 'es', 'pt-BR'];
export const defaultLocale: Locale = 'zh-CN';

export const localeLabels: Record<Locale, string> = {
  'zh-CN': '简体中文',
  en: 'English',
  ja: '日本語',
  es: 'Español',
  'pt-BR': 'Português (Brasil)',
};

export const localeFlags: Record<Locale, string> = {
  'zh-CN': '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵',
  es: '🇪🇸',
  'pt-BR': '🇧🇷',
};

export const localeHtmlLang: Record<Locale, string> = {
  'zh-CN': 'zh-CN',
  en: 'en',
  ja: 'ja',
  es: 'es',
  'pt-BR': 'pt-BR',
};

export const localeOgLocale: Record<Locale, string> = {
  'zh-CN': 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  es: 'es_ES',
  'pt-BR': 'pt_BR',
};

export const localePathMap: Record<string, Locale> = {
  en: 'en',
  ja: 'ja',
  es: 'es',
  pt: 'pt-BR',
  'pt-BR': 'pt-BR',
};

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  for (const [path, locale] of Object.entries(localePathMap)) {
    if (pathname.startsWith(`/${path}/`) || pathname === `/${path}`) {
      return locale;
    }
  }
  return defaultLocale;
}

export function getLocalePath(locale: Locale, path: string): string {
  const urlPath = Object.entries(localePathMap).find(([, l]) => l === locale)?.[0] ?? locale;
  if (locale === defaultLocale) return path;
  const cleanPath = path.replace(/^\/+/, '');
  return `/${urlPath}/${cleanPath}`;
}

export function localizePath(locale: Locale, path: string): string {
  const urlPath = Object.entries(localePathMap).find(([, l]) => l === locale)?.[0] ?? locale;
  if (locale === defaultLocale) return path;
  return `/${urlPath}${path === '/' ? '' : path}`;
}
