<script setup lang="ts">
// Section: Take action - dark banner with donation form
</script>

<template>
  <div class="relative w-full">
    <img src="../../assets/banner2.jpg" alt="" class="w-full h-full absolute inset-0 object-cover z-20" />
    <div class="absolute inset-0 z-40 bg-black bg-opacity-90"></div>
    <div class="relative z-50 w-full py-16 md:py-20">
      <div class="container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-16 items-stretch md:items-center justify-between">
        <div class="flex flex-col items-start gap-4 w-full md:w-1/2">
          <div class="w-full">
            <p class="text-xs md:text-sm font-normal text-[#94C93D] uppercase mb-1">Take action</p>
            <h3 class="text-2xl md:text-5xl text-white font-bold uppercase leading-tight mb-4 md:mb-2">
              A better future <br />
              is calling
            </h3>
          </div>
          <p class="text-sm md:text-base font-normal text-white leading-relaxed">
            From one gift, we restore native forests with local communities-bringing wildlife bac, creating fair livehoods, and building resilence to heat and floods. You'll recieve photo updates and project report as your impact takes root.
          </p>
        </div>

        <div class="w-full md:w-1/2 h-auto flex items-center md:justify-end">
          <div class="w-full max-w-md">
            <div class="bg-white p-6 rounded-lg shadow-lg w-full">
              <div class="flex justify-between mb-4 w-full border border-[#D0D5DD] rounded-lg overflow-hidden">
                <button class="text-[#94C93D] px-6 py-3 text-base w-1/2 bg-[#EDF3E5] border border-[#94C93D] font-semibold rounded-lg">One-time</button>
                <button class="text-[#153B35] px-6 py-3 text-base font-semibold flex items-center gap-1 w-1/2 justify-center">
                  <span class="text-xl">❤️</span> Monthly
                </button>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-4">
                <button class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors">$25</button>
                <button class="bg-[#94C93D] text-[#153B35] px-4 py-3 rounded-lg border border-[#94C93D] shadow-sm font-semibold uppercase">$50</button>
                <button class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors">$75</button>
                <button class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors">$100</button>
                <button class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors">$500</button>
                <button class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors">$1000</button>
              </div>
              <div class="mb-4 space-y-1.5">
                <div class="relative">
                  <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085] text-base">$</span>
                  <input type="number" placeholder="50" class="w-full pl-9 pr-3.5 py-3 border border-[#D0D5DD] rounded-lg text-center text-[#667085] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#94C93D] focus:border-transparent" />
                </div>
                <p class="text-center text-[#667085] text-sm">Enter your donation amount.</p>
              </div>
              <button class="w-full bg-[#94C93D] text-[#153B35] px-6 py-3 rounded-full font-semibold uppercase text-base border border-[#153B35] shadow-sm hover:bg-[#8BB835] transition-colors">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


