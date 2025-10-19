<template>
  <div class="">
    <div
      class="w-full mx-auto h-[200px] sm:h-[240px] md:h-[320px] lg:h-[400px] xl:h-[503px]"
    >
      <div
        ref="containerRef"
        class="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl cursor-col-resize select-none h-full"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseUp"
        @touchstart="handleMouseDown"
        @touchend="handleMouseUp"
        @touchmove="handleTouchMove"
        @click="handleClick"
      >
        <!-- Image 1 (Bottom/Background) -->
        <div class="absolute inset-0">
          <img
            :src="imageR"
            alt="After"
            class="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <!-- Image 2 (Top/Foreground) with clip -->
        <div
          class="absolute inset-0 transition-none"
          :style="{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }"
        >
          <img
            :src="imageL"
            alt="Before"
            class="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <!-- Slider Line and Handle -->
        <div
          class="absolute top-0 bottom-0 shadow-lg transition-none"
          :style="{ left: `${sliderPosition}%` }"
        >
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="relative gap-2 sm:gap-3 w-[80px] sm:w-[100px] md:w-[120px] h-[36px] sm:h-[42px] md:h-[48px] bg-white rounded-[6px] sm:rounded-[8px] py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 sm:hover:scale-110 transition-transform"
            >
              <!-- Tree icon centered above the handle; pointer events disabled to avoid drag interference -->
              <img
                :src="treeIcon"
                alt="Tree icon"
                class="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 pointer-events-none drop-shadow-md"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :width="16"
                :height="16"
                class="sm:w-5 sm:h-5 md:w-5 md:h-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#153B35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span
                class="text-xs sm:text-sm md:text-base font-semibold text-[#153B35]"
                >{{ calculatedTreeCount }}</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :width="16"
                :height="16"
                class="sm:w-5 sm:h-5 md:w-5 md:h-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="#153B35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Display TreeCount -->
      </div>

      <div
        class="mt-3 sm:mt-4 md:mt-6 text-center text-gray-400 text-xs sm:text-sm"
      >
        <p class="hidden sm:block">
          Kéo thanh trượt hoặc click vào vị trí bất kỳ để so sánh ảnh
        </p>
        <p class="sm:hidden">Kéo để so sánh ảnh</p>
        <p class="mt-1 sm:mt-2 text-xs">
          Vị trí: {{ Math.round(sliderPosition) }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import imageR from "@/assets/imageR.png";
import imageL from "@/assets/imageL.png";
import treeIcon from "@/assets/tree.png";

const props = defineProps<{
  treeCount: number;
  handleChangeTreeCount: (count: number) => void;
  minTreeCount?: number;
  maxTreeCount?: number;
}>();

// Giá trị mặc định cho min/max nếu không được truyền vào
const minTree = props.minTreeCount || 0;
const maxTree = props.maxTreeCount || 100;

const sliderPosition = ref(50);
const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);

// Tính toán treeCount dựa trên vị trí slider
// Slider ở 0% = minTreeCount, Slider ở 100% = maxTreeCount
const calculatedTreeCount = computed(() => {
  const count = minTree + ((maxTree - minTree) * sliderPosition.value) / 100;
  return Math.round(count);
});

// Watch slider position và gọi callback khi thay đổi
watch(calculatedTreeCount, (newCount) => {
  if (props.handleChangeTreeCount) {
    props.handleChangeTreeCount(newCount);
  }
});

const handleMove = (clientX: any) => {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect() as any;
  const x = clientX - rect.left;
  const percentage = (x / rect.width) * 100;

  sliderPosition.value = Math.min(Math.max(percentage, 0), 100);
};

const handleMouseDown = () => {
  isDragging.value = true;
};

const handleMouseUp = () => {
  isDragging.value = false;
};

const handleMouseMove = (e: any) => {
  if (!isDragging.value) return;
  handleMove(e.clientX);
};

const handleTouchMove = (e: any) => {
  if (!isDragging.value) return;
  handleMove(e.touches[0].clientX);
};

const handleClick = (e: any) => {
  handleMove(e.clientX);
};
</script>

<style scoped>
/* Tailwind CSS đã được tích hợp sẵn trong Nuxt 4 */
</style>
