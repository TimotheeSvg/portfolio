<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { EducationItem } from '../i18n/types'

const { t } = useI18n()

defineProps<{
  items: EducationItem[]
}>()
</script>

<template>
  <ol class="divide-y divide-border border-y border-border">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="grid gap-x-10 gap-y-1 py-6 sm:grid-cols-[8rem_1fr]"
    >
      <p class="text-sm tabular-nums text-muted sm:pt-0.5">{{ item.years }}</p>
      <div>
        <h3 class="font-semibold text-ink">{{ item.degree }}</h3>
        <p class="mt-0.5 text-sm text-body">{{ item.school }} · {{ item.location }}</p>
        <p v-if="item.details" class="mt-1 text-sm text-muted">{{ item.details }}</p>
        <a
          v-if="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
        >
          {{ item.url_text }}
          <span class="sr-only">: {{ item.degree }} ({{ t('common.newTab') }})</span>
        </a>
      </div>
    </li>
  </ol>
</template>
