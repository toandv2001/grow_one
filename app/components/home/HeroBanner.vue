<script setup lang="ts">
// Hero banner of the homepage
// Displays full-bleed background image, headline, subcopy and primary CTA
</script>

<template>
  <div class="relative w-full h-[80vh] md:h-screen overflow-hidden">
    <img
      src="../../assets/banner.jpg"
      alt="Banner Image"
      class="w-full h-full absolute inset-0 object-cover z-10"
      onerror="this.src='https://via.placeholder.com/1920x1080?text=Image+Not+Found'; console.error('Image failed to load');"
    />
    <div
      class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center"
    >
      <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white mb-4 capitalize">
        We grow forest
      </h1>
      <p class="text-base md:text-xl text-white mb-6 max-w-4xl mx-auto px-4 md:px-0">
        Facing a climate crisis, we’re planting a forest of solutions. Grow One Future restores ecosystems, empowers communities, and builds a better tomorrow, one tree at a time
      </p>
      <a
        id="donateBtnNav"
        href="#FUNGSLFMREB"
        class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors"
      >
        Donate Now
      </a>
    </div>
  </div>
</template>


