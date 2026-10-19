<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()

// Un onglet reste actif sur ses sous-pages (/projects/gestion-stock garde « Projets »).
const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(`${to}/`)

const links = computed(() => [
  { name: t('nav.home'), to: '/' },
  { name: t('nav.skills'), to: '/skills' },
  { name: t('nav.projects'), to: '/projects' },
])

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
    <nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
      <RouterLink to="/" class="text-[15px] font-semibold tracking-tight text-ink">
        Portfolio
      </RouterLink>

      <div class="hidden h-full items-center gap-8 sm:flex">
        <ul class="flex h-full items-center gap-7">
          <li v-for="link in links" :key="link.to" class="h-full">
            <RouterLink
              :to="link.to"
              :aria-current="isActive(link.to) ? 'page' : undefined"
              class="relative flex h-full items-center text-sm font-medium text-muted transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 hover:text-ink aria-[current=page]:text-ink aria-[current=page]:after:bg-ink"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>

      <div class="flex items-center gap-3 sm:hidden">
        <LanguageSwitcher />
        <button
          class="rounded-md p-2 text-body transition-colors hover:bg-subtle"
          aria-label="Menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
              :d="open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'"
            />
          </svg>
        </button>
      </div>
    </nav>

    <ul v-if="open" class="border-t border-border px-6 py-2 sm:hidden">
      <li v-for="link in links" :key="link.to">
        <RouterLink
          :to="link.to"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="block py-3 text-sm font-medium text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
          @click="open = false"
        >
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
