<template>
  <footer class="bg-[#1A3635] text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <div class="relative mr-3">
              <div
                class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <div class="w-6 h-6 bg-teal-600 rounded-full relative">
                  <div
                    class="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"
                  ></div>
                  <div
                    class="absolute top-2 left-2 w-2 h-2 bg-teal-400 rounded-full"
                  ></div>
                  <div
                    class="absolute top-3 left-1 w-1 h-1 bg-teal-300 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div class="text-white">
              <div class="text-lg font-bold">GROW</div>
              <div class="text-teal-300 text-sm font-semibold">ONE</div>
              <div class="text-lg font-bold">FUTURE</div>
            </div>
          </div>
          <p class="text-gray-200 mb-4 text-sm leading-relaxed">
            Grow One Future is a U.S. 501(c)(3) nonprofit organization
            pioneering a transparent and sustainable reforestation model that
            combines ecosystem restoration with community livelihood
            development.
          </p>
          <div class="space-y-1 text-sm text-gray-200">
            <p>Tax ID: 37-2192387</p>
            <p>Call: +1(302) 230-6560</p>
            <p>
              Location: 1604 Philadelphia Pike, Suite 78, Wilmington, DE 19809,
              US
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-medium mb-4 text-white">Follow Us</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs font-bold"
                  >f</span
                >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs"
                  >📷</span
                >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs"
                  >▶</span
                >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs font-bold"
                  >X</span
                >
                X
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs"
                  >♪</span
                >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-gray-200 hover:text-white transition-colors"
              >
                <span
                  class="w-5 h-5 mr-2 flex items-center justify-center bg-white rounded text-teal-800 text-xs font-bold"
                  >in</span
                >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-medium mb-4 text-white">Members</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Create an account
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Partnerships
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-medium mb-4 text-white">Service</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Outwork
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Transparency
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-200 hover:text-white transition-colors"
              >
                Gift Tree
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-[#2A4645] mt-8 pt-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-gray-200 text-sm">
            © Grow One Future {{ currentYear }}. All rights reserved
          </p>
          <div
            class="flex flex-wrap justify-center md:justify-end items-center space-x-4 text-sm"
          >
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Privacy Policy</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Terms of Use</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Cookies</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Accessibility Policy</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >State Disclosures</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Opt Out</a
            >
            <span class="text-[#9CCC3B]">•</span>
            <a href="#" class="text-gray-200 hover:text-white transition-colors"
              >Sitemap</a
            >
          </div>
        </div>
        <p class="text-gray-300 text-xs mt-4 text-center">
          Grow One Future is a 501(c)3 tax-exempt organization and your donation
          is tax-deductible within the guidelines of U.S. law.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
