<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppSection from '../components/AppSection.vue'
import TimelineList from '../components/TimelineList.vue'
import TagBadge from '../components/TagBadge.vue'
import type { EducationItem, ExperienceItem } from '../i18n/types'

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
    <section class="mx-auto w-full max-w-5xl px-6 pt-20 pb-10 sm:pt-28">
    <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]">
      {{ t('hero.greeting') }} 👋
    </p>
    <h1 class="text-4xl font-bold leading-tight text-white sm:text-6xl">
      {{ t('hero.titleLead') }}
    </h1>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
      {{ t('hero.intro') }}
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <RouterLink
        to="/skills"
        class="rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-soft)]"
      >
        {{ t('hero.ctaSkills') }}
      </RouterLink>
      <RouterLink
        to="/projects"
        class="rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-surface)]"
      >
        {{ t('hero.ctaProjects') }}
      </RouterLink>
    </div>
  </section>

  <!-- Parcours scolaire -->
  <AppSection
    id="parcours"
    :eyebrow="t('education.eyebrow')"
    :title="t('education.title')"
    :subtitle="t('education.subtitle')"
  >
    <TimelineList :items="educationItems" />
  </AppSection>

  <!-- Expérience -->
  <AppSection
    id="experience"
    :eyebrow="t('experience.eyebrow')"
    :title="t('experience.title')"
    :subtitle="t('experience.subtitle')"
  >
    <div class="space-y-6">
      <article
        v-for="(item, index) in experienceItems"
        :key="index"
        class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-xl font-semibold text-white">{{ item.role }}</h3>
          <span class="text-sm font-medium text-[var(--color-accent-soft)]">
            {{ item.period }}
          </span>
        </div>
        <p class="mt-3 text-[var(--color-muted)]">{{ item.description }}</p>

        <ul class="mt-5 space-y-2">
          <li
            v-for="(highlight, hIndex) in item.highlights"
            :key="hIndex"
            class="flex items-start gap-3 text-sm text-gray-300"
          >
            <span
              class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            {{ highlight }}
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
          <TagBadge v-for="tech in item.stack" :key="tech" :label="tech" />
        </div>
      </article>
    </div>
  </AppSection>
  </div>
</template>
