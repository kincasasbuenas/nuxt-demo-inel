<template>
  <div class="page-container">
    <LazyCursor v-if="!isMobile" />
    <LazyBackdrop />
    <LazyMenu />

    <div class="relative">
      <video
        ref="videoElement"
        class="w-full h-auto"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="@/assets/videos/intro.mp4" />
      </video>

      <div
        class="absolute top-1/2 right-0 mt-8 md:mr-12 transform translate-y-[-50%] p-4 text-right"
      >
        <LazyTextReveal
          :text="'Conocimiento'"
          :delay="0"
          classes="text-white text-3xl md:text-6xl uppercase font-black"
        />
        <div class="flex items-center gap-2 justify-end">
          <LazyTextReveal
            :text="'en'"
            :delay="1.5"
            classes="text-white md:text-5xl uppercase mt-1 font-extrabold"
          />
          <LazyTextReveal
            :text="'acción'"
            :delay="1.5"
            classes="text-[#43bdca] md:text-5xl uppercase mt-1 font-extrabold"
          />
        </div>
      </div>
    </div>

    <main class="custom-container py-24">
      <section class="content-section">
        <h2
          class="text-center text-2xl md:text-3xl font-bold text-blue-400 mb-12"
        >
          Comprometidos con tu
          <span class="text-cyan-500">crecimiento</span> profesional
        </h2>

        <LazyTabs :tabs="['Masterclass', 'Programas', 'Cursos corporativos']">
          <template #tab-1>
            <div
              class="max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
            >
              <LazyCard
                v-for="(item, index) in masterclass"
                :key="index"
                :imageSrc="item.image"
                :imageLabel="item.price"
                class="gradient min-w-[225px]"
              >
                <div
                  class="flex flex-col md gap-4 md:gap-6 text-white text-center text-sm"
                >
                  <h2 class="font-semibold mb-2">{{ item.title }}</h2>
                  <div class="flex justify-center items-center gap-2">
                    <p>{{ item.date }}</p>
                    <div class="border h-12"></div>
                    <div>
                      <p>{{ item.hours }}</p>
                      <p>{{ item.timezone }}</p>
                    </div>
                  </div>
                  <button
                    class="bg-white font-bold uppercase text-xs py-2 px-4 rounded-full text-cyan-500 transition duration-200 hover:scale-105"
                  >
                    Inscríbete
                  </button>
                </div>
              </LazyCard>
            </div>
          </template>

          <template #tab-2>
            <div
              class="max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
            >
              <LazyCard
                v-for="(item, index) in programs"
                :key="index"
                :imageSrc="item.image"
                :imageLabel="item.price"
                class="gradient min-w-[225px]"
              >
                <div
                  class="flex flex-col md gap-4 md:gap-6 text-white text-center text-sm"
                >
                  <h2 class="font-semibold mb-2">{{ item.title }}</h2>
                  <div class="flex justify-center items-center gap-2">
                    <p>{{ item.date }}</p>
                    <div class="border h-12"></div>
                    <div>
                      <p>{{ item.hours }}</p>
                      <p>{{ item.timezone }}</p>
                    </div>
                  </div>
                  <button
                    class="bg-white font-bold uppercase text-xs py-2 px-4 rounded-full text-cyan-500 transition duration-200 hover:scale-105"
                  >
                    Inscríbete
                  </button>
                </div>
              </LazyCard>
            </div>
          </template>

          <template #tab-3>
            <div
              class="max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
            >
              <LazyCard
                v-for="(item, index) in courses"
                :key="index"
                :imageSrc="item.image"
                :imageLabel="item.price"
                class="gradient min-w-[225px]"
              >
                <div
                  class="flex flex-col md gap-4 md:gap-6 text-white text-center text-sm"
                >
                  <h2 class="font-semibold mb-2">{{ item.title }}</h2>
                  <div class="flex justify-center items-center gap-2">
                    <p>{{ item.date }}</p>
                    <div class="border h-12"></div>
                    <div>
                      <p>{{ item.hours }}</p>
                      <p>{{ item.timezone }}</p>
                    </div>
                  </div>
                  <button
                    class="bg-white font-bold uppercase text-xs py-2 px-4 rounded-full text-cyan-500 transition duration-200 hover:scale-105"
                  >
                    Inscríbete
                  </button>
                </div>
              </LazyCard>
            </div>
          </template>
        </LazyTabs>
      </section>
    </main>

    <LazyChatButton />

    <LazyFooter />
  </div>
</template>

<script lang="ts" setup>
import { useIsMobile } from "@/composables/useIsMobile";

const { isMobile } = useIsMobile();
const videoElement = ref<HTMLVideoElement | null>(null);

const masterclass = ref([
  {
    title: "Garantiza la protección de los Equipos Electrónicos",
    price: "gratuito",
    image: "image-3.jpeg",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Garantiza la protección de los Equipos Electrónicos",
    price: "gratuito",
    image: "image-2.jpeg",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Garantiza la protección de los Equipos Electrónicos",
    price: "gratuito",
    image: "image-1.jpeg",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
]);

const programs = ref([
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
]);

const courses = ref([
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    price: "gratuito",
    image: "placeholder.png",
    date: "08 Jun",
    hours: "08:00 - 10:00",
    timezone: "(UTC - 05:00)",
  },
]);

onMounted(() => {
  if (videoElement.value) {
    videoElement.value.play().catch((error) => {
      console.error("Error al intentar reproducir el video:", error);
    });
  }
});
</script>
