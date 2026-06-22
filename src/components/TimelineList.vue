<script setup lang="ts">
import type { EducationItem } from '../i18n/types'

defineProps<{
  items: EducationItem[]
}>()
</script>

<template>
  <ol class="relative ml-3 border-l border-[var(--color-border)]">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="relative mb-8 ml-6 last:mb-0"
    >
      <span
        class="absolute -left-[31px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]"
      />
      <div
        class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-2">

          <h3 class="text-lg font-semibold text-white">{{ item.degree }} 
            <span v-if="item.years" class="text-sm text-[var(--color-muted)]">({{ item.years }})</span>
          </h3>
        </div>
        <p class="mt-1 text-sm font-medium text-gray-300">
          {{ item.school }} — {{ item.location }}
        </p>
        <p v-if="item.details" class="mt-2 text-sm text-[var(--color-muted)]">
          {{ item.details }}
        </p>
        <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="mt-2 text-sm text-[var(--color-accent)] hover:underline">
          {{ item.url_text }}
        </a>
      </div>
    </li>
  </ol>
</template>
