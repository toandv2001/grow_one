<script setup lang="ts">
import HomeSection5 from "~/components/home/HomeSection5.vue";
// Section: Forest CTA with slider and donate button
</script>

<template>
  <div class="bg-[#F4F1DC]">
    <div class="container mx-auto px-4 py-12 flex gap-4 items-center flex-col">
      <div class="flex items-center justify-center flex-col gap-4 w-full">
        <p class="text-sm text-[#94C93D] font-normal">Forest</p>
        <h3 class="text-3xl md:text-5xl font-bold text-center">From one tree to a thriving community forest</h3>
        <p class="text-[15px] text-[#475467] max-w-[917px] text-center px-2">
          We restore native forests with local communities—reviving biodiversity, strengthening livelihoods, and stabilizing climate.<br />Inspired by the next generation, Grow One Future calls you to act now—with transparent updates for our children’s future.
        </p>
      </div>
      <div class="w-full min-h-[240px] md:min-h-[503px] rounded-3xl overflow-hidden">
        <home-section5 />
      </div>
      <div class="w-full flex justify-center items-center gap-4 flex-col">
        <div class="flex justify-center items-center gap-2">
          <p class="text-2xl font-semibold">12</p>
          <img src="../../assets/tree.png" alt="tree" />
        </div>
        <a id="donateBtnNav" href="#FUNGSLFMREB" class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors">
          Donate Now
        </a>
      </div>
    </div>
  </div>
</template>


