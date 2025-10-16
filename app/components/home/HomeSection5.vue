<template>
  <div class="w-full mx-auto h-[503px]">
    <div
      ref="containerRef"
      class="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-col-resize select-none h-full"
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
      <div class="absolute inset-0 h-[503px]">
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
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        >
          <svg
            class="w-5 h-5 text-gray-700 absolute left-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            class="w-5 h-5 text-gray-700 absolute right-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <!-- Display TreeCount -->
      </div>
    </div>

    <div class="mt-6 text-center text-gray-400 text-sm">
      <p>Kéo thanh trượt hoặc click vào vị trí bất kỳ để so sánh ảnh</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import imageR from "@/assets/imageR.png";
import imageL from "@/assets/imageL.png";

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
