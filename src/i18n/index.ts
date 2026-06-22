import { createI18n } from 'vue-i18n'
import type { MessageSchema } from './types'
import fr from './locales/fr'
import en from './locales/en'

export const SUPPORTED_LOCALES = ['fr', 'en'] as const
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: AppLocale = 'fr'
export const STORAGE_KEY = 'portfolio-locale'

export const LOCALE_LABELS: Record<AppLocale, string> = {
  fr: 'Français',
  en: 'English',
}

function isSupported(value: string | null | undefined): value is AppLocale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

function detectLocale(): AppLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isSupported(stored)) return stored

  const navLang = window.navigator.language?.slice(0, 2)
  if (isSupported(navLang)) return navLang

  return DEFAULT_LOCALE
}

const initialLocale = detectLocale()

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export const i18n = createI18n<[MessageSchema], AppLocale>({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { fr, en },
})

export default i18n
