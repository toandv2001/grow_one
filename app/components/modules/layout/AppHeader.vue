<template>
  <header :class="!isScrolled?['text-white fixed w-full z-50 bg-[#1A3635]/80']:['text-white fixed w-full z-[100] bg-[#1A3635]']">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img src="../../../assets/logo.png" alt="">
          </NuxtLink>
        </div>

        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            to="/our-work"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            Our Work
          </NuxtLink>
          <NuxtLink
            to="/get-involved"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            Get Involved
          </NuxtLink>
          <NuxtLink
            to="/transparency"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            Transparency
          </NuxtLink>
          <NuxtLink
            to="/about-us"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="/about-tree"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            About Tree
          </NuxtLink>
          <NuxtLink
            to="/gift-trees"
            class="text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm"
          >
            Gift Trees
          </NuxtLink>
        </nav>

        <div class="flex items-center">
          <button
            class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors"
          >
            Donate Now
          </button>

          <button
            class="lg:hidden ml-4 p-2 text-white hover:text-[#9CCC3B]"
            @click="toggleMobileMenu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-[#2A4645]">
        <nav class="py-4 space-y-3">
          <NuxtLink
            to="/our-work"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            Our Work
          </NuxtLink>
          <NuxtLink
            to="/get-involved"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            Get Involved
          </NuxtLink>
          <NuxtLink
            to="/transparency"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            Transparency
          </NuxtLink>
          <NuxtLink
            to="/about-us"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="/about-tree"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            About Tree
          </NuxtLink>
          <NuxtLink
            to="/gift-trees"
            class="block px-4 py-2 text-white hover:text-[#9CCC3B] hover:bg-[#2A4645] rounded uppercase text-sm font-medium"
            @click="closeMobileMenu"
          >
            Gift Trees
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0; // Đổi màu khi cuộn xuống (scrollY > 0)
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
