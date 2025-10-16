<script setup lang="ts">
// Section: Why this work - 3 image cards with overlay captions
</script>

<template>
  <div class="relative">
    <img src="../../assets/Section 4.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
    <div class="container mx-auto px-4 pt-[100px] pb-[164px] flex gap-4 items-center flex-col relative z-20">
      <div class="flex items-start flex-col gap-4">
        <div class="flex items-start flex-col gap-4">
          <p class="text-sm text-[#94C93D] uppercase">why this work</p>
          <h3 class="text-6xl font-bold">Restore Nature. grow prosperity. fight climate change.</h3>
        </div>
        <p class="text-base text-[#475467] max-w-[844px]">Forests are where nature, people, and climate meet. With local communities, we restore ecosystem, create fair livelihoods, and build resilience to heat and floods</p>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
          <img src="../../assets/people.png" alt="people" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5">
            <h3 class="text-xl font-bold mb-2">People (Prosperity)</h3>
            <p class="text-base">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
          </div>
        </div>
        <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
          <img src="../../assets/nature.png" alt="nature" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5">
            <h3 class="text-xl font-bold mb-2">Nature (Biodiversity)</h3>
            <p class="text-base">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
          </div>
        </div>
        <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
          <img src="../../assets/climate.png" alt="people" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5">
            <h3 class="text-xl font-bold mb-2">Climate (Resilience)</h3>
            <p class="text-base">We partner with farmers and cooperatives to fund nurseries, training, and agroforestry-keeping benefits in the community.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


