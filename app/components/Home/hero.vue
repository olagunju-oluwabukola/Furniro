<template>
  <div class="relative">
    <!-- Hero image -->
    <img :src="heroImg" alt="heroImg" class="w-full h-80 md:h-[90vh]  object-cover" />

    <!-- Overlay content box -->
    <div
      class="absolute bottom-10 right-5 md:bottom-22 md:right-10
             bg-[#FFF3E3] rounded-lg shadow-lg p-6 md:p-10 w-11/12 md:w-[550px] text-left space-y-4 md:h-80"
    >
    <div class="mt-10 mx-10">
<p class="text-[8px] md:text-xs  uppercase tracking-wider font-semibold mb-4" >New Arrival</p>
      <h3 class="text-sm md:text-6xl font-bold text-[#B88E2F]">
        Discover Our New Collection
      </h3>
      <p class=" text-[10px] md:text-sm md:mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <p
        class="bg-[#B88E2F] text-white px-2  py-1  md:px-6 md:py-2 inline-block rounded- transition-colors duration-200 font-semibold mt-2  md:mt-6 mb-2 md:mb-0"
      >
        Buy Now
    </p>
    </div>

    </div>
  </div>
</template>

<script setup>
import heroImg from "~/assets/images/heroImg.png"
</script>
