<template>
  <header
    :class="[
      'fixed w-full z-[1000] transition-colors duration-300 ease-in-out',
      isGreenTheme ? 'bg-[#143A35] text-white' : 'bg-[#fff] shadow-md',
    ]"
  >
    <div class="px-6 xl:px-20 lg:px-10 py-4 xl:py-[14px] lg:py-[12px] relative">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img
              src="../../../assets/logo/logo-light.svg"
              alt=""
              class="w-[117px] lg:w-[100px] xl:w-auto h-[53px] md:h-auto"
              :hidden="isGreenTheme"
            />
            <img
              src="../../../assets/logo/logo-drak.svg"
              alt=""
              class="w-[117px] xl:w-auto lg:w-[100px] h-[53px] md:h-auto"
              :hidden="!isGreenTheme"
            />
          </NuxtLink>
        </div>

        <nav class="hidden lg:flex items-center xl:space-x-12 lg:space-x-4">
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            Our Work
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            Get Involved
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            Transparency
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            About Tree
          </NuxtLink>
          <NuxtLink
            to="#"
            :class="[
              'transition-colors font-medium uppercase xl:text-sm lg:text-xs',
              isGreenTheme
                ? 'text-white hover:text-[#9CCC3B]'
                : 'text-[#153B35] hover:text-[#9CCC3B]',
            ]"
          >
            Gift Trees
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a
            id="donateBtnNav"
            href="#FUNGSLFMREB"
            :class="[
              'inline-block xl:px-6 xl:py-3 lg:px-3 lg:py-1.5 rounded-full font-semibold uppercase xl:text-sm lg:text-xs transition-colors',
              isGreenTheme
                ? 'bg-[#94C93B] text-[#153B35] hover:bg-[#8BB835]'
                : 'bg-[#9CCC3B] text-[#1A3635] hover:bg-[#8BB835]',
            ]"
          >
            Donate Now
          </a>

          <button
            class="lg:hidden p-1.5 sm:p-2 hover:text-[#9CCC3B] transition-colors"
            :class="isGreenTheme ? 'text-white' : 'text-[#153B35]'"
            @click="toggleMobileMenu"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              :stroke="'currentColor'"
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
          class="lg:hidden origin-top overflow-hidden absolute left-0 right-0 top-full z-10 bg-[#143A35] bg-opacity-95 backdrop-blur-sm shadow-lg"
        >
          <nav class="py-3 sm:py-4">
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
              @click="closeMobileMenu"
            >
              Our Work
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
              @click="closeMobileMenu"
            >
              Get Involved
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
              @click="closeMobileMenu"
            >
              Transparency
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
              @click="closeMobileMenu"
            >
              About Us
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
              @click="closeMobileMenu"
            >
              About Tree
            </NuxtLink>
            <NuxtLink
              to="#"
              class="block px-4 sm:px-6 py-2.5 sm:py-3 text-white uppercase text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:translate-x-2 hover:bg-white hover:bg-opacity-10"
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
// Default green on initial load
const isGreenTheme = ref(true);
let observer: IntersectionObserver | null = null;

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Synchronous initial theme (avoid flicker): evaluate immediately on client
if (typeof window !== "undefined") {
  const secs = Array.from(
    document.querySelectorAll<HTMLElement>("[data-header-theme]"),
  );
  if (secs.length) {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const visible = secs
      .map((el) => ({ el, rect: el.getBoundingClientRect() }))
      .filter(({ rect }) => rect.top < vh && rect.bottom > 0)
      .sort((a, b) => Math.abs(a.rect.top) - Math.abs(b.rect.top));
    const target = (visible[0]?.el as HTMLElement) || secs[0];
    isGreenTheme.value = target?.dataset.headerTheme === "green";
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
/**
 * Observe sections carrying data-header-theme and set header theme accordingly.
 */
onMounted(() => {
  const bootstrap = () => {
    const secs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]"),
    );
    if (!secs.length) return false;

    // Set up IO
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        visible.sort(
          (a, b) =>
            Math.abs(a.target.getBoundingClientRect().top) -
            Math.abs(b.target.getBoundingClientRect().top),
        );
        const chosen = visible[0];
        if (!chosen) return;
        const theme = (chosen.target as HTMLElement).dataset.headerTheme;
        isGreenTheme.value = theme === "green";
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    secs.forEach((s) => observer?.observe(s));

    // Initial evaluation
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    const visible = secs
      .map((el) => ({ el, rect: el.getBoundingClientRect() }))
      .filter(({ rect }) => rect.top < viewportH && rect.bottom > 0)
      .sort((a, b) => Math.abs(a.rect.top) - Math.abs(b.rect.top));
    const target = (visible[0]?.el as HTMLElement) || secs[0];
    if (target) isGreenTheme.value = target.dataset.headerTheme === "green";
    return true;
  };

  if (!bootstrap()) {
    const mo = new MutationObserver(() => {
      if (bootstrap()) mo.disconnect();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    // Also try after render cycles
    // @ts-ignore nextTick is auto-imported in Nuxt
    nextTick(() => bootstrap());
    requestAnimationFrame(() => bootstrap());
    setTimeout(() => bootstrap(), 0);
    window.addEventListener("load", () => setTimeout(() => bootstrap(), 0), {
      once: true,
      passive: true,
    } as any);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>
