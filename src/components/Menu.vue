<template>
  <header
    class="header fixed w-full flex justify-between items-center px-4 md:px-12 z-20 transition-colors duration-300 bg-transparent"
    :class="{
      'bg-transparent': !scrolledFromTop || isMobile,
      gradient: scrolledFromTop && !isMobile,
    }"
  >
    <a class="z-20 shrink-0" href="#">
      <img
        src="/images/logo.png"
        alt="Inel Logo"
        class="h-20 w-32 transition-all duration-700 md:opacity-100 object-cover"
        :class="{
          'opacity-100': !scrolledFromTop && isMenuOpen,
          'opacity-0 ': scrolledFromTop && !isMenuOpen,
        }"
      />
    </a>
    <nav>
      <LazyMenuToggleButton :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" class="block md:hidden" />
      <ul
        class="absolute h-screen top-0 md:h-fit bg-blue-500 md:bg-transparent left-0 right-0 min-h-screen transform transition duration-700 md:relative flex flex-col md:flex-row md:min-h-0 md:py-2 md:translate-x-0 py-40 px-6 gap-y-4 md:gap-y-2 gap-x-4 flex-wrap md:justify-end"
        :class="{
          'translate-x-full': !isMenuOpen,
          'translate-x-0': isMenuOpen,
        }"
      >
        <li
          v-for="page of pages"
          class="text-sm md:py-1 md:px-6 border-2 md:rounded-full border-transparent text-white hover:text-black md:hover:bg-white font-bold transition-all duration-300 cursor-pointer"
          :class="{ ' md:border-white ': scrolledFromTop }"
        >
          <NuxtLink :to="page.link">
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useMenu } from "@/composables/useMenu";
import { useIsMobile } from "@/composables/useIsMobile";

const { isMenuOpen, toggleMenu, pages } = useMenu();
const { isMobile } = useIsMobile();

const scrolledFromTop = ref(false);

const scrollFunction = () => {
  scrolledFromTop.value = window.scrollY > 60 ? true : false;
};

onMounted(() => {
  scrollFunction();
  window.addEventListener("scroll", scrollFunction);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollFunction);
});
</script>
