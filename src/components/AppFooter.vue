<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto border-t border-border">
    <div
      class="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center"
    >
      <p>© {{ year }} {{ t('footer.copyright') }}</p>
      <p>{{ t('footer.built') }}</p>
    </div>
  </footer>
</template>
