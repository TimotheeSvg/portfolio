<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppSection from '../components/AppSection.vue'
import TagBadge from '../components/TagBadge.vue'
import type { ProjectItem } from '../i18n/types'

const { t, tm, locale } = useI18n()

const items = computed<ProjectItem[]>(() => {
  void locale.value
  return tm('projects.items') as ProjectItem[]
})
</script>

<template>
  <AppSection
    :eyebrow="t('projects.eyebrow')"
    :title="t('projects.title')"
    :subtitle="t('projects.subtitle')"
  >
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="project in items"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="t('projects.openInNewTab')"
        class="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/60"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent-soft)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
        <p class="mt-3 text-sm text-[var(--color-muted)]">
          {{ project.description }}
        </p>

        <div
          v-if="project.objective"
          class="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-soft)]">
            {{ t('projects.objectiveLabel') }}
          </p>
          <p class="mt-1 text-sm text-gray-300">{{ project.objective }}</p>
        </div>

        <div class="mt-5 flex flex-1 flex-wrap content-end gap-2">
          <TagBadge v-for="tag in project.tags" :key="tag" :label="tag" />
        </div>
      </a>
    </div>
  </AppSection>
</template>
