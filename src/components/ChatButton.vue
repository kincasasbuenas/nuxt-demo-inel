<template>
  <div class="fixed bottom-[90px] right-6 z-50">
    <button
      @click="startChat"
      class="gradient flex items-center justify-center text-white font-bold text-sm py-3 px-5 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
    >
      <span class="mr-2"><i class="bi bi-chat-dots"></i></span>
      Chatea con Inelito
    </button>
  </div>
</template>

<script setup lang="ts">
const startChat = () => {
  console.log("Iniciar chat con Inelito");
};
</script>
