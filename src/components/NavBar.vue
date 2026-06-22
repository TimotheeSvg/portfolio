<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const links = computed(() => [
  { name: t('nav.home'), to: '/' },
  { name: t('nav.skills'), to: '/skills' },
  { name: t('nav.projects'), to: '/projects' },
])

const open = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-lg font-bold tracking-tight text-white">
        <span class="text-[var(--color-accent-soft)]">&lt;</span>Portfolio<span
          class="text-[var(--color-accent-soft)]"
          >/&gt;</span
        >
      </RouterLink>

      <div class="hidden items-center gap-4 sm:flex">
        <ul class="flex items-center gap-1">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
              active-class="!text-white bg-[var(--color-surface)]"
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
          class="rounded-lg p-2 text-gray-300 transition-colors hover:bg-[var(--color-surface)]"
          aria-label="Menu"
          @click="open = !open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>
    </nav>

    <ul
      v-if="open"
      class="border-t border-[var(--color-border)] px-6 py-2 sm:hidden"
    >
      <li v-for="link in links" :key="link.to">
        <RouterLink
          :to="link.to"
          class="block rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
          active-class="!text-white"
          @click="open = false"
        >
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
