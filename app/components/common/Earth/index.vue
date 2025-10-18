<script setup lang="ts">
import { ref, computed } from "vue";
import mapUrl from "~/assets/Map.png";

/**
 * Earth map component
 *
 * Renders a circular masked map using the provided image. Users can:
 * - Click anywhere on the globe to pan the map to that point.
 * - Use prev/next buttons to step the view horizontally.
 *
 * Props
 * - src: Optional custom image URL for the map.
 * - zoom: Visual zoom factor applied to the map image.
 * - step: Horizontal pan step in percentage points for prev/next.
 * - initialX: Initial horizontal object-position in percent [0..100].
 * - initialY: Initial vertical object-position in percent [0..100].
 */
const props = withDefaults(
  defineProps<{
    src?: string;
    zoom?: number;
    step?: number;
    initialX?: number;
    initialY?: number;
  }>(),
  {
    zoom: 1.3,
    step: 10,
    initialX: 45,
    initialY: 50,
  },
);

const imgSrc = computed(() => props.src || mapUrl);

const containerRef = ref<HTMLDivElement | null>(null);
const x = ref<number>(props.initialX);
const y = ref<number>(props.initialY);

/** Clamp helper to keep values within [min, max]. */
function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Move viewport horizontally to the previous step.
 */
function prev(): void {
  x.value = clamp(x.value - props.step, 0, 100);
}

/**
 * Move viewport horizontally to the next step.
 */
function next(): void {
  x.value = clamp(x.value + props.step, 0, 100);
}

/**
 * Pan the map to the clicked position inside the circular container.
 */
function handleClick(ev: MouseEvent): void {
  const el = containerRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const nx = ((ev.clientX - rect.left) / rect.width) * 100;
  const ny = ((ev.clientY - rect.top) / rect.height) * 100;
  x.value = clamp(nx, 0, 100);
  y.value = clamp(ny, 0, 100);
}
</script>

<template>
  <div
    class="relative w-full max-w-sm md:max-w-none flex justify-center items-center"
  >
    <div class="relative w-[320px] md:w-[442px] aspect-square">
      <div
        ref="containerRef"
        class="relative w-full h-full rounded-full overflow-hidden bg-white border-[10px] md:border-[12px] border-[#E5E9EE] shadow-[0_0_40px_rgba(0,0,0,0.15)]"
        @click="handleClick"
      >
        <img
          :src="imgSrc"
          alt="earth"
          class="w-full h-full object-cover select-none pointer-events-none"
          :style="{
            objectPosition: `${x}% ${y}%`,
            transform: `scale(${props.zoom})`,
          }"
        />
      </div>

      <div
        class="absolute -bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:inset-0 flex gap-24 items-center justify-between px-2 md:px-0 pointer-events-none"
      >
        <button
          class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E] shadow-md pointer-events-auto ml-0 md:-ml-16"
          @click.stop="prev"
          aria-label="Previous"
        >
          <img src="../../../assets/left_icon.png" alt="left" />
        </button>
        <button
          class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E] shadow-md pointer-events-auto mr-0 md:-mr-16"
          @click.stop="next"
          aria-label="Next"
        >
          <img src="../../../assets/right_icon.png" alt="right" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Keep the ring smooth on high-DPI displays */
img {
  will-change: transform, object-position;
  transition:
    transform 300ms ease,
    object-position 300ms ease;
}
</style>
