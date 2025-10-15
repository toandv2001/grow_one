<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="">
    <!-- banner -->
    <div class="relative w-full h-screen overflow-hidden">
      <!-- Thêm h-screen để full height test -->
      <img
        src="../assets/banner.jpg"
        alt="Banner Image"
        class="w-full h-full absolute inset-0 object-cover z-10"
        onerror="this.src='https://via.placeholder.com/1920x1080?text=Image+Not+Found'; console.error('Ảnh không load: Đường dẫn sai hoặc file missing!');"
      />
      <div
        class="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center"
      >
        <h1 class="text-[80px] font-bold text-white mb-4 capitalize">
          We grow forest
        </h1>
        <p class="text-[24px] text-white mb-6 max-w-4xl mx-auto">
          Facing a climate crisis, we’re planting a forest of solutions. Grow
          One Future restores ecosystems, empowers communities, and builds a
          better tomorrow, one tree at a time
        </p>
        <button
          class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors"
        >
          Donate Now
        </button>
      </div>
    </div>
    <!-- section-1 -->
    <div class="min-h-[608px]">
      <div class="container mx-auto px-4 py-12 flex gap-1">
        <div class="w-1/3">
          <div
            class="flex justify-center items-start flex-col gap-2 max-w-[411px]"
          >
            <p class="text-sm font-normal uppercase">our by 2050</p>
            <h2 class="text-[60px] font-bold">By 2050, We Grow One Future</h2>
            <p class="text-base font-normal">
              By 2050, together with communities, Grow One Future will restore
              ecosystems, empower millions of families, and drive global climate
              action—not just planting trees, but growing futures.
            </p>
          </div>
        </div>
        <div
          class="w-2/3 bg-white flex justify-center items-center flex-col gap-4 h-full px-4 py-12"
        >
          <div class="w-full grid grid-cols-2 gap-8 h-auto">
            <div class="max-w-[420px] h-auto flex gap-6 shadow-md">
              <img
                src="../assets/card.png"
                alt="card"
                class="w-[200px] h-[200px] object-cover"
              />
              <div class="px-2 flex items-start justify-center gap-2 flex-col">
                <h3 class="text-4xl font-black">1B</h3>
                <p class="text-2xl font-bold">Trees</p>
                <p class="text-sm">
                  Restored with native and economic species to revive
                  biodiversity.
                </p>
              </div>
            </div>
            <div class="max-w-[420px] h-auto flex gap-6 shadow-md">
              <img
                src="../assets/card2.png"
                alt="card"
                class="w-[200px] h-[200px] object-cover"
              />
              <div class="flex items-start justify-center gap-2 flex-col">
                <h3 class="text-4xl font-black">10M</h3>
                <p class="text-2xl font-bold">Families</p>
                <p class="text-sm">
                  Lifted through sustainable forest-based livelihoods.
                </p>
              </div>
            </div>
            <div class="max-w-[420px] h-auto flex gap-6 shadow-md">
              <img
                src="../assets/card3.png"
                alt="card"
                class="w-[200px] h-[200px] object-cover"
              />
              <div class="flex items-start justify-center gap-2 flex-col">
                <h3 class="text-4xl font-black">50</h3>
                <p class="text-2xl font-bold">Countries</p>
                <p class="text-sm">
                  Building the world’s largest community-led reforestation
                  network.
                </p>
              </div>
            </div>
            <div class="max-w-[420px] h-auto flex gap-6 shadow-md">
              <img
                src="../assets/card4.png"
                alt="card"
                class="w-[200px] h-[200px] object-cover"
              />
              <div class="flex items-start justify-center gap-2 flex-col">
                <h3 class="text-4xl font-black">1B</h3>
                <p class="text-2xl font-bold">Tons of CO₂</p>
                <p class="text-sm">
                  Captured to advance the global Net Zero pathway.
                </p>
              </div>
            </div>
          </div>
          <p class="text-base font-semibold">
            Plant together. Prosper together. Shape the future we all deserve.
          </p>
        </div>
      </div>
    </div>
    <!-- section-2 -->
    <div class="container mx-auto px-4 py-12 flex gap-4 items-center">
      <div class="w-1/2 flex justify-center items-center relative">
        <img
          src="../assets/vetinh1.png"
          alt="vetinh1"
          class="absolute w-[43px] h-[43px] top-[70px] left-[120px]"
        />
        <img
          src="../assets/vetinh2.png"
          alt="vetinh2"
          class="absolute w-[43px] h-[43px] top-[450px] right-[120px]"
        />
        <div>
          <img src="../assets/Earth.png" alt="earth" />
        </div>
        <div class="absolute w-[90%] h-full flex justify-between items-center">
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
      <div class="h-[500px] w-1/2 flex items-start gap-8 flex-col">
        <div class="w-full flex items-start gap-2 flex-col">
          <p class="text-sm text-[#94C93D] uppercase">Who we are</p>
          <h3 class="font-bold text-6xl uppercase leading-[100%]">
            Global Nonprofit Growing Forests, Livelihoods, and Climate Solutions
          </h3>
        </div>
        <p class="text-[#475467] text-base font-normal">
          We are a global nonprofit with a threefold mission: restore forests,
          empower communities with sustainable livelihoods, and drive lasting
          climate solutions. Every tree we plant is part of a future we grow
          together.
        </p>
        <div class="w-full flex items-start gap-4">
          <div class="flex gap-2">
            <button
              class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]"
            >
              <img src="../assets/right_icon.png" alt="" />
            </button>
            <span class="text-base font-semibold">Out Impact</span>
          </div>
          <div class="flex gap-2">
            <button
              class="w-7 h-7 rounded-full flex items-center justify-center border-none outline-none bg-[#92C73E]"
            >
              <img src="../assets/right_icon.png" alt="" />
            </button>
            <span class="text-base font-semibold">About Us</span>
          </div>
        </div>
      </div>
    </div>
    <!-- section-3 -->
    <div class="bg-[#143A35]">
      <div
        class="container mx-auto px-4 py-12 flex flex-col gap-16 items-center h-auto"
      >
        <div class="w-full flex flex-col items-center justify-center gap-2">
          <p class="text-sm text-[#94C93D] uppercase">our pillars</p>
          <h3 class="font-bold text-6xl text-white capitalize">
            Forest - people - future
          </h3>
        </div>
        <!-- card -->
        <div class="flex items-center justify-center gap-8">
          <div
            class="bg-white w-[410px] min-h-[654px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
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
                science-based planting. Bring back biodiversity, protect water &
                soil, and create climate buffers for communities
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
            <div class="absolute bottom-[-20px] h-[319px] w-full z-30">
              <img
                src="../assets/forests_img.png"
                alt="Forests image"
                class=""
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_70%,rgba(255,255,255,0)_100%)]"
              ></div>
            </div>
          </div>
          <!-- card-2 -->
          <div
            class="bg-white w-[410px] min-h-[654px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
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
            <div class="absolute bottom-[-20px] h-[319px] w-full z-30">
              <img
                src="../assets/people_img.png"
                alt="Forests image"
                class=""
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_70%,rgba(255,255,255,0)_100%)]"
              ></div>
            </div>
          </div>
          <!-- card-3 -->
          <div
            class="bg-white w-[410px] min-h-[654px] rounded-3xl p-4 flex items-center flex-col gap-4 relative overflow-hidden"
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
                growth update. Join a global community of donors & changemakers
                building a livable future.
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
            <div class="absolute bottom-[-20px] h-[319px] w-full z-30">
              <img
                src="../assets/future_img.png"
                alt="Forests image"
                class=""
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.3)_30%,rgba(255,255,255,0.1)_70%,rgba(255,255,255,0)_100%)]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-4 -->
    <div class="container mx-auto px-4 py-12 flex gap-4 items-center flex-col">
      <div class="flex items-start flex-col gap-4">
        <div class="flex items-start flex-col gap-4">
          <p class="text-sm text-[#94C93D] uppercase">why this work</p>
          <h3 class="text-6xl font-bold">
            Restore Nature. grow prosperity. fight climate change.
          </h3>
        </div>
        <p class="text-base text-[#475467] max-w-[844px]">
          Forests are where nature, people, and climate meet. With local
          communities, we restore ecosystem, create fair livelihoods, and build
          resilience to heat and floods
        </p>
      </div>

      <div class="w-full flex gap-8">
        <div class="relative w-1/3 h-[437px] overflow-hidden">
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
        <div class="relative w-1/3 h-[437px] overflow-hidden">
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
        <div class="relative w-1/3 h-[437px] overflow-hidden">
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
    <!-- section-5 -->
    <div class="bg-[#F4F1DC]">
      <div
        class="container mx-auto px-4 py-12 flex gap-4 items-center flex-col"
      >
        <div
          class="flex items-center justify-center flex-col gap-4 min-w-[1110px]"
        >
          <p class="text-sm text-[#94C93D] font-normal">Forest</p>
          <h3 class="text-5xl font-bold">
            From one tree to a thriving community forest
          </h3>
          <p class="text-[15px] text-[#475467] max-w-[917px]">
            We restore native forests with local communities—reviving
            biodiversity, strengthening livelihoods, and stabilizing climate.<br />Inspired
            by the next generation, Grow One Future calls you to act now—with
            transparent updates for our children’s future.
          </p>
        </div>
        <div class="w-full min-h-[503px] rounded-3xl overflow-hidden">
          <img
            src="../assets/forest.png"
            alt="forest"
            class="w-full h-full object-cover"
          />
          <img
            src="../assets/forest2.png"
            alt="forest"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full flex justify-center items-center gap-4 flex-col">
          <div class="flex justify-center items-center gap-2">
            <p class="text-2xl font-semibold">12</p>
            <img src="../assets/tree.png" alt="tree" />
          </div>
          <button
            class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
    <!-- section-6 -->
    <div class="relative w-full min-h-[511px]">
      <img
        src="../assets/banner2.jpg"
        alt=""
        class="w-full h-full absolute z-20"
      />
      <div class="inset-0 absolute z-40 bg-black bg-opacity-50"></div>
      <div class="absolute w-full h-full z-50 flex justify-center items-center">
        <div
          class="container mx-auto px-4 py-12 flex gap-16 items-center justify-between "
        >
          <div class="flex flex-col items-start gap-4 w-1/2">
            <div class="max-w-[500px]">
              <p class="text-sm font-normal text-[#94C93D] uppercase my-2">
                Take action
              </p>
              <h3 class="text-5xl text-white font-bold uppercase my-2">
                A better future <br />
                is calling
              </h3>
            </div>
            <p class="text-base font-normal text-white max-w-[470px]">
              From one gift, we restore native forests with local
              communities-bringing wildlife bac, creating fair livehoods, and
              building resilence to heat and floods. You’ll recieve photo
              updates and project report as your impact takes root.
            </p>
          </div>
          <!-- form -->
          <div class="w-1/2 h-auto flex items-center justify-end">
            <div class="min-h-[345px] w-[472px]">
              <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div class="flex justify-between mb-4 w-full border border-[#D0D5DD] rounded-md">
                  <button
                    class=" text-[#94C93D] px-4 py-2 rounded-md text-sm  w-1/2 bg-[#EDF3E5] border border-[#94C93D] font-semibold"
                  >
                    One-time
                  </button>
                  <button
                    class=" text-red-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center  w-1/2"
                  >
                    <span class="text-xl">❤️</span> Monthly
                  </button>
                </div>
                <div class="grid grid-cols-3 gap-4 mb-4">
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $25
                  </button>
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $50
                  </button>
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $75
                  </button>
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $100
                  </button>
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $500
                  </button>
                  <button
                    class="bg-green-100 text-green-800 px-4 py-2 rounded-lg"
                  >
                    $1000
                  </button>
                </div>
                <div class="mb-4">
                  <input
                    type="number"
                    placeholder="50"
                    class="w-full p-2 border rounded-lg text-center"
                  />
                  <p class="text-center text-gray-600 mt-1">
                    Enter your donation amount.
                  </p>
                </div>
                <button
                  class="bg-[#9CCC3B] text-[#1A3635] px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-[#8BB835] transition-colors w-full"
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
      <div
        class="container mx-auto px-4 py-12 flex gap-4 items-center flex-col"
      >
        <h3 class="font-bold text-6xl text-center capitalize">
          Out of partner
        </h3>
        <div class="w-full flex gap-8 items-center justify-between">
          <img src="../assets/samsung.png" alt="" class="w-44 object-cover" />
          <img src="../assets/microsoft.png" alt="" class="w-44 object-cover" />
          <img src="../assets/google.png" alt="" class="w-44 object-cover" />
          <img src="../assets/slack.png" alt="" class="w-44 object-cover" />
          <img src="../assets/lg.png" alt="" class="w-44 object-cover" />
          <img src="../assets/sony.png" alt="" class="w-44 object-cover" />
        </div>
      </div>
    </div>
    <!-- section-8 -->
    <div>
      <div class="container mx-auto px-4 py-12 flex gap-8 items-start flex-col">
        <div class="w-full flex flex-col items-start gap-4">
          <div class="w-full flex items-start flex-col gap-4">
            <p class="text-[#94C93D] text-sm uppercase font-semibold">
              Make our mision grow
            </p>
            <h3 class="text-6xl font-bold capitalize">
              many ways to get involved
            </h3>
          </div>
          <div class="w-full flex justify-between items-center">
            <p class="text-base font-normal text-[#475467] w-[844px]">
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
        <div class="w-full flex items-center gap-8">
          <div class="min-h-[610px] max-w-[458px] shadow-xl">
            <img src="../assets/Image.png" alt="" />
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
          <div class="min-h-[610px] max-w-[458px] shadow-xl">
            <img src="../assets/Image.png" alt="" />
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
          <div class="min-h-[610px] max-w-[458px] shadow-xl">
            <img src="../assets/Image.png" alt="" />
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
    <div>
      <div class="container mx-auto px-4 py-12 flex gap-8 items-start flex-col">
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
        <!-- card -->
        <div
          class="w-full relative flex items-center gap-4 border border-black justify-between"
        >
          <button
            class="h-11 w-10 rounded-md flex items-center justify-center shadow-lg"
          >
            <img src="../assets/left_icon.png" alt="" />
          </button>
          <div class="shadow-lg max-w-[428px]">
            <img src="../assets/hope.png" alt="" />
            <div class="p-4 w-full flex flex-col gap-2 items-start">
              <h3 class="font-bold text-2xl">Become a member</h3>
              <p class="text-base text-[#475467] w-full">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
              <div class="w-full h-[2px] bg-gray-400"></div>
              <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
            </div>
          </div>
          <div class="shadow-lg max-w-[428px]">
            <img src="../assets/hope2.png" alt="" />
            <div class="p-4 w-full flex flex-col gap-2 items-start">
              <h3 class="font-bold text-2xl">Corporate partnerships</h3>
              <p class="text-base text-[#475467] w-full">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
              <div class="w-full h-[2px] bg-gray-400"></div>
              <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
            </div>
          </div>
          <div class="shadow-lg max-w-[428px]">
            <img src="../assets/hope3.png" alt="" />
            <div class="p-4 w-full flex flex-col gap-2 items-start">
              <h3 class="font-bold text-2xl">Corporate partnerships</h3>
              <p class="text-base text-[#475467] w-full">
                We partner with farmers and cooperatives to fund nurseries,
                training, and agroforestry-keeping benefits in the community.
              </p>
              <div class="w-full h-[2px] bg-gray-400"></div>
              <p class="text-[#475467] text-base">-AUGUST 12, 2025</p>
            </div>
          </div>
          <button
            class="h-11 w-10 rounded-md flex items-center justify-center shadow-lg"
          >
            <img src="../assets/right_icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
