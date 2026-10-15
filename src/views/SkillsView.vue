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
  <AppSection :title="t('skills.title')" :subtitle="t('skills.subtitle')">
    <!-- Compétences principales -->
    <div class="divide-y divide-border border-y border-border">
      <article
        v-for="skill in featured"
        :key="skill.name"
        class="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[12rem_1fr]"
      >
        <div>
          <h3 class="text-lg font-semibold text-ink">{{ skill.name }}</h3>
          <p class="mt-0.5 text-sm text-muted">
            {{ t('skills.levelLabel') }} · {{ skill.level }}
          </p>
        </div>

        <div>
          <p class="max-w-2xl text-body">{{ skill.description }}</p>

          <ul
            class="mt-4 grid list-disc gap-x-8 gap-y-1.5 pl-5 text-sm text-body marker:text-border-strong sm:grid-cols-2"
          >
            <li v-for="(point, pIndex) in skill.points" :key="pIndex">{{ point }}</li>
          </ul>

          <div class="mt-5 flex flex-wrap gap-1.5">
            <TagBadge v-for="tag in skill.tags" :key="tag" :label="tag" />
          </div>
        </div>
      </article>
    </div>

    <!-- Outils & familier -->
    <div class="mt-12 grid gap-x-10 gap-y-3 md:grid-cols-[12rem_1fr]">
      <div>
        <h3 class="text-lg font-semibold text-ink">{{ t('skills.toolsTitle') }}</h3>
      </div>
      <div>
        <p class="text-body">{{ t('skills.toolsSubtitle') }}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <TagBadge v-for="tool in tools" :key="tool" :label="tool" />
        </div>
      </div>
    </div>
  </AppSection>
</template>
