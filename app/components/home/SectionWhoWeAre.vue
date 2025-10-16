<script setup lang="ts">
// Section: Who we are with Earth image and CTA chips
</script>

<template>
  <div class="relative">
    <img src="../../assets/Section 9.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
    <div class="container mx-auto px-4 pt-16 md:pt-[160px] pb-20 md:pb-[295px] flex flex-col md:flex-row gap-8 md:gap-4 items-center">
      <div class="w-full md:w-1/2 flex justify-center items-center relative">
        <img src="../../assets/vetinh1.png" alt="vetinh1" class="hidden md:block absolute w-[43px] h-[43px] top-[70px] left-[120px]" />
        <img src="../../assets/vetinh2.png" alt="vetinh2" class="hidden md:block absolute w-[43px] h-[43px] top-[450px] right-[120px]" />
        <div class="w-full max-w-sm md:max-w-none">
          <img src="../../assets/Earth.png" alt="earth" class="w-full h-auto" />
        </div>
        <div class="absolute w-[90%] h-full flex justify-between items-center">
          <button class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E]">
            <img src="../../assets/left_icon.png" alt="left" />
          </button>
          <button class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E]">
            <img src="../../assets/right_icon.png" alt="right" />
          </button>
        </div>
      </div>
      <div class="h-auto md:h-[500px] w-full md:w-1/2 flex items-start gap-6 md:gap-8 flex-col relative z-20">
        <div class="w-full flex items-start gap-2 flex-col">
          <p class="text-sm text-[#94C93D] uppercase">Who we are</p>
          <h3 class="font-bold text-6xl uppercase leading-[100%]">Global Nonprofit Growing Forests, Livelihoods, and Climate Solutions</h3>
        </div>
        <p class="text-[#475467] text-base font-normal">
          We are a global nonprofit with a threefold mission: restore forests, empower communities with sustainable livelihoods, and drive lasting climate solutions. Every tree we plant is part of a future we grow together.
        </p>
        <div class="w-full flex items-start gap-4">
          <div class="flex gap-2">
            <button class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]">
              <img src="../../assets/right_icon.png" alt="" />
            </button>
            <span class="text-base font-semibold">Out Impact</span>
          </div>
          <div class="flex gap-2">
            <button class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]">
              <img src="../../assets/right_icon.png" alt="" />
            </button>
            <span class="text-base font-semibold">About Us</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


