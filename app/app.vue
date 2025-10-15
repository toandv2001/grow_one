<script setup lang="ts">
const { locale, t } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
    dir: "ltr",
  },
  titleTemplate(title) {
    return title ? `${title} - ${t("Grow One")}` : `${t("Grow One")}`;
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
