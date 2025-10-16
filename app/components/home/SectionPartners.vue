<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
// Section: Partners slider on green background
</script>

<template>
  <div class="bg-[#94C93D] w-full">
    <div class="px-0 py-10 flex gap-[18px] items-center flex-col">
      <h3 class="font-bold text-2xl md:text-6xl text-center text-[#153B35] capitalize px-4">Out of partner</h3>
      <div class="w-full px-4">
        <ClientOnly>
          <Swiper
            :modules="[Autoplay]"
            :slides-per-view="3"
            :space-between="36"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :breakpoints="{ 640: { slidesPerView: 3, spaceBetween: 28 }, 768: { slidesPerView: 4, spaceBetween: 32 }, 1024: { slidesPerView: 5, spaceBetween: 40 }, 1280: { slidesPerView: 6, spaceBetween: 44 } }"
            :centered-slides="false"
            class="partners-swiper w-full"
          >
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/samsung.png" alt="Samsung" class="w-[72px] md:w-[120px] h-auto object-contain" />
            </SwiperSlide>
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/microsoft.png" alt="Microsoft" class="w-[72px] md:w-[120px] h-auto object-contain" />
            </SwiperSlide>
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/google.png" alt="Google" class="w-[72px] md:w-[120px] h-auto object-contain" />
            </SwiperSlide>
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/slack.png" alt="Slack" class="w-[72px] md:w-[90px] h-auto object-contain" />
            </SwiperSlide>
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/lg.png" alt="LG" class="w-[72px] md:w-[110px] h-auto object-contain" />
            </SwiperSlide>
            <SwiperSlide class="!flex !items-center !justify-center">
              <img src="../../assets/sony.png" alt="Sony" class="w-[72px] md:w-[90px] h-auto object-contain" />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners-swiper {
  width: 100%;
}
.partners-swiper :deep(.swiper-wrapper) {
  align-items: center;
}
.partners-swiper :deep(.swiper-slide) {
  height: auto;
}
</style>


