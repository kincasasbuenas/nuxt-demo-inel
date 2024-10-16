<template>
  <h1 class="overflow-hidden">
    <span
      v-for="(char, index) in textChars"
      :key="`${char}-${index}`"
      :class="['animate-text-reveal', classes]"
      :style="{ animationDelay: `${delay + index * 0.05}s` }"
    >
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </h1>
</template>

<script lang="ts" setup>

const props = defineProps<{
  text: string
  delay: number
  classes?: string
}>()

const textChars = computed(() => props.text.match(/./gu) || []);
</script>
