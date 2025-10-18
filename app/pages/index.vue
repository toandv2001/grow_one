<script setup lang="ts">
import HomeSection5 from "~/components/home/HomeSection5.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as HomeMock from "~/data/home.json";
import { ref, onMounted, onUnmounted } from "vue";

definePageMeta({
  layout: "default",
});

const involvedMock = ref(HomeMock.involved);
const storiesMock = ref(HomeMock.stories);
const partnersMock = ref(HomeMock.partners);
const treeCount = ref(12);
const money = ref(25);
const handleChangeMoney = (val: number) => {
  money.value = val;
};
const handleChangeTreeCount = (value: number) => {
  treeCount.value = value;
};

const words = ["Forest", "People", "One Future"];
const currentIndex = ref(0);
const isAnimating = ref(false);
let interval: NodeJS.Timeout | null = null;
const donationType = ref<"one-time" | "monthly">("one-time");
const selectedAmount = ref<number>(50);
const customAmount = ref<string>("");

const amounts = [25, 50, 75, 100, 500, 1000];

const handleAmountClick = (amount: number) => {
  selectedAmount.value = amount;
  customAmount.value = amount.toString();
};

const handleCustomAmountChange = () => {
  if (customAmount.value) {
    selectedAmount.value = Number(customAmount.value);
  } else {
    selectedAmount.value = 50; // default value
  }
};

