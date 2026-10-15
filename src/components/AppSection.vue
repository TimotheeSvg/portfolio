<script setup lang="ts">
defineProps<{
  id?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section :id="id" class="mx-auto w-full max-w-5xl px-6 py-12 sm:py-14">
    <header class="mb-8 max-w-2xl">
      <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-2 text-muted">{{ subtitle }}</p>
    </header>
    <slot />
  </section>
</template>
