import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  LOCALE_LABELS,
  STORAGE_KEY,
  SUPPORTED_LOCALES,
  type AppLocale,
} from '../i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const current = computed<AppLocale>(() => locale.value as AppLocale)

  const options = computed(() =>
    SUPPORTED_LOCALES.map((code) => ({
      code,
      label: LOCALE_LABELS[code],
    })),
  )

  function setLocale(next: AppLocale) {
    if (next === locale.value) return
    locale.value = next
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next
    }
  }

  function toggleLocale() {
    const currentIndex = SUPPORTED_LOCALES.indexOf(current.value)
    const next = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
    setLocale(next)
  }

  return { current, options, setLocale, toggleLocale }
}
