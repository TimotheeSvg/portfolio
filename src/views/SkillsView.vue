<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppSection from '../components/AppSection.vue'
import TagBadge from '../components/TagBadge.vue'
import type { FeaturedSkill } from '../i18n/types'

const { t, tm, locale } = useI18n()

const featured = computed<FeaturedSkill[]>(() => {
  void locale.value
  return tm('skills.featured') as FeaturedSkill[]
})

const tools = computed<string[]>(() => {
  void locale.value
  return tm('skills.tools') as string[]
})
</script>

<template>
  <AppSection
    :eyebrow="t('skills.eyebrow')"
    :title="t('skills.title')"
    :subtitle="t('skills.subtitle')"
  >
    <!-- Compétences principales -->
    <div class="space-y-6">
      <article
        v-for="skill in featured"
        :key="skill.name"
        class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/50 sm:p-8"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-2xl font-bold text-white">{{ skill.name }}</h3>
          <span
            class="rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-soft)]"
          >
            {{ t('skills.levelLabel') }} · {{ skill.level }}
          </span>
        </div>

        <p class="mt-3 text-[var(--color-muted)]">{{ skill.description }}</p>

        <ul class="mt-5 grid gap-2 sm:grid-cols-2">
          <li
            v-for="(point, pIndex) in skill.points"
            :key="pIndex"
            class="flex items-start gap-3 text-sm text-gray-300"
          >
            <span
              class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            {{ point }}
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
          <TagBadge v-for="tag in skill.tags" :key="tag" :label="tag" />
        </div>
      </article>
    </div>

    <!-- Outils & familier -->
    <div class="mt-12">
      <h3 class="text-xl font-semibold text-white">{{ t('skills.toolsTitle') }}</h3>
      <p class="mt-1 text-sm text-[var(--color-muted)]">
        {{ t('skills.toolsSubtitle') }}
      </p>
      <div class="mt-5 flex flex-wrap gap-2">
        <TagBadge v-for="tool in tools" :key="tool" :label="tool" />
      </div>
    </div>
  </AppSection>
</template>
