<template>
  <header
    :class="[
      'text-white fixed w-full z-[1000] transition-colors duration-300 ease-in-out bg-[#143A35]',
      { 'shadow-md bg-[#fff]': isScrolled },
    ]"
  >
    <div class="px-6 md:px-20 py-4 md:py-[14px] relative">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img
              src="../../../assets/logo/logo-drak.svg"
              alt=""
              class="w-[117px] md:w-auto h-[53px] md:h-auto"
              :hidden="isScrolled"
            />
            <img
              src="../../../assets/logo/logo-light.svg"
              alt=""
              class="w-[117px] md:w-auto h-[53px] md:h-auto"
              :hidden="!isScrolled"
            />
          </NuxtLink>
        </div>

        <nav class="hidden lg:flex items-center space-x-12">
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            Our Work
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            Get Involved
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            Transparency
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            About Tree
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'text-white hover:text-[#9CCC3B] transition-colors font-medium uppercase text-sm',
              { '!text-[#475467]': isScrolled },
            ]"
          >
            Gift Trees
          </NuxtLink>
        </nav>

        <div class="flex items-center">
          <a
            id="donateBtnNav"
            href="#FUNGSLFMREB"
            :class="[
              'inline-block px-6 py-3 rounded-full font-semibold uppercase text-sm transition-colors',
              {
                'bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-semibold uppercase text-sm hover:bg-[#8BB835] transition-colors':
                  isScrolled,
                'bg-[#94C93B] text-[#153B35] hover:bg-[#8BB835]': !isScrolled,
              },
            ]"
          >
            Donate Now
          </a>

          <button
            class="lg:hidden ml-4 p-2 text-white hover:text-[#9CCC3B]"
            @click="toggleMobileMenu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              :stroke="isScrolled ? 'black' : 'currentColor'"
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

      <!-- Backdrop overlay -->
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/50 z-[-1] lg:hidden"
          @click="closeMobileMenu"
        />
      </Transition>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition transform duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition transform duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden origin-top overflow-hidden absolute left-0 right-0 top-full z-10 bg-[#143A3533] shadow-lg"
        >
          <nav class="py-4">
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              Our Work
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              Get Involved
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              Transparency
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              About Us
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              About Tree
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 py-2 text-white uppercase text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-2"
              @click="closeMobileMenu"
            >
              Gift Trees
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const headerOpacity = ref(0.8);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
/**
 * Update scroll state and smoothly interpolate header background opacity.
 * Opacity transitions from 0.8 at the top to 1.0 after ~200px scroll.
 */
const updateScrollState = () => {
  const y = window.scrollY || 0;
  isScrolled.value = y > 0;
  const t = Math.min(y / 200, 1);
  headerOpacity.value = 0.8 + 0.2 * t;
};

/**
 * Computed inline style for the header background color.
 */
const headerStyle = computed(() => ({
  backgroundColor: `rgba(26, 54, 53, ${headerOpacity.value})`,
}));
onMounted(() => {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollState);
});
</script>
