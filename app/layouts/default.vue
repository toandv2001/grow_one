<script setup lang="ts">
import AppHeader from "~/components/modules/layout/AppHeader.vue";
import AppFooter from "~/components/modules/layout/AppFooter.vue";
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
