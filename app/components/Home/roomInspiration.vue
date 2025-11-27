<template>
  <section class="bg-[#FCF8F3] py-16 px-6 md:px-12 lg:px-20 ">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p class="text-gray-600 mb-8 max-w-md">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <p
          class="bg-[#B88E2F] text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition inline-block"
        >
          Explore More
    </p>
      </div>


      <div class="relative rounded-lg overflow-hidden">
        <img
          :src="currentCategory.mainImage"
          :alt="currentCategory.title"
          class="w-full h-[450px] object-cover transition-all duration-700"
        />
       <div class="absolute bottom-5 left-5 flex items-center space-x-4">

  <div class="bg-white/60 py-3 px-3 rounded-lg">
    <p class="text-xs text-gray-500">
      {{ currentCategory.id }} — {{ currentCategory.type }}
    </p>
    <h3 class="text-sm font-semibold text-gray-800">
      {{ currentCategory.title }}
    </h3>
  </div>

  <div>
    <p class="bg-yellow-600 text-white font-bold px-4 py-1  hover:bg-yellow-700 transition cursor-pointer">
      →
    </p>
  </div>
</div>


      </div>


      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${activeImageIndex * 100}%)` }"
        >
         <div
  v-for="(img, i) in currentCategory.images"
  :key="i"
  class="flex-shrink-0 w-full overflow-hidden rounded-lg"
>
  <img
    :src="img"
    alt=""
    class="w-full h-60 object-cover rounded-lg"
  />
</div>

        </div>


<!-- Previous Button -->
<p
  @click="prevImage"
  class="absolute left-2 top-1/2 -translate-y-1/2 bg-[#B88E2F] text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer"
>
  ‹
</p>


<p
  @click="nextImage"
  class="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B88E2F] text-white rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer"
>
  ›
</p>
        <div class="flex justify-center gap-2 mt-4 space-x-2">
          <span
            v-for="(img, i) in currentCategory.images"
            :key="i"
            @click="goToImage(i)"
            class="w-3 h-3 p-2 rounded-full cursor-pointer transition"
            :class="activeImageIndex === i ? 'bg-yellow-600' : 'bg-gray-300'"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import dinning1 from "~/assets/images/dinning1.png"
import dinning2 from "~/assets/images/dinning2.png"
import dinning3 from "~/assets/images/dinning3.png"
import dinning4 from "~/assets/images/dining.png"
import bedroom1 from "~/assets/images/bedroom1.png"
import bedroom2 from "~/assets/images/bedroom.png"
import bedroom3 from "~/assets/images/bedroom2.png"
import bedroom4 from "~/assets/images/bedroom3.png"
import living1 from "~/assets/images/img4.png"
import living2 from "~/assets/images/img6.png"
import living3 from "~/assets/images/img8.png"
import living4 from "~/assets/images/living.png"
const categories = ref([
  {
    id: "01",
    type: "Bed Room",
    title: "Inner Peace",
    mainImage: bedroom1,
    images: [
   bedroom2,
   bedroom3,
   bedroom4
    ],
  },
  {
    id: "02",
    type: "Dining Room",
    title: "Cozy Minimal",
    mainImage: dinning1,
    images: [
    dinning2,
    dinning3,
    dinning4
    ],
  },
  {
    id: "03",
    type: "Living Room",
    title: "Bright Serenity",
    mainImage: living1,
    images: [
   living2,
   living3,
   living4
    ],
  },
]);

const activeCategoryIndex = ref(0);
const activeImageIndex = ref(0);
let interval = null;

const currentCategory = computed(() => categories.value[activeCategoryIndex.value]);

const nextImage = () => {
  const images = currentCategory.value.images;
  if (activeImageIndex.value < images.length - 1) {
    activeImageIndex.value++;
  } else {

    activeCategoryIndex.value =
      (activeCategoryIndex.value + 1) % categories.value.length;
    activeImageIndex.value = 0;
  }
};

const prevImage = () => {
  const images = currentCategory.value.images;
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--;
  } else {

    activeCategoryIndex.value =
      (activeCategoryIndex.value - 1 + categories.value.length) %
      categories.value.length;
    activeImageIndex.value =
      categories.value[activeCategoryIndex.value].images.length - 1;
  }
};

const goToImage = (index) => {
  activeImageIndex.value = index;
};

onMounted(() => {
  interval = setInterval(nextImage, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
