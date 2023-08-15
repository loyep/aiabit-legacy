const APP_LOCALES = {
  'de-DE': 'Deutsch',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'hu-HU': 'Magyar',
  'ja-JP': '日本語',
  'pl-PL': 'Polski',
  'sv-SE': 'Svenska',
  'ro-RO': 'Română',
  'ru-RU': 'Русский',
  'vi-VN': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
} as const;

type BaseLang<T extends string> = T extends `${infer U}-${string}` ? U : T; // 'en-US' -> 'en'

const FALLBACK_LOCALES: { from: BaseLang<keyof typeof APP_LOCALES>; to: keyof typeof APP_LOCALES }[] = [
  { from: 'de', to: 'de-DE' },
  { from: 'en', to: 'en-US' },
  { from: 'es', to: 'es-ES' },
  { from: 'fr', to: 'fr-FR' },
  { from: 'ja', to: 'ja-JP' },
  { from: 'pl', to: 'pl-PL' },
  { from: 'sv', to: 'sv-SE' },
  { from: 'ro', to: 'ro-RO' },
  { from: 'ru', to: 'ru-RU' },
  { from: 'vi', to: 'vi-VN' },
  { from: 'zh', to: 'zh-CN' },
];

export type Locale = keyof typeof APP_LOCALES;

export const Locales = Object.keys(APP_LOCALES);
export const LOCALE_OPTIONS = Object.entries(APP_LOCALES).map(([value, label]) => ({ value, label }));

export const getLocaleFromString = (locale?: string): Locale => {
  if (!locale) {
    return 'en-US';
  }

  if (Locales.includes(locale)) {
    return locale as Locale;
  }

  const fallback = FALLBACK_LOCALES.find(({ from }) => locale.startsWith(from));
  if (fallback) {
    return fallback.to as unknown as Locale;
  }

  return 'en-US';
};
