<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'

const { current, options, setLocale } = useLanguage()
</script>

<template>
  <div
    class="inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5"
    role="group"
    aria-label="Language selector"
  >
    <button
      v-for="option in options"
      :key="option.code"
      type="button"
      class="rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors"
      :class="
        current === option.code
          ? 'bg-[var(--color-accent)] text-white'
          : 'text-[var(--color-muted)] hover:text-white'
      "
      :aria-pressed="current === option.code"
      :title="option.label"
      @click="setLocale(option.code)"
    >
      {{ option.code }}
    </button>
  </div>
</template>
