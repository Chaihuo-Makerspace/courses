import type { Module } from '../data/modules';
import type { PartnershipForm, Scenario } from '../data/partnerships';
import {
  aboutPerson,
  type CtaIntent,
  ctaTargets,
  type FaqItem,
  type LinkItem,
  type OriginItem,
  type OutcomeItem,
  type SiteCta,
} from '../data/site';
import { fillStats } from '../data/stats';
import type { Track } from '../data/tracks';
import { dataTranslations } from './data-translations';
import { deepTranslate } from './module-translations';
import { t } from './translations';
import type { Locale } from './types';
import { localizePath } from './types';

/**
 * 数据层文案的翻译入口：zh-CN 始终取 `src/data` 里的原文（单一事实源），
 * 其他语种按 key 查 data-translations；缺译时回落到原文，而不是把 key 渲染出来。
 */
function tr(locale: Locale, key: string, source: string): string {
  if (locale === 'zh-CN') return source;
  return dataTranslations[locale]?.[key] ?? source;
}

export function translateTracks(tracks: Track[], locale: Locale): Track[] {
  return tracks.map((track) => ({
    ...track,
    name: tr(locale, `track.${track.id}.name`, track.name),
    goal: tr(locale, `track.${track.id}.goal`, track.goal),
    description: tr(locale, `track.${track.id}.desc`, track.description),
  }));
}

export function translateModule(m: Module, locale: Locale): Module {
  if (locale === 'zh-CN') return m;
  // 模块文案按中文原文逐字查表（module-{en,ja,es,pt}.ts）。
  return deepTranslateObj(m, locale);
}

function deepTranslateObj<T>(obj: T, locale: Locale): T {
  if (typeof obj === 'string')
    return deepTranslate(obj as unknown as string, locale) as unknown as T;
  if (Array.isArray(obj)) return obj.map((item) => deepTranslateObj(item, locale)) as unknown as T;
  if (obj && typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      result[key] = deepTranslateObj(value, locale);
    }
    return result as T;
  }
  return obj;
}

export function translateModules(modules: Module[], locale: Locale): Module[] {
  return modules.map((m) => translateModule(m, locale));
}

export function translateOutcomes(outcomes: OutcomeItem[], locale: Locale): OutcomeItem[] {
  return outcomes.map((o) => ({
    ...o,
    label: tr(locale, `outcome.${o.id}.label`, o.label),
    description: tr(locale, `outcome.${o.id}.desc`, o.description),
  }));
}

/** 站内常用去向的按钮：同一去向全站同一措辞（`cta.<intent>`）。 */
export function ctaLink(intent: CtaIntent, locale: Locale): LinkItem {
  return { label: t(locale, `cta.${intent}`), href: localizePath(locale, ctaTargets[intent]) };
}

export function translateCta(cta: SiteCta, locale: Locale, params?: Record<string, string>) {
  const fill = (text: string) =>
    Object.entries(params ?? {}).reduce((s, [k, v]) => s.replace(`{${k}}`, v), text);
  return {
    title: fill(tr(locale, `cta.${cta.id}.title`, cta.title)),
    description: fill(tr(locale, `cta.${cta.id}.desc`, cta.description)),
    primary: ctaLink(cta.primary, locale),
    secondary: cta.secondary ? ctaLink(cta.secondary, locale) : undefined,
  };
}

export function translateOrigins(items: OriginItem[], locale: Locale): OriginItem[] {
  return items.map((item) => ({
    ...item,
    title: tr(locale, `origin.${item.id}.title`, item.title),
    description: fillStats(tr(locale, `origin.${item.id}.desc`, item.description)),
  }));
}

export function translatePerson(locale: Locale): typeof aboutPerson {
  return {
    name: tr(locale, 'person.name', aboutPerson.name),
    role: tr(locale, 'person.role', aboutPerson.role),
    quote: tr(locale, 'person.quote', aboutPerson.quote),
  };
}

export function translateFaqs(items: FaqItem[], locale: Locale): FaqItem[] {
  return items.map((f) => ({
    ...f,
    question: tr(locale, `faq.${f.key}.q`, f.question),
    answer: tr(locale, `faq.${f.key}.a`, f.answer),
  }));
}

export function translateScenarios(scenarios: Scenario[], locale: Locale): Scenario[] {
  return scenarios.map((s) => ({
    ...s,
    title: tr(locale, `scenario.${s.id}.title`, s.title),
    subtitle: tr(locale, `scenario.${s.id}.subtitle`, s.subtitle),
    features: s.features.map((f, i) => tr(locale, `scenario.${s.id}.f${i + 1}`, f)),
    outcomes: s.outcomes.map((o, i) => tr(locale, `scenario.${s.id}.o${i + 1}`, o)),
  }));
}

export function translatePartnershipForms(
  forms: PartnershipForm[],
  locale: Locale,
): PartnershipForm[] {
  return forms.map((f) => ({
    ...f,
    title: tr(locale, `form.${f.code}.title`, f.title),
    subtitle: tr(locale, `form.${f.code}.subtitle`, f.subtitle),
    features: f.features.map((x, i) => tr(locale, `form.${f.code}.f${i + 1}`, x)),
    deliverables: f.deliverables.map((x, i) => tr(locale, `form.${f.code}.d${i + 1}`, x)),
  }));
}
