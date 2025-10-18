<script setup lang="ts">
import { useHead } from "#imports";

import AppHeader from "~/components/modules/layout/AppHeader.vue";
import AppFooter from "~/components/modules/layout/AppFooter.vue";

useHead({
  title: "Grow One Future | Tree Planting Nonprofit",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
