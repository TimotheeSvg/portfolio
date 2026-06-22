<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section :id="id" class="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
    <header class="mb-10 max-w-2xl">
      <p
        v-if="eyebrow"
        class="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]"
      >
        {{ eyebrow }}
      </p>
      <h2 class="text-3xl font-bold text-white sm:text-4xl">{{ title }}</h2>
    </header>
    <slot />
  </section>
</template>
