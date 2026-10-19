<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppSection from '../components/AppSection.vue'
import TagBadge from '../components/TagBadge.vue'
import type { ProjectItem, ProjectStatus } from '../i18n/types'

const { t, tm, locale } = useI18n()

const items = computed<ProjectItem[]>(() => {
  void locale.value
  return tm('projects.items') as ProjectItem[]
})

const featured = computed(() => items.value.filter((project) => project.featured))
const others = computed(() => items.value.filter((project) => !project.featured))

const caseStudyRoute = (slug: string) => ({ name: 'case-study', params: { slug } })

const statusDot: Record<ProjectStatus, string> = {
  inProgress: 'bg-amber-500',
  incoming: 'bg-border-strong',
}
</script>

<template>
  <AppSection :title="t('projects.title')" :subtitle="t('projects.subtitle')">
    <!-- Projets principaux -->
    <div class="space-y-6">
      <article
        v-for="(project, index) in featured"
        :key="project.title"
        class="rounded-lg border border-border bg-surface p-6 sm:p-8"
      >
        <div class="grid gap-x-10 gap-y-6 lg:grid-cols-[1fr_15rem]">
          <div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 class="text-xl font-semibold tracking-tight text-ink">{{ project.title }}</h3>
              <span
                v-if="project.status"
                class="inline-flex items-center gap-1.5 text-xs font-medium text-muted"
              >
                <span class="h-1.5 w-1.5 rounded-full" :class="statusDot[project.status]" />
                {{ t(`projects.status.${project.status}`) }}
              </span>
            </div>
            <p v-if="project.context" class="mt-1.5 text-sm text-muted">{{ project.context }}</p>
            <p class="mt-3 max-w-2xl text-body">{{ project.description }}</p>

            <ul
              v-if="project.highlights?.length"
              class="mt-5 list-disc space-y-1.5 pl-5 text-sm text-body marker:text-border-strong"
            >
              <li v-for="(highlight, hIndex) in project.highlights" :key="hIndex">
                {{ highlight }}
              </li>
            </ul>

            <!-- Doublon visuel du lien « Voir l'étude de cas » : hors du parcours clavier. -->
            <component
              :is="project.caseStudy ? RouterLink : 'div'"
              v-if="project.gallery?.length"
              v-bind="
                project.caseStudy
                  ? { to: caseStudyRoute(project.caseStudy), tabindex: -1, 'aria-hidden': 'true' }
                  : {}
              "
              class="mt-6 flex flex-wrap items-end gap-3"
            >
              <img
                v-for="image in project.gallery"
                :key="image.srcSm"
                :src="image.srcSm"
                :alt="image.alt"
                :width="image.mobile ? 585 : 1200"
                :height="image.mobile ? 1266 : 750"
                :loading="index === 0 ? 'eager' : 'lazy'"
                decoding="async"
                class="h-24 w-auto rounded-md border border-border sm:h-28"
              />
            </component>
          </div>

          <div class="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p class="text-xs font-medium text-muted">{{ t('projects.stackLabel') }}</p>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <TagBadge v-for="tag in project.tags" :key="tag" :label="tag" />
            </div>
            <RouterLink
              v-if="project.caseStudy"
              :to="caseStudyRoute(project.caseStudy)"
              class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
            >
              {{ t('projects.viewCaseStudy') }}
              <span aria-hidden="true">→</span>
            </RouterLink>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
            >
              {{ t('projects.viewCode') }}
              <span class="sr-only">({{ t('common.newTab') }})</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>

    <!-- Autres projets -->
    <!-- Une carte seule prend toute la largeur plutôt que la moitié. -->
    <div class="mt-6 grid gap-6" :class="others.length > 1 ? 'md:grid-cols-2' : ''">
      <article
        v-for="project in others"
        :key="project.title"
        class="flex flex-col rounded-lg border border-border bg-surface p-6"
      >
        <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 class="text-lg font-semibold tracking-tight text-ink">{{ project.title }}</h3>
          <span
            v-if="project.status"
            class="inline-flex items-center gap-1.5 text-xs font-medium text-muted"
          >
            <span class="h-1.5 w-1.5 rounded-full" :class="statusDot[project.status]" />
            {{ t(`projects.status.${project.status}`) }}
          </span>
        </div>
        <p class="mt-3 text-sm text-body">{{ project.description }}</p>

        <div v-if="project.objective" class="mt-4">
          <p class="text-xs font-medium text-muted">{{ t('projects.objectiveLabel') }}</p>
          <p class="mt-1 text-sm text-body">{{ project.objective }}</p>
        </div>

        <div class="mt-5 flex flex-1 flex-wrap content-end gap-1.5">
          <TagBadge v-for="tag in project.tags" :key="tag" :label="tag" />
        </div>

        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-accent hover:text-accent-hover hover:underline"
        >
          {{ t('projects.viewCode') }}
          <span class="sr-only">({{ t('common.newTab') }})</span>
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    </div>
  </AppSection>
</template>
