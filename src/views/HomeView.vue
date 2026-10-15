<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppSection from '../components/AppSection.vue'
import TimelineList from '../components/TimelineList.vue'
import TagBadge from '../components/TagBadge.vue'
import type { EducationItem, ExperienceItem } from '../i18n/types'

const GITHUB_URL = 'https://github.com/TimotheeSvg'

const { t, tm, locale } = useI18n()

const educationItems = computed<EducationItem[]>(() => {
  void locale.value
  return tm('education.items') as EducationItem[]
})

const experienceItems = computed<ExperienceItem[]>(() => {
  void locale.value
  return tm('experience.items') as ExperienceItem[]
})
</script>

<template>
  <div>
    <!-- Hero / présentation -->
    <section class="mx-auto w-full max-w-5xl px-6 pt-20 pb-10 sm:pt-28 sm:pb-14">
      <p class="text-sm font-medium text-accent">{{ t('hero.greeting') }}</p>
      <h1 class="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {{ t('hero.titleLead') }}
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-body">
        {{ t('hero.intro') }}
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-3">
        <RouterLink
          to="/projects"
          class="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink/85"
        >
          {{ t('hero.ctaProjects') }}
        </RouterLink>
        <RouterLink
          to="/skills"
          class="rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-subtle"
        >
          {{ t('hero.ctaSkills') }}
        </RouterLink>
        <a
          :href="GITHUB_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-1 inline-flex items-center gap-1 px-1 py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          GitHub
          <span class="sr-only">({{ t('common.newTab') }})</span>
          <svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h7v7M12.5 3.5l-9 9" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Expérience -->
    <AppSection
      id="experience"
      :title="t('experience.title')"
      :subtitle="t('experience.subtitle')"
    >
      <ol class="divide-y divide-border border-y border-border">
        <li
          v-for="(item, index) in experienceItems"
          :key="index"
          class="grid gap-x-10 gap-y-1 py-7 sm:grid-cols-[8rem_1fr]"
        >
          <p class="text-sm text-muted sm:pt-0.5">{{ item.period }}</p>
          <article>
            <h3 class="font-semibold text-ink">{{ item.role }}</h3>
            <p class="mt-2 max-w-2xl text-body">{{ item.description }}</p>

            <ul class="mt-4 list-disc space-y-1.5 pl-5 text-sm text-body marker:text-border-strong">
              <li v-for="(highlight, hIndex) in item.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <TagBadge v-for="tech in item.stack" :key="tech" :label="tech" />
            </div>
          </article>
        </li>
      </ol>
    </AppSection>

    <!-- Parcours scolaire -->
    <AppSection id="parcours" :title="t('education.title')">
      <TimelineList :items="educationItems" />
    </AppSection>
  </div>
</template>
