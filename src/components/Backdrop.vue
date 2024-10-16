<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 h-screen z-10 bg-[#00000080] md:bg-white md:hidden transition-all duration-700"
      :class="{
        '!opacity-100': isMenuOpen,
        '!opacity-0 pointer-events-none': !isMenuOpen
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { useMenu } from '@/composables/useMenu'

const { isMenuOpen } = useMenu()
</script>
