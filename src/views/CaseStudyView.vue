<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TagBadge from '../components/TagBadge.vue'
import type { CaseFigure, CaseStudy } from '../i18n/types'

const props = defineProps<{ slug: string }>()

const { t, tm, locale } = useI18n()

const studies = computed<Record<string, CaseStudy>>(() => {
  void locale.value
  return tm('caseStudies') as Record<string, CaseStudy>
})

const study = computed<CaseStudy | undefined>(() =>
  Object.hasOwn(studies.value, props.slug) ? studies.value[props.slug] : undefined,
)

// La première image de la page est chargée sans attendre, les suivantes à la demande.
const firstFigureSection = computed(
  () => study.value?.sections.findIndex((section) => section.figures?.length) ?? -1,
)

// Dimensions des versions réduites (srcSm) : bureau 1200 × 750, mobile 585 × 1266.
function imageAttrs(figure: CaseFigure) {
  return figure.mobile
    ? {
        srcset: `${figure.srcSm} 585w, ${figure.src} 1170w`,
        sizes: '20rem',
        width: 585,
        height: 1266,
      }
    : {
        srcset: `${figure.srcSm} 1200w, ${figure.src} 2400w`,
        sizes: '(min-width: 1024px) 960px, 100vw',
        width: 1200,
        height: 750,
      }
}

// Passe après le titre posé par le routeur et par App.vue (changement de langue).
watchEffect(
  () => {
    if (study.value) document.title = `${study.value.title} | ${t('meta.base')}`
  },
  { flush: 'post' },
)
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-6 py-12 sm:py-14">
    <RouterLink
      :to="{ name: 'projects' }"
      class="text-sm font-medium text-accent hover:text-accent-hover hover:underline"
    >
      {{ t('caseStudy.back') }}
    </RouterLink>

    <p v-if="!study" class="mt-8 text-body">{{ t('caseStudy.notFound') }}</p>

    <article v-else class="mt-8">
      <header class="max-w-2xl">
        <h1 class="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
          {{ study.title }}
        </h1>
        <p class="mt-2 text-muted">{{ study.context }} · {{ study.period }}</p>
        <p class="mt-5 text-body">{{ study.intro }}</p>
      </header>

      <section v-for="(section, sIndex) in study.sections" :key="sIndex" class="mt-12">
        <h2 class="text-xl font-semibold tracking-tight text-ink">{{ section.title }}</h2>

        <p
          v-for="(paragraph, pIndex) in section.paragraphs"
          :key="pIndex"
          class="mt-3 max-w-2xl text-body"
        >
          {{ paragraph }}
        </p>

        <ul
          v-if="section.bullets?.length"
          class="mt-5 max-w-2xl list-disc space-y-1.5 pl-5 text-sm text-body marker:text-border-strong"
        >
          <li v-for="(bullet, bIndex) in section.bullets" :key="bIndex">{{ bullet }}</li>
        </ul>

        <figure
          v-for="(figure, fIndex) in section.figures"
          :key="fIndex"
          class="mt-6"
          :class="{ 'mx-auto max-w-xs': figure.mobile }"
        >
          <a :href="figure.src" target="_blank" rel="noopener noreferrer" class="block">
            <img
              :src="figure.srcSm"
              v-bind="imageAttrs(figure)"
              :alt="figure.alt"
              :loading="sIndex === firstFigureSection && fIndex === 0 ? 'eager' : 'lazy'"
              decoding="async"
              class="rounded-md border border-border"
            />
            <span class="sr-only">{{ t('caseStudy.enlarge') }} ({{ t('common.newTab') }})</span>
          </a>
          <figcaption class="mt-2 text-sm text-muted">{{ figure.caption }}</figcaption>
        </figure>
      </section>

      <div class="mt-12 border-t border-border pt-6">
        <p class="text-xs font-medium text-muted">{{ t('caseStudy.stackLabel') }}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <TagBadge v-for="tag in study.stack" :key="tag" :label="tag" />
        </div>
      </div>

      <p class="mt-6 text-xs text-muted">{{ study.note }}</p>

      <div class="mt-10 rounded-lg border border-border bg-surface p-6">
        <p class="max-w-2xl text-body">{{ study.cta.text }}</p>
        <a
          :href="study.cta.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
        >
          {{ study.cta.linkLabel }}
          <span class="sr-only">({{ t('common.newTab') }})</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  </div>
</template>
