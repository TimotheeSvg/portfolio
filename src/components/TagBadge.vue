<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-gray-300"
  >
    {{ label }}
  </span>
</template>
