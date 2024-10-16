<template>
  <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div class="relative">
      <img :src="`/images/${imageSrc}`" class="w-full h-48 object-cover" alt="Card Image" />
      <div
        class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold uppercase rounded-full px-6 py-2"
      >
        {{ imageLabel }}
      </div>
    </div>

    <div class="p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageLabel: string;
}>();
</script>
