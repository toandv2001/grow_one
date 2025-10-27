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
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
  ],
  script: [
    // ✅ FundraiseUp Script
    {
      innerHTML: `
        (function(w,d,s,n,a){
          if(!w[n]){
            var l='call,catch,on,once,set,then,track,openCheckout'.split(','),i,
            o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
            :function(){return o.l.push([n,arguments])&&o}},
            t=d.getElementsByTagName(s)[0], j=d.createElement(s);
            j.async=!0; j.src='https://cdn.fundraiseup.com/widget/'+a+'';
            t.parentNode.insertBefore(j,t); o.s=Date.now(); o.v=5; o.h=w.location.href; o.l=[];
            for(i=0;i<8;i++)o[l[i]]=o(l[i]); w[n]=o
          }
        })(window,document,'script','FundraiseUp','AERDTYPP');
      `,
      type: "text/javascript",
      tagPosition: "head",
    },

    // ✅ Google Tag Manager Script
    {
      innerHTML: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5SZGFJP2');
      `,
      type: "text/javascript",
      tagPosition: "head",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- ✅ GTM noscript fallback -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5SZGFJP2"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
  </NuxtLayout>
</template>
