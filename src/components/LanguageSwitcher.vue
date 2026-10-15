<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLanguage } from '../composables/useLanguage'

const { t } = useI18n()
const { current, options, setLocale } = useLanguage()
</script>

<template>
  <div
    class="inline-flex items-center rounded-md border border-border bg-surface p-0.5"
    role="group"
    :aria-label="t('language.label')"
  >
    <button
      v-for="option in options"
      :key="option.code"
      type="button"
      class="rounded px-2 py-0.5 text-xs font-medium uppercase transition-colors"
      :class="current === option.code ? 'bg-subtle text-ink' : 'text-muted hover:text-ink'"
      :aria-pressed="current === option.code"
      :title="option.label"
      @click="setLocale(option.code)"
    >
      {{ option.code }}
    </button>
  </div>
</template>
