import { ref, onMounted, onUnmounted, computed } from "vue";

export function useIsMobile() {
  const windowWidth = ref(0);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  const isMobile = computed(() => windowWidth.value < 768);

  return { isMobile };
}
