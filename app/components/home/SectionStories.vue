<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
// Section: Stories carousel with prev/next controls
</script>

<template>
  <div class="relative">
    <img src="../../assets/Section 6.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
    <div class="container mx-auto px-4 pt-[100px] pb-[164px] flex gap-8 items-start flex-col relative z-20">
      <div class="w-full flex flex-col items-start gap-4">
        <p class="text-[#94C93D] text-sm uppercase font-semibold">Make our mision grow</p>
        <div class="flex justify-between items-center gap-8 w-full">
          <h3 class="text-6xl font-bold capitalize">Story of recovery & hope</h3>
          <div class="flex gap-2">
            <button class="bg-[#92C73E] rounded-full outline-none w-6 h-6 grid place-items-center">
              <img src="../../assets/right_icon.png" alt="" />
            </button>
            <span class="text-base font-semibold uppercase"> View all </span>
          </div>
        </div>
      </div>

      <div class="w-full relative">
        <button class="stories-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-10 rounded-md items-center justify-center shadow-lg bg-white/90 hover:bg-white" aria-label="Previous">
          <img src="../../assets/left_icon.png" alt="previous" />
        </button>
        <ClientOnly>
          <Swiper
            :modules="[Autoplay, Navigation]"
            :slides-per-view="1.1"
            :space-between="16"
            :loop="true"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 }, 1280: { slidesPerView: 3, spaceBetween: 28 } }"
            :navigation="{ prevEl: '.stories-prev', nextEl: '.stories-next' }"
            class="stories-swiper px-2 w-full"
          >
            <SwiperSlide>
              <div class="shadow-lg w-full bg-white rounded-xl overflow-hidden">
                <img src="../../assets/hope.png" alt="" class="w-full h-auto" />
                <div class="p-4 w-full flex flex-col gap-2 items-start">
                  <h3 class="font-bold text-2xl">Become a member</h3>
                  <p class="text-base text-[#475467] w-full">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
                  <div class="w-full h-[2px] bg-gray-400"></div>
                  <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="shadow-lg w-full bg-white rounded-xl overflow-hidden">
                <img src="../../assets/hope2.png" alt="" class="w-full h-auto" />
                <div class="p-4 w-full flex flex-col gap-2 items-start">
                  <h3 class="font-bold text-2xl">Corporate partnerships</h3>
                  <p class="text-base text-[#475467] w-full">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
                  <div class="w-full h-[2px] bg-gray-400"></div>
                  <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="shadow-lg w-full bg-white rounded-xl overflow-hidden">
                <img src="../../assets/hope3.png" alt="" class="w-full h-auto" />
                <div class="p-4 w-full flex flex-col gap-2 items-start">
                  <h3 class="font-bold text-2xl">Corporate partnerships</h3>
                  <p class="text-base text-[#475467] w-full">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
                  <div class="w-full h-[2px] bg-gray-400"></div>
                  <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
        <button class="stories-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-10 rounded-md items-center justify-center shadow-lg bg-white/90 hover:bg-white" aria-label="Next">
          <img src="../../assets/right_icon.png" alt="next" />
        </button>
      </div>
    </div>
  </div>
</template>


