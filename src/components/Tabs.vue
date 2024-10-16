<template>
  <!-- Contenedor de botones con max-w-lg -->
  <div class="max-w-lg mx-auto">
    <div
      class="mb-4 flex flex-row gap-4 px-3 py-2 bg-white rounded-lg md:rounded-full md:border-2 md:border-[#45a7e2] overflow-auto"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index + 1)"
        :class="{ 'bg-blue-400 text-white': openTab === index + 1 }"
        class="flex-1 font-semibold w-fit mx-auto text-sm leading-4 py-2 md:py-1 px-4 rounded-full focus:outline-none focus:shadow-outline-blue transition-all duration-200 hover:scale-105"
      >
        {{ tab }}
      </button>
    </div>
  </div>

  <div class="w-full">
    <div v-for="(tab, index) in tabs" :key="index">
      <div
        v-show="openTab === index + 1"
        class="transition-all duration-300 p-4"
        :class="{
          'animate-slide-in': openTab === index + 1,
          'opacity-0': previousTab !== openTab,
        }"
      >
        <slot :name="'tab-' + (index + 1)"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  tabs: string[];
}>();

const openTab = ref(1);
const previousTab = ref(1);

const changeTab = (tabIndex: number) => {
  previousTab.value = openTab.value;
  openTab.value = tabIndex;
};
</script>
