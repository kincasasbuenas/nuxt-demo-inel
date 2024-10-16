<template>
  <button
    class="w-10 h-10 focus:outline-none bg-gray-700 rounded absolute top-4 right-3 z-20"
    @click="toggleMenu"
  >
    <div
      class="block w-5 absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span
        class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out"
        :class="{ 'rotate-45': isMenuOpen, '-translate-y-1.5': !isMenuOpen }"
      ></span>
      <span
        class="block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out"
        :class="{ 'opacity-0': isMenuOpen }"
      ></span>
      <span
        class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out"
        :class="{ '-rotate-45': isMenuOpen, 'translate-y-1.5': !isMenuOpen }"
      ></span>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
}>();
</script>