const currentAmount = computed(() => {
  return customAmount.value ? Number(customAmount.value) : selectedAmount.value;
});
onMounted(() => {
  interval = setInterval(() => {
    isAnimating.value = true;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % words.length;
      isAnimating.value = false;
    }, 500);
  }, 3000);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
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
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 capitalize leading-tight"
        >
          We grow
          <span class="relative inline-block w-auto">
            <span
              :class="[
                'inline-block transition-all duration-500 bg-gradient-to-r from-[#9CCC3B] to-[#6FB82E] bg-clip-text text-transparent',
                isAnimating
                  ? 'opacity-0 -translate-y-8 scale-95'
                  : 'opacity-100 translate-y-0 scale-100',
              ]"
            >
              {{ words[currentIndex] }}
            </span>
          </span>
        </h1>
        <p
          class="text-base md:text-2xl text-white mb-6 max-w-4xl mx-auto px-4 md:px-0"
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
        class="hidden md:block absolute inset-y-0 left-0 w-full 2xl:w-[730px] md:w-[500px] bg-[#94C93D]"
      ></div>
      <div
        class="md:hidden absolute inset-x-0 top-0 h-[250px] bg-[#94C93D]"
      ></div>
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-10 relative z-10"
        data-aos="fade-up"
      >
        <div class="w-full h-full md:w-1/3 flex my-auto">
          <div
            class="flex justify-center items-start flex-col gap-1 w-full max-w-full md:max-w-[455px] mt-5 md:mt-0"
          >
            <p class="text-xs md:text-sm font-normal uppercase text-[#143B35]">
              our by 2050
            </p>
            <h2
              class="text-2xl md:text-[60px] md:leading-[1.21] font-bold text-[#153B35] w-full"
            >
              By 2050,We Grow One<br class="md:hidden" />
              Future
            </h2>
            <p
              class="text-sm md:text-[16px] font-normal text-[#475467] mt-4 md:text-left"
            >
              By 2050, together with communities, Grow One Future will restore
              ecosystems, empower millions of families, and drive global climate
              action—not just planting trees, but growing futures.
            </p>
          </div>
        </div>
        <div
          class="w-full md:w-[calc((2/3)*100%+200px)] bg-white flex justify-center items-center flex-col gap-6 h-full px-0 md:px-0 py-4 md:py-12 rounded-2xl md:rounded-none md:shadow-none mt-10 md:mt-0 translate-x-0 md:translate-x-[100px]"
        >
          <div
            class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto"
          >
            <div class="flex flex-col gap-4 md:gap-8">
              <div
                class="w-full max-w-full md:w-[420px] h-auto flex gap-3 md:gap-6 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card.png"
                  alt="card"
                  class="w-[125px] h-full md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 md:pt-4 flex items-start gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    1B
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Trees
                  </p>
                  <p class="text-base text-[#475467]">
                    Restored with native and economic species to revive
                    biodiversity.
                  </p>
                </div>
              </div>
              <div
                class="w-full max-w-full md:max-w-[420px] h-auto flex gap-3 md:gap-6 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card3.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 md:pt-4 flex items-start gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    50
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Countries
                  </p>
                  <p class="text-base text-[#475467]">
                    Building the world’s largest community-led reforestation
                    network.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4 md:gap-8">
              <div
                class="w-full max-w-full md:w-[420px] h-auto flex gap-3 md:gap-6 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card2.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 md:pt-4 flex items-start gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    10M
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Families
                  </p>
                  <p class="text-base text-[#475467]">
                    Lifted through sustainable forest-based livelihoods.
                  </p>
                </div>
              </div>
              <div
                class="w-full max-w-full md:w-[420px] h-auto flex gap-3 md:gap-6 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.16)] mx-auto"
              >
                <img
                  src="../assets/card4.png"
                  alt="card"
                  class="w-[125px] h-[103px] md:w-[200px] md:h-[200px] object-cover flex-shrink-0"
                />
                <div
                  class="pl-0 pr-4 md:pl-0 md:pr-4 md:pt-4 flex items-start gap-1 md:gap-2 flex-col"
                >
                  <h3
                    class="text-base md:text-[40px] md:leading-[1.2] font-black text-[#153B35]"
                  >
                    1B
                  </h3>
                  <p class="text-sm md:text-[16px] font-bold text-[#153B35]">
                    Tons of CO₂
                  </p>
                  <p class="text-base text-[#475467]">
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
    <div class="relative" data-aos="fade-up">
      <img
        src="../assets/Section 9.png"
        alt=""
        class="absolute md:top-0 top-[300px] left-0 w-full h-full md:object-cover object-contain"
      />
      <div
        class="container mx-auto px-4 pt-16 md:pt-[160px] pb-20 md:pb-[295px] flex flex-col-reverse md:flex-row gap-8 md:gap-[140px] items-center"
      >
        <div class="w-full md:w-1/2 flex justify-center items-center relative">
          <img
            src="../assets/vetinh1.png"
            alt="vetinh1"
            class="hidden md:block absolute w-[43px] h-[43px] top-[50px] left-[50px]"
          />
          <img
            src="../assets/vetinh2.png"
            alt="vetinh2"
            class="hidden md:block absolute w-[43px] h-[43px] top-[450px] right-[50px]"
          />
          <div
            class="w-full max-w-sm md:max-w-none flex justify-center items-center"
          >
            <img src="../assets/Earth.png" alt="earth" />
          </div>
          <div
            class="absolute w-[90%] md:w-full h-full flex md:justify-between md:items-center items-end justify-center top-6 gap-16 md:top-0 md:gap-0"
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
          class="h-auto w-full md:w-[596px] flex items-start gap-6 md:gap-8 flex-col relative z-20"
        >
          <div class="w-full flex items-start gap-4 flex-col">
            <p class="md:text-sm text-xs text-[#94C93D] uppercase">
              Who we are
            </p>
            <h3
              class="font-bold md:text-[60px] capitalize text-2xl leading-normal"
            >
              Global Nonprofit Growing Forests, Livelihoods, and Climate
              Solutions
            </h3>
          </div>
          <p
            class="text-[#475467] md:text-base text-[14px] font-normal md:pt-[5px]"
          >
            We are a global nonprofit with a threefold mission: restore forests,
            empower communities with sustainable livelihoods, and drive lasting
            climate solutions. Every tree we plant is part of a future we grow
            together.
          </p>
          <div class="w-full flex items-start gap-4 md:pt-[5px]">
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
        class="container mx-auto px-4 py-10 md:py-20 flex flex-col gap-0 md:gap-16 items-center h-auto relative z-20"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div class="w-full flex flex-col items-center justify-center gap-4">
          <p class="md:text-sm text-xs text-[#94C93D] uppercase">our pillars</p>
          <h3 class="font-bold md:text-6xl text-2xl text-white capitalize">
            Forest - people - future
          </h3>
        </div>
        <ClientOnly>
          <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1"
            :space-between="16"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20, pagination: false },
              1024: { slidesPerView: 3, spaceBetween: 24, pagination: false },
              1280: { slidesPerView: 3, spaceBetween: 24, pagination: false },
            }"
            :pagination="{ clickable: true }"
            class="section3-swiper px-2 w-full"
            wrapper-class="py-10"
          >
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-6 flex items-center flex-col gap-4 relative overflow-hidden"
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
                  <div
                    class="flex w-full items-start flex-col gap-3 md:min-h-[150px]"
                  >
                    <p class="text-base font-normal text-[#475467]">
                      Restore native ecosysstems with climate-resilient and
                      science-based planting. Bring back biodiversity, protect
                      water & soil, and create climate buffers for communities
                    </p>
                    <p class="text-base font-normal text-[#475467]">
                      Your $1 helps a seed become a forest for future
                      generations.
                    </p>
                  </div>
                </div>
                <div class="w-full flex items-start pt-1">
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
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-6 flex items-center flex-col gap-4 relative overflow-hidden"
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
                  <div
                    class="flex w-full items-start flex-col gap-3 md:min-h-[150px]"
                  >
                    <p class="text-base font-normal text-[#475467]">
                      Provite sustainable livelihoods through agroforestry:
                      native forests + income crops. Families become forest
                      guardians-protecting what also sustians thems.
                    </p>
                    <p class="text-base font-normal text-[#475467]">
                      Every tree you fund creates work, dignity, and hope.
                    </p>
                  </div>
                </div>
                <div class="w-full flex items-start pt-1">
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
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div
                class="bg-white w-full md:min-h-[654px] min-h-[568px] rounded-3xl p-6 flex items-center flex-col gap-4 relative overflow-hidden"
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
                  <div
                    class="flex w-full items-start flex-col gap-3 md:min-h-[150px]"
                  >
                    <p class="text-base font-normal text-[#475467]">
                      See your impact with transparant technology-GPS, photo,
                      and growth update.<br />
                      Join a global community of donors & changemakers building
                      a livable future.
                    </p>
                    <p class="text-base font-normal text-[#475467]">
                      Together we ensure people and planet thrive
                    </p>
                  </div>
                </div>
                <div class="w-full flex items-start pt-3">
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
    <div
      class="relative"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
    >
      <img
        src="../assets/Section 4.png"
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        class="container mx-auto pt-16 md:pt-[100px] pb-16 md:pb-[164px] flex gap-9 items-start flex-col relative z-20"
      >
        <div class="w-full flex flex-col items-start gap-4">
          <div class="w-full flex items-start flex-col gap-4">
            <p class="text-[#94C93D] text-sm uppercase font-normal">
              why this work
            </p>
            <h3 class="text-3xl md:text-6xl font-bold capitalize">
              Restore Nature. grow prosperity. fight climate change.
            </h3>
          </div>
          <div
            class="w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-4"
          >
            <p class="text-base font-normal text-[#475467] w-full md:w-[844px]">
              Forests are where nature, people, and climate meet. With local
              communities, we restore ecosystem, create fair livelihoods, and
              build resilience to heat and floods
            </p>
          </div>
        </div>

        <ClientOnly>
          <Swiper
            :modules="[Autoplay, Navigation, Pagination]"
            :slides-per-view="1"
            :space-between="16"
            :loop="true"
            :autoplay="false"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 16, pagination: false },
              1024: { slidesPerView: 3, spaceBetween: 16, pagination: false },
              1280: { slidesPerView: 3, spaceBetween: 16, pagination: false },
            }"
            :navigation="{ prevEl: '.section4-prev', nextEl: '.section4-next' }"
            :pagination="{ clickable: true }"
            class="section4-swiper px-2 w-full"
            wrapper-class="py-6"
          >
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div class="relative w-full h-[437px] overflow-hidden">
                <img
                  src="../assets/people.png"
                  alt="people"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
                >
                  <h3 class="text-2xl font-bold mb-2">People (Prosperity)</h3>
                  <p class="text-base">
                    We partner with farmers and cooperatives to fund nurseries,
                    training, and agroforestry-keeping benefits in the
                    community.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div class="relative w-full h-[437px] overflow-hidden">
                <img
                  src="../assets/nature.png"
                  alt="nature"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
                >
                  <h3 class="text-2xl font-bold mb-2">Nature (Biodiversity)</h3>
                  <p class="text-base">
                    We partner with farmers and cooperatives to fund nurseries,
                    training, and agroforestry-keeping benefits in the
                    community.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
            >
              <div class="relative w-full h-[437px] overflow-hidden">
                <img
                  src="../assets/climate.png"
                  alt="climate"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 bg-opacity-50 text-white p-5"
                >
                  <h3 class="text-2xl font-bold mb-2">Climate (Resilience)</h3>
                  <p class="text-base">
                    We partner with farmers and cooperatives to fund nurseries,
                    training, and agroforestry-keeping benefits in the
                    community.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
    <!-- section-5 -->
    <div class="bg-[#F4F1DC]">
      <div
        class="container mx-auto px-4 py-20 flex md:gap-[46px] gap-6 items-center flex-col"
      >
        <div class="flex items-center justify-center flex-col gap-4 w-full">
          <p class="text-sm text-[#94C93D] font-normal">Forest</p>
          <h3 class="text-3xl md:text-5xl font-bold text-center capitalize">
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
          <home-section5
            :tree-count="treeCount"
            :handleChangeTreeCount="handleChangeTreeCount"
          />
        </div>
        <div class="w-full flex justify-center items-center gap-4 flex-col">
          <div class="flex justify-center items-center gap-2">
            <p class="text-2xl font-semibold">{{ treeCount }}</p>
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
      <div class="absolute inset-0 z-40 bg-black bg-opacity-70"></div>
      <div class="relative z-50 w-full py-16 md:py-20">
        <div
          class="container mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-16 items-stretch md:items-center justify-between"
        >
          <div class="flex flex-col items-start gap-4 w-full md:w-1/2">
            <div class="w-full flex items-start flex-col md:gap-4 md:w-[70%]">
              <p
                class="text-xs md:text-sm font-normal text-[#94C93D] uppercase mb-1"
              >
                Take action
              </p>
              <h3
                class="text-2xl md:text-5xl text-white font-bold uppercase mb-4 md:mb-2 md:leading-normal"
              >
                A better future is calling
              </h3>
            </div>
            <p
              class="text-sm md:text-base font-normal text-white leading-relaxed md:w-[87%]"
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
                <!-- Amount Buttons -->
                <div class="grid grid-cols-3 gap-4 mb-4">
                  <button
                    v-for="amount in amounts"
                    :key="amount"
                    @click="handleAmountClick(amount)"
                    :class="[
                      'px-4 py-3 rounded-lg border shadow-sm font-semibold transition-all',
                      selectedAmount === amount
                        ? 'bg-[#94C93D] text-[#153B35] border-[#94C93D]'
                        : 'text-[#153B35] border-[#D0D5DD] hover:bg-gray-50',
                    ]"
                  >
                    ${{ amount }}
                  </button>
                </div>
                <div class="mb-4 space-y-1.5">
                  <div class="relative">
                    <span
                      class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085] text-base font-medium"
                    >
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="50"
                      v-model="customAmount"
                      @input="handleCustomAmountChange"
                      min="1"
                      class="w-full pl-9 pr-3.5 py-3 border border-[#D0D5DD] rounded-lg text-center text-[#667085] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#94C93D] focus:border-transparent"
                    />
                  </div>
                  <p class="text-left text-[#667085] text-sm">
                    Enter your donation amount.
                  </p>
                </div>
                <div class="flex w-full">
                  <a
                    href="#FUNGSLFMREB"
                    :data-amount="currentAmount"
                    class="w-full bg-[#94C93D] text-center text-[#153B35] px-6 py-3 rounded-full font-semibold uppercase text-base border border-[#153B35] shadow-sm hover:bg-[#8BB835] transition-colors"
                  >
                    DONATE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-7 -->
    <div class="bg-[#94C93D] w-full">
      <div class="px-0 py-8 flex gap-[18px] items-center flex-col">
        <h3
          class="font-bold text-2xl md:text-6xl text-center text-[#153B35] capitalize px-4"
        >
          Out of partner
        </h3>
        <div class="w-full px-6 md:px-28">
          <ClientOnly>
            <Swiper
              :modules="[Autoplay]"
              :slides-per-view="3"
              :space-between="36"
              :loop="true"
              :autoplay="false"
              :breakpoints="{
                640: { slidesPerView: 3, spaceBetween: 28 },
                768: { slidesPerView: 4, spaceBetween: 32 },
                1024: { slidesPerView: 5, spaceBetween: 40 },
                1280: { slidesPerView: 6, spaceBetween: 44 },
              }"
              :centered-slides="false"
              class="partners-swiper w-full"
            >
              <SwiperSlide
                v-for="partner in partnersMock"
                :key="partner.id"
                class="!flex !items-center !justify-center"
              >
                <img
                  :src="partner.img"
                  :alt="partner.alt"
                  class="w-[72px] md:w-[175px] h-full max-h-[120px] object-contain"
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
        class="px-4 pt-16 md:pt-[100px] pb-10 md:pb-[164px] flex gap-8 items-start flex-col relative z-20"
      >
        <div class="w-full flex flex-col items-start gap-4 container">
          <div class="w-full flex items-start flex-col gap-4">
            <p class="text-[#94C93D] text-sm uppercase font-normal">
              Make our mision grow
            </p>
            <h3 class="text-3xl md:text-6xl font-bold capitalize">
              many ways to get involved
            </h3>
          </div>
          <div
            class="w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-4"
          >
            <p class="text-base font-normal text-[#475467] w-full md:w-[70%]">
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
        <div class="container w-full pr-0">
          <div class="relative w-full h-[454px] md:h-[610px] mb-10">
            <div
              class="absolute inset-y-0 -left-4 md:left-0 right-0 md:right-[calc(50%-49vw)] h-full"
            >
              <ClientOnly>
                <Swiper
                  :modules="[Autoplay, Navigation, Pagination]"
                  :slides-per-view="1"
                  :space-between="16"
                  :slides-offset-after="0"
                  :loop="true"
                  :autoplay="false"
                  :breakpoints="{
                    640: { slidesPerView: 2, spaceBetween: 16 },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                      pagination: false,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 32,
                      pagination: false,
                    },
                    1280: {
                      slidesPerView: 3.2,
                      spaceBetween: 40,
                      pagination: false,
                    },
                  }"
                  :navigation="{
                    prevEl: '.stories-prev',
                    nextEl: '.stories-next',
                  }"
                  :pagination="{ clickable: true }"
                  class="stories-swiper pl-0 pr-0 w-full"
                  wrapper-class="pb-8 md:py-10"
                >
                  <SwiperSlide
                    v-for="x in involvedMock"
                    class="w-full h-[454px] md:h-[610px] shadow-xl flex flex-col rounded-xl overflow-hidden"
                  >
                    <div
                      :key="x.id"
                      class="w-full h-[454px] md:h-[610px] shadow-xl flex flex-col rounded-xl overflow-hidden"
                    >
                      <div class="w-full h-[calc(100%-150px)] flex-1">
                        <img
                          :src="x.img"
                          alt=""
                          class="block w-full h-full object-cover"
                        />
                      </div>
                      <div
                        class="p-6 flex flex-col items-start gap-2 w-full h-[150px]"
                      >
                        <h5 class="text-2xl font-bold">{{ x.title }}</h5>
                        <p
                          class="text-base text-[#475467] w-full truncate overflow-hidden whitespace-nowrap"
                        >
                          {{ x.desc }}
                        </p>
                        <div class="flex items-center gap-2">
                          <span class="font-bold text-sm text-[#94C93D]">
                            Know more
                          </span>
                          <img src="../assets/arrow_right.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-9 -->
    <div class="relative">
      <img
        src="../assets/Section 7.png"
        class="absolute top-0 left-0 w-full h-full object-contain"
      />
      <div
        class="container mx-auto px-4 md:px-0 py-4 md:py-20 flex gap-10 items-start flex-col relative z-20"
      >
        <div class="w-full flex flex-col items-start gap-4">
          <div class="w-full flex items-start flex-col gap-4">
            <p class="text-[#94C93D] text-sm uppercase font-normal">
              Make our mision grow
            </p>
            <div
              class="w-full flex gap-4 flex-col md:flex-row items-start md:items-end justify-start md:justify-between"
            >
              <h3 class="text-3xl md:text-6xl font-bold capitalize">
                Story of recovery & hope
              </h3>
              <div class="flex gap-2">
                <button
                  class="bg-[#92C73E] rounded-full outline-none w-6 h-6 grid place-items-center"
                >
                  <img src="../assets/right_icon.png" alt="" />
                </button>
                <span class="text-base font-semibold uppercase">
                  View all
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- Stories Slider with Navigation Buttons -->
        <div class="w-full relative">
          <!-- Left Navigation Button - Only visible on PC -->
          <button
            class="section9-prev hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Previous story"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- Swiper Slider -->
          <ClientOnly>
            <Swiper
              :modules="[Autoplay, Navigation, Pagination]"
              :slides-per-view="1"
              :space-between="16"
              :loop="true"
              :autoplay="false"
              :breakpoints="{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20, pagination: false },
                1024: { slidesPerView: 3, spaceBetween: 24, pagination: false },
                1280: { slidesPerView: 3, spaceBetween: 24, pagination: false },
              }"
              :navigation="{
                prevEl: '.section9-prev',
                nextEl: '.section9-next',
              }"
              :pagination="{ clickable: true }"
              class="stories-swiper w-full"
              wrapper-class="py-6"
            >
              <SwiperSlide v-for="story in storiesMock" :key="story.id">
                <div class="shadow-xl w-full bg-white overflow-hidden">
                  <img :src="story.img" alt="" class="w-full h-auto" />
                  <div class="p-6 w-full flex flex-col gap-2 items-start">
                    <h3 class="font-bold text-2xl">{{ story.title }}</h3>
                    <p class="text-base text-[#475467] w-full">
                      {{ story.desc }}
                    </p>
                    <div class="w-full h-[2px] bg-gray-400"></div>
                    <p class="text-[#475467] text-base">{{ story.date }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>

          <!-- Right Navigation Button - Only visible on PC -->
          <button
            class="section9-next hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Next story"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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

.stories-swiper :deep(.swiper-pagination) {
  width: auto !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  top: -8px;
}

.stories-swiper :deep(.swiper-pagination-bullet) {
  width: 16px !important;
  height: 16px !important;
  background-color: #d9d9d9;
  opacity: 1;
  margin: 0;
  border-radius: 50%;
  transform: scale(1) !important;
}

.stories-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #92c73e;
}

.section4-swiper :deep(.swiper-pagination) {
  width: auto !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.section4-swiper :deep(.swiper-pagination-bullet) {
  width: 16px !important;
  height: 16px !important;
  background-color: #d9d9d9;
  opacity: 1;
  margin: 0;
  border-radius: 50%;
  transform: scale(1) !important;
}

.section4-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #92c73e;
}

.section3-swiper :deep(.swiper-pagination) {
  width: auto !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.section3-swiper :deep(.swiper-pagination-bullet) {
  width: 16px !important;
  height: 16px !important;
  background-color: #d9d9d9;
  opacity: 1;
  margin: 0;
  border-radius: 50%;
  transform: scale(1) !important;
}

.section3-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #92c73e;
}
/* Fallback for browsers that don't support bg-clip-text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
