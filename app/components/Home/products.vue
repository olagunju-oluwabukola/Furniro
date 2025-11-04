<template>
     <div class="text-center my-16">
         <h2 class="capitalize text-xl md:text-4xl font-bold"> Our Products</h2>
    </div>

    <section class="max-w-7xl mx-auto  px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>

    <div class="flex justify-center mt-10">
      <button
        class="border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition-colors duration-200"
      >
        Show More
      </button>
    </div>
  </section>
</template>

<script setup>
import img1 from "~/assets/images/img1.png"
import img2 from "~/assets/images/img2.png"
import img3 from "~/assets/images/img3.png"
import img4 from "~/assets/images/img4.png"
import img5 from "~/assets/images/img5.png"
import img6 from "~/assets/images/img6.png"
import img7 from "~/assets/images/img7.png"
import img8 from "~/assets/images/img8.png"


const products = [
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: " 2.500.000",
    oldPrice: "3.500.000",
    discount: 30,
    img: img1
  },
    {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    oldPrice: "3.500.000",
    // discount: 30,
    img: img5
  },
    {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: " 2.500.000",
    oldPrice: "3.500.000",
    discount: 30,
    img: img2
  },
    {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "# 2.500.000",
    oldPrice: "#3.500.000",
    tag: "new",
    img: img3
  },
   {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "# 2.500.000",
    oldPrice: "#3.500.000",
    tag: "new",
    img: img4
  },
   {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "# 2.500.000",
    oldPrice: "#3.500.000",
    tag: "new",
    img: img8
  },
   {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "# 2.500.000",
    oldPrice: "#3.500.000",
    tag: "new",
    img: img6
  },
   {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "# 2.500.000",
    oldPrice: "#3.500.000",
    tag: "new",
    img: img7
  },

]
</script>