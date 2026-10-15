<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border border-border bg-subtle px-2 py-0.5 text-xs font-medium text-body"
  >
    {{ label }}
  </span>
</template>
