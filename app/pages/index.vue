<script setup lang="ts">
import HomeSection5 from "~/components/home/HomeSection5.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

definePageMeta({
  layout: "default",
});
// No refs needed; use CSS selectors for navigation to avoid init timing issues
</script>

<template>
  <div class="">
    <!-- banner -->
    <div class="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <!-- Thêm h-screen để full height test -->
      <img
        src="../assets/banner.jpg"
        alt="Banner Image"
        class="w-full h-full absolute inset-0 object-cover z-10"
        onerror="this.src='https://via.placeholder.com/1920x1080?text=Image+Not+Found'; console.error('Ảnh không load: Đường dẫn sai hoặc file missing!');"
      />
      <div
        class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center w-[80%]"
      >
        <h1
          class="text-[40px] md:text-6xl xl:text-8xl font-bold text-white mb-4 capitalize"
        >
          We grow forest
        </h1>
        <p
          class="text-base md:text-xl text-white mb-6 max-w-4xl mx-auto px-4 md:px-0"
        >
          Facing a climate crisis, we’re planting a forest of solutions. Grow
          One Future restores ecosystems, empowers communities, and builds a
          better tomorrow, one tree at a time
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
    <!-- section-1 -->
    <div
      class="min-h-[608px] relative overflow-hidden border-b border-[#94C93D]"
    >
      <!-- desktop background block for left column -->
      <div
        class="hidden md:block absolute inset-y-0 left-0 md:w-[650px] bg-[#94C93D]"
      ></div>
      <div
        class="md:hidden absolute inset-x-0 top-0 h-[250px] bg-[#94C93D]"
      ></div>
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-10 relative z-10"
      >
        <div class="w-full h-full md:w-1/3 flex my-auto">
          <div
            class="flex justify-center items-start flex-col gap-1 w-full max-w-full md:max-w-[411px] mt-5 md:mt-0"
          >
            <p class="text-xs md:text-sm font-normal uppercase text-[#143B35]">
              our by 2050
            </p>
            <h2
              class="text-2xl md:text-[60px] md:leading-[1.21] font-bold text-[#153B35] break-words whitespace-normal"
            >
              By 2050, We Grow One<br class="md:hidden" />
              Future
            </h2>
            <p class="text-sm font-normal text-[#475467] max-w-[384px] mt-4">
              By 2050, together with communities, Grow One Future will restore
              ecosystems, empower millions of families, and drive global climate
              action—not just planting trees, but growing futures.
            </p>
          </div>
        </div>
        <div
          class="w-full md:w-2/3 bg-white flex justify-center items-center flex-col gap-4 h-full px-0 md:px-0 py-0 md:py-12 rounded-2xl md:rounded-none md:shadow-none mt-12 md:mt-0"
        >
          <div
            class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto"
          >
            <div class="flex flex-col gap-4 md:gap-8">
              <div
                class="w-full max-w-full md:max-w-[420px] h-auto flex gap-3 md:gap-6 p-4 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 flex items-start justify-center gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    1B
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Trees
                  </p>
                  <p class="text-sm text-[#475467]">
                    Restored with native and economic species to revive
                    biodiversity.
                  </p>
                </div>
              </div>
              <div
                class="w-full max-w-full md:max-w-[420px] h-auto flex gap-3 md:gap-6 p-4 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card2.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 flex items-start justify-center gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    10M
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Families
                  </p>
                  <p class="text-sm text-[#475467]">
                    Lifted through sustainable forest-based livelihoods.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4 md:gap-8">
              <div
                class="w-full max-w-full md:max-w-[420px] h-auto flex gap-3 md:gap-6 p-4 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card3.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 flex items-start justify-center gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    50
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Countries
                  </p>
                  <p class="text-sm text-[#475467]">
                    Building the world’s largest community-led reforestation
                    network.
                  </p>
                </div>
              </div>
              <div
                class="w-full max-w-full md:max-w-[420px] h-auto flex gap-3 md:gap-6 p-4 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card4.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 flex items-start justify-center gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    1B
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Tons of CO₂
                  </p>
                  <p class="text-sm text-[#475467]">
                    Captured to advance the global Net Zero pathway.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p
            class="text-base font-semibold text-[#153B35] text-center md:text-left italic"
          >
            Plant together. Prosper together. Shape the future we all deserve.
          </p>
        </div>
      </div>
    </div>
    <!-- section-2 -->
    <div class="relative">
      <img
        src="../assets/Section 9.png"
        alt=""
        class="absolute md:top-0 top-[300px] left-0 w-full h-full md:object-cover object-contain"
      />
      <div
        class="container mx-auto px-4 pt-16 md:pt-[160px] pb-20 md:pb-[295px] flex flex-col-reverse md:flex-row gap-8 md:gap-4 items-center"
      >
        <div class="w-full md:w-1/2 flex justify-center items-center relative">
          <img
            src="../assets/vetinh1.png"
            alt="vetinh1"
            class="hidden md:block absolute w-[43px] h-[43px] top-[70px] left-[120px]"
          />
          <img
            src="../assets/vetinh2.png"
            alt="vetinh2"
            class="hidden md:block absolute w-[43px] h-[43px] top-[450px] right-[120px]"
          />
          <div
            class="w-full max-w-sm md:max-w-none flex justify-center items-center"
          >
            <img
              src="../assets/Earth.png"
              alt="earth"
              class="md:w-full w-[90%] h-[90%] md:h-auto"
            />
          </div>
          <div
            class="absolute w-[90%] h-full flex md:justify-between md:items-center items-end justify-center top-6 gap-16 md:top-0 md:gap-0"
          >
            <button
              class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E]"
            >
              <img src="../assets/left_icon.png" alt="left" />
            </button>
            <button
              class="w-11 h-11 rounded-full bg-[#ffffff] border-none grid place-items-center hover:bg-[#92C73E]"
            >
              <img src="../assets/right_icon.png" alt="right" />
            </button>
          </div>
        </div>
        <div
          class="h-auto md:h-[500px] w-full md:w-1/2 flex items-start gap-6 md:gap-8 flex-col relative z-20"
        >
          <div class="w-full flex items-start gap-2 flex-col">
            <p class="md:text-sm text-xs text-[#94C93D] uppercase">
              Who we are
            </p>
            <h3 class="font-bold md:text-6xl uppercase leading-[100%] text-2xl">
              Global Nonprofit Growing Forests, Livelihoods, and Climate
              Solutions
            </h3>
          </div>
          <p class="text-[#475467] md:text-base text-[14px] font-normal">
            We are a global nonprofit with a threefold mission: restore forests,
            empower communities with sustainable livelihoods, and drive lasting
            climate solutions. Every tree we plant is part of a future we grow
            together.
          </p>
          <div class="w-full flex items-start gap-4">
            <div class="flex gap-2 items-center">
              <button
                class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]"
              >
                <img src="../assets/right_icon.png" alt="" />
              </button>
              <span class="md:text-base text-[14px] font-semibold"
                >Out Impact</span
              >
            </div>
            <div class="flex gap-2 items-center">
              <button
                class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]"
              >
                <img src="../assets/right_icon.png" alt="" />
              </button>
              <span class="md:text-base text-[14px] font-semibold"
                >About Us</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-3 -->
    <div class="relative">
      <img
        src="../assets/Section 3.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        class="container mx-auto px-4 py-12 flex flex-col gap-16 items-center h-auto relative z-20"
      >
        <div class="w-full flex flex-col items-center justify-center gap-2">
          <p class="md:text-sm text-xs text-[#94C93D] uppercase">our pillars</p>
          <h3 class="font-bold md:text-6xl text-2xl text-white capitalize">
            Forest - people - future
          </h3>
        </div>
        <!-- card -->

        <ClientOnly>
          <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1"
            :space-between="16"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
            }"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            }"
            class="stories-swiper px-2 w-full"
          >
            <SwiperSlide>
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
              >
                <div class="w-full flex items-start">
                  <img
                    src="../assets/Recyrcle.png"
                    alt="Recyrcle"
                    class="w-[52px] h-[52px]"
                  />
                </div>
                <div class="w-full flex flex-col items-start gap-2">
                  <h4 class="text-2xl font-bold text-[#153B35]">Forests</h4>
                  <p class="text-base font-normal text-[#475467]">
                    Restore native ecosysstems with climate-resilient and
                    science-based planting. Bring back biodiversity, protect
                    water & soil, and create climate buffers for communities
                  </p>
                  <p class="text-base font-normal text-[#475467]">
                    Your $1 helps a seed become a forest for future generations.
                  </p>
                </div>
                <div class="w-full flex items-start p-1">
                  <p class="text-base font-semibold text-[#94C93D]">Donation</p>
                  <div class="flex justify-center items-center p-[2px]">
                    <img
                      src="../assets/Chevron_right.png"
                      alt="Chevron_right"
                      class="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
                <div
                  class="absolute bottom-[-20px] md:h-[319px] h-[263px] w-full z-30"
                >
                  <img
                    src="../assets/forests_img.png"
                    alt="Forests image"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_90%,rgba(255,255,255,0)_100%)]"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
              >
                <div class="w-full flex items-start">
                  <img
                    src="../assets/Recyrcle.png"
                    alt="Recyrcle"
                    class="w-[52px] h-[52px]"
                  />
                </div>
                <div class="w-full flex flex-col items-start gap-2">
                  <h4 class="text-2xl font-bold text-[#153B35]">People</h4>
                  <p class="text-base font-normal text-[#475467]">
                    Provite sustainable livelihoods through agroforestry: native
                    forests + income crops. Families become forest
                    guardians-protecting what also sustians thems.
                  </p>
                  <p class="text-base font-normal text-[#475467]">
                    Every tree you fund creates work, dignity, and hope.
                  </p>
                </div>
                <div class="w-full flex items-start p-1">
                  <p class="text-base font-semibold text-[#94C93D]">Donation</p>
                  <div class="flex justify-center items-center p-[2px]">
                    <img
                      src="../assets/Chevron_right.png"
                      alt="Chevron_right"
                      class="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
                <div
                  class="absolute bottom-[-20px] md:h-[319px] h-[263px] w-full z-30"
                >
                  <img
                    src="../assets/people_img.png"
                    alt="Forests image"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_70%,rgba(255,255,255,0)_100%)]"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
              >
                <div class="w-full flex items-start">
                  <img
                    src="../assets/Recyrcle.png"
                    alt="Recyrcle"
                    class="w-[52px] h-[52px]"
                  />
                </div>
                <div class="w-full flex flex-col items-start gap-2">
                  <h4 class="text-2xl font-bold text-[#153B35]">Future</h4>
                  <p class="text-base font-normal text-[#475467]">
                    See your impact with transparant technology-GPS, photo, and
                    growth update. Join a global community of donors &
                    changemakers building a livable future.
                  </p>
                  <p class="text-base font-normal text-[#475467]">
                    Together we ensure people and planet thrive
                  </p>
                </div>
                <div class="w-full flex items-start p-1">
                  <p class="text-base font-semibold text-[#94C93D]">Donation</p>
                  <div class="flex justify-center items-center p-[2px]">
                    <img
                      src="../assets/Chevron_right.png"
                      alt="Chevron_right"
                      class="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
                <div
                  class="absolute bottom-[-20px] md:h-[319px] h-[263px] w-full z-30"
                >
                  <img
                    src="../assets/future_img.png"
                    alt="Forests image"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_70%,rgba(255,255,255,0)_100%)]"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
    <!-- section-4 -->
    <div class="relative">
      <img
        src="../assets/Section 4.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        class="container mx-auto px-4 pt-[100px] pb-[164px] flex gap-4 items-center flex-col relative z-20"
      >
        <div class="flex items-start flex-col gap-4">
          <div class="flex items-start flex-col gap-4">
            <p class="text-sm text-[#94C93D] uppercase">why this work</p>
            <h3 class="text-6xl font-bold">
              Restore Nature. grow prosperity. fight climate change.
            </h3>
          </div>
          <p class="text-base text-[#475467] max-w-[844px]">
            Forests are where nature, people, and climate meet. With local
            communities, we restore ecosystem, create fair livelihoods, and
            build resilience to heat and floods
          </p>
        </div>

        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
            <img
              src="../assets/people.png"
              alt="people"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
            >
              <h3 class="text-xl font-bold mb-2">People (Prosperity)</h3>
              <p class="text-base">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
            </div>
          </div>
          <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
            <img
              src="../assets/nature.png"
              alt="nature"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
            >
              <h3 class="text-xl font-bold mb-2">Nature (Biodiversity)</h3>
              <p class="text-base">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
            </div>
          </div>
          <div class="relative w-full h-80 md:h-[437px] overflow-hidden">
            <img
              src="../assets/climate.png"
              alt="people"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
            >
              <h3 class="text-xl font-bold mb-2">Climate (Resilience)</h3>
              <p class="text-base">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section-5 -->
    <div class="bg-[#F4F1DC]">
      <div
        class="container mx-auto px-4 py-12 flex gap-4 items-center flex-col"
      >
        <div class="flex items-center justify-center flex-col gap-4 w-full">
          <p class="text-sm text-[#94C93D] font-normal">Forest</p>
          <h3 class="text-3xl md:text-5xl font-bold text-center">
            From one tree to a thriving community forest
          </h3>
          <p class="text-[15px] text-[#475467] max-w-[917px] text-center px-2">
            We restore native forests with local communities—reviving
            biodiversity, strengthening livelihoods, and stabilizing climate.<br />Inspired
            by the next generation, Grow One Future calls you to act now—with
            transparent updates for our children’s future.
          </p>
        </div>
        <div
          class="w-full min-h-[240px] md:min-h-[503px] rounded-3xl overflow-hidden"
        >
          <!-- <img
            src="../assets/forest.png"
            alt="forest"
            class="w-full h-full object-cover"
          />
          <img
            src="../assets/forest2.png"
            alt="forest"
            class="w-full h-full object-cover"
          /> -->
          <home-section5 />
        </div>
        <div class="w-full flex justify-center items-center gap-4 flex-col">
          <div class="flex justify-center items-center gap-2">
            <p class="text-2xl font-semibold">12</p>
            <img src="../assets/tree.png" alt="tree" />
          </div>
          <a
            id="donateBtnNav"
            href="#FUNGSLFMREB"
            class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
    <!-- section-6 -->
    <div class="relative w-full">
      <img
        src="../assets/banner2.jpg"
        alt=""
        class="w-full h-full absolute inset-0 object-cover z-20"
      />
      <div class="absolute inset-0 z-40 bg-black bg-opacity-90"></div>
      <div class="relative z-50 w-full py-16 md:py-20">
        <div
          class="container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-16 items-stretch md:items-center justify-between"
        >
          <div class="flex flex-col items-start gap-4 w-full md:w-1/2">
            <div class="w-full">
              <p
                class="text-xs md:text-sm font-normal text-[#94C93D] uppercase mb-1"
              >
                Take action
              </p>
              <h3
                class="text-2xl md:text-5xl text-white font-bold uppercase leading-tight mb-4 md:mb-2"
              >
                A better future <br />
                is calling
              </h3>
            </div>
            <p
              class="text-sm md:text-base font-normal text-white leading-relaxed"
            >
              From one gift, we restore native forests with local
              communities-bringing wildlife bac, creating fair livehoods, and
              building resilence to heat and floods. You'll recieve photo
              updates and project report as your impact takes root.
            </p>
          </div>
          <!-- form -->
          <div class="w-full md:w-1/2 h-auto flex items-center md:justify-end">
            <div class="w-full max-w-md">
              <div class="bg-white p-6 rounded-lg shadow-lg w-full">
                <div
                  class="flex justify-between mb-4 w-full border border-[#D0D5DD] rounded-lg overflow-hidden"
                >
                  <button
                    class="text-[#94C93D] px-6 py-3 text-base w-1/2 bg-[#EDF3E5] border border-[#94C93D] font-semibold rounded-lg"
                  >
                    One-time
                  </button>
                  <button
                    class="text-[#153B35] px-6 py-3 text-base font-semibold flex items-center gap-1 w-1/2 justify-center"
                  >
                    <span class="text-xl">❤️</span> Monthly
                  </button>
                </div>
                <div class="grid grid-cols-3 gap-4 mb-4">
                  <button
                    class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    $25
                  </button>
                  <button
                    class="bg-[#94C93D] text-[#153B35] px-4 py-3 rounded-lg border border-[#94C93D] shadow-sm font-semibold uppercase"
                  >
                    $50
                  </button>
                  <button
                    class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    $75
                  </button>
                  <button
                    class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    $100
                  </button>
                  <button
                    class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    $500
                  </button>
                  <button
                    class="text-[#153B35] px-4 py-3 rounded-lg border border-[#D0D5DD] shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    $1000
                  </button>
                </div>
                <div class="mb-4 space-y-1.5">
                  <div class="relative">
                    <span
                      class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085] text-base"
                      >$</span
                    >
                    <input
                      type="number"
                      placeholder="50"
                      class="w-full pl-9 pr-3.5 py-3 border border-[#D0D5DD] rounded-lg text-center text-[#667085] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#94C93D] focus:border-transparent"
                    />
                  </div>
                  <p class="text-center text-[#667085] text-sm">
                    Enter your donation amount.
                  </p>
                </div>
                <button
                  class="w-full bg-[#94C93D] text-[#153B35] px-6 py-3 rounded-full font-semibold uppercase text-base border border-[#153B35] shadow-sm hover:bg-[#8BB835] transition-colors"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-7 -->
    <div class="bg-[#94C93D] w-full">
      <div class="px-0 py-10 flex gap-[18px] items-center flex-col">
        <h3
          class="font-bold text-2xl md:text-6xl text-center text-[#153B35] capitalize px-4"
        >
          Out of partner
        </h3>
        <div class="w-full px-4">
          <ClientOnly>
            <Swiper
              :modules="[Autoplay]"
              :slides-per-view="3"
              :space-between="36"
              :loop="true"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
              :breakpoints="{
                640: { slidesPerView: 3, spaceBetween: 28 },
                768: { slidesPerView: 4, spaceBetween: 32 },
                1024: { slidesPerView: 5, spaceBetween: 40 },
                1280: { slidesPerView: 6, spaceBetween: 44 },
              }"
              :centered-slides="false"
              class="partners-swiper w-full"
            >
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/samsung.png"
                  alt="Samsung"
                  class="w-[72px] md:w-[120px] h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/microsoft.png"
                  alt="Microsoft"
                  class="w-[72px] md:w-[120px] h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/google.png"
                  alt="Google"
                  class="w-[72px] md:w-[120px] h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/slack.png"
                  alt="Slack"
                  class="w-[72px] md:w-[90px] h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/lg.png"
                  alt="LG"
                  class="w-[72px] md:w-[110px] h-auto object-contain"
                />
              </SwiperSlide>
              <SwiperSlide class="!flex !items-center !justify-center">
                <img
                  src="../assets/sony.png"
                  alt="Sony"
                  class="w-[72px] md:w-[90px] h-auto object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
    <!-- section-8 -->
    <div class="relative">
      <img
        src="../assets/Section 6.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        class="container mx-auto px-4 pt-16 md:pt-[100px] pb-16 md:pb-[164px] flex gap-8 items-start flex-col relative z-20"
      >
        <div class="w-full flex flex-col items-start gap-4">
          <div class="w-full flex items-start flex-col gap-4">
            <p class="text-[#94C93D] text-sm uppercase font-semibold">
              Make our mision grow
            </p>
            <h3 class="text-3xl md:text-6xl font-bold capitalize">
              many ways to get involved
            </h3>
          </div>
          <div
            class="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <p
              class="text-base font-normal text-[#475467] w-full md:w-auto max-w-prose"
            >
              Forests are where nature, people, and climate meet. With local
              communities, we restore ecosystem, create fair livelihoods, and
              build resilience to heat and floods
            </p>
            <div class="flex gap-2">
              <button
                class="bg-[#92C73E] rounded-full outline-none w-6 h-6 grid place-items-center"
              >
                <img src="../assets/right_icon.png" alt="" />
              </button>
              <span class="text-base font-semibold uppercase">
                All ways to get involved
              </span>
            </div>
          </div>
        </div>
        <!-- card -->
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div class="min-h-[420px] md:min-h-[610px] w-full shadow-xl">
            <img src="../assets/Image.png" alt="" class="w-full h-auto" />
            <div class="p-4 flex flex-col items-start gap-2">
              <h5 class="text-2xl font-bold">Become a member</h5>
              <p
                class="text-base text-[#475467] w-full truncate overflow-hidden whitespace-nowrap"
              >
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
                This is a very long text to test overflow and ellipsis should
                appear here if it exceeds the width.
              </p>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-[#94C93D]">Know more</span>
                <img src="../assets/arrow_right.png" alt="" />
              </div>
            </div>
          </div>
          <div class="min-h-[420px] md:min-h-[610px] w-full shadow-xl">
            <img src="../assets/Image.png" alt="" class="w-full h-auto" />
            <div class="p-4 flex flex-col items-start gap-2">
              <h5 class="text-2xl font-bold">Become a member</h5>
              <p
                class="text-base text-[#475467] w-full truncate overflow-hidden whitespace-nowrap"
              >
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
                This is a very long text to test overflow and ellipsis should
                appear here if it exceeds the width.
              </p>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-[#94C93D]">Know more</span>
                <img src="../assets/arrow_right.png" alt="" />
              </div>
            </div>
          </div>
          <div class="min-h-[420px] md:min-h-[610px] w-full shadow-xl">
            <img src="../assets/Image.png" alt="" class="w-full h-auto" />
            <div class="p-4 flex flex-col items-start gap-2">
              <h5 class="text-2xl font-bold">Become a member</h5>
              <p
                class="text-base text-[#475467] w-full truncate overflow-hidden whitespace-nowrap"
              >
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
                This is a very long text to test overflow and ellipsis should
                appear here if it exceeds the width.
              </p>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-[#94C93D]">Know more</span>
                <img src="../assets/arrow_right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-9 -->
    <div class="relative">
      <img
        src="../assets/Section 6.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        class="container mx-auto px-4 pt-[100px] pb-[164px] flex gap-8 items-start flex-col relative z-20"
      >
        <div class="w-full flex flex-col items-start gap-4">
          <p class="text-[#94C93D] text-sm uppercase font-semibold">
            Make our mision grow
          </p>
          <div class="flex justify-between items-center gap-8 w-full">
            <h3 class="text-6xl font-bold capitalize">
              Story of recovery & hope
            </h3>
            <div class="flex gap-2">
              <button
                class="bg-[#92C73E] rounded-full outline-none w-6 h-6 grid place-items-center"
              >
                <img src="../assets/right_icon.png" alt="" />
              </button>
              <span class="text-base font-semibold uppercase"> View all </span>
            </div>
          </div>
        </div>
        <!-- card slider -->
        <div class="w-full relative">
          <button
            class="stories-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-10 rounded-md items-center justify-center shadow-lg bg-white/90 hover:bg-white"
            aria-label="Previous"
          >
            <img src="../assets/left_icon.png" alt="previous" />
          </button>

          <ClientOnly>
            <Swiper
              :modules="[Autoplay, Navigation]"
              :slides-per-view="1.1"
              :space-between="16"
              :loop="true"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :breakpoints="{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 28 },
              }"
              :navigation="{ prevEl: '.stories-prev', nextEl: '.stories-next' }"
              class="stories-swiper px-2 w-full"
            >
              <SwiperSlide>
                <div
                  class="shadow-lg w-full bg-white rounded-xl overflow-hidden"
                >
                  <img src="../assets/hope.png" alt="" class="w-full h-auto" />
                  <div class="p-4 w-full flex flex-col gap-2 items-start">
                    <h3 class="font-bold text-2xl">Become a member</h3>
                    <p class="text-base text-[#475467] w-full">
                      We partner with farmers and cooperatives to fund
                      nurseries, training, and agroforestry-keeping benefits in
                      the community.
                    </p>
                    <div class="w-full h-[2px] bg-gray-400"></div>
                    <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="shadow-lg w-full bg-white rounded-xl overflow-hidden"
                >
                  <img src="../assets/hope2.png" alt="" class="w-full h-auto" />
                  <div class="p-4 w-full flex flex-col gap-2 items-start">
                    <h3 class="font-bold text-2xl">Corporate partnerships</h3>
                    <p class="text-base text-[#475467] w-full">
                      We partner with farmers and cooperatives to fund
                      nurseries, training, and agroforestry-keeping benefits in
                      the community.
                    </p>
                    <div class="w-full h-[2px] bg-gray-400"></div>
                    <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="shadow-lg w-full bg-white rounded-xl overflow-hidden"
                >
                  <img src="../assets/hope3.png" alt="" class="w-full h-auto" />
                  <div class="p-4 w-full flex flex-col gap-2 items-start">
                    <h3 class="font-bold text-2xl">Corporate partnerships</h3>
                    <p class="text-base text-[#475467] w-full">
                      We partner with farmers and cooperatives to fund
                      nurseries, training, and agroforestry-keeping benefits in
                      the community.
                    </p>
                    <div class="w-full h-[2px] bg-gray-400"></div>
                    <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>

          <button
            class="stories-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-10 rounded-md items-center justify-center shadow-lg bg-white/90 hover:bg-white"
            aria-label="Next"
          >
            <img src="../assets/right_icon.png" alt="next" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partners-swiper {
  width: 100%;
}

.partners-swiper :deep(.swiper-wrapper) {
  align-items: center;
}

.partners-swiper :deep(.swiper-slide) {
  height: auto;
}
</style>
