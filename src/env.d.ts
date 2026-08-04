import type { Locale } from './i18n/types';

declare global {
  namespace App {
    interface Locals {
      locale: Locale;
      _localeHandled?: boolean;
    }
  }
}

export {};