<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const { t, locale } = useI18n()

// Garde le titre de l'onglet synchronisé avec la langue active.
watch(locale, () => {
  const base = t('meta.base')
  const titleKey = route.meta.titleKey as string | undefined
  document.title = titleKey ? `${t(titleKey)} | ${base}` : base
})
</script>

<template>
  <NavBar />
  <main class="flex-1">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
