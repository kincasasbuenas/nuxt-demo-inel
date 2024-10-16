<template>
    <div
      class="cursor fixed w-2 h-2 rounded-full bg-blue-500 pointer-events-none transition-all z-50"
      :style="{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }"
    ></div>
  </template>
  
  <script setup lang="ts">
  
  const position = ref({ x: 0, y: 0 });
  const target = ref({ x: 0, y: 0 });
  
  const updateCursorPosition = (event: MouseEvent) => {
    target.value.x = event.clientX;
    target.value.y = event.clientY;
  };
  
  const animateCursor = () => {
    position.value.x += (target.value.x - position.value.x) * 0.1;
    position.value.y += (target.value.y - position.value.y) * 0.1; 
    
    requestAnimationFrame(animateCursor);
  };
  
  onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    animateCursor();
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateCursorPosition);
  });
  </script>
  
  <style scoped>
  .cursor {
    transition: background-color 0.2s;
  }
  </style>
  