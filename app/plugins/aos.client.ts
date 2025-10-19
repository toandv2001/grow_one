// plugins/aos.client.ts
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // Import the AOS CSS

    export default defineNuxtPlugin((nuxtApp) => {
      // Ensure AOS is initialized only in the browser environment
      if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
          disable: window.innerWidth < 768
          // You can add your global AOS configuration here, e.g.:
          // once: true, // whether animation should happen only once - while scrolling down
          // duration: 800, // values from 0 to 3000, with step 50ms
          // easing: 'ease-out-cubic', // default easing for AOS animations
        });
      }
    });
