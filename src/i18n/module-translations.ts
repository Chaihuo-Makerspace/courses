import { enDict } from './module-en';
import { esDict } from './module-es';
import { jaDict } from './module-ja';
import { ptDict } from './module-pt';
import type { Locale } from './types';

// 模块文案按「中文原文 → 译文」逐字查表；每个语种一个文件，没有覆盖层。
const moduleDeepTranslations: Record<Locale, Record<string, string>> = {
  'zh-CN': {},
  en: enDict,
  ja: jaDict,
  es: esDict,
  'pt-BR': ptDict,
};

export function deepTranslate(text: string, locale: Locale): string {
  if (locale === 'zh-CN') return text;
  return moduleDeepTranslations[locale]?.[text] ?? text;
}
