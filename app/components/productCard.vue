<template>
  <div class="relative overflow-hidden rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300">
    <div class="relative product-card">
      <img :src="product.img" :alt="product.title" class="w-full h-64 object-cover" />

      <div v-if="product.discount" class="absolute top-3 right-3 bg-red-500 text-white text-xs px-1 py-2 rounded-full z-20 font-semibold w-8 h-8">
        -{{ product.discount }}%
      </div>

      <div v-if="product.tag" class="absolute top-12 right-3 bg-green-500 capitalize font-semibold text-white text-xs px-1 py-2 w-8 h-8 rounded-full z-20">
        {{ product.tag }}
      </div>

      <div class="bg-gray-100">
        <div class="py-4 px-4">
          <h3 class="text-gray-800 font-semibold">{{ product.title }}</h3>
          <p class="text-sm text-gray-500 my-4">{{ product.description }}</p>
          <div class="flex justify-between gap-2 mt-2">
            <p class="font-semibold text-sm">NGN {{ product.price }}</p>
            <p v-if="product.oldPrice" class="line-through text-gray-400 text-xs flex items-end">
              NGN {{ product.oldPrice }}
            </p>
          </div>
        </div>
      </div>

      <div class="overlay absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
           style="background-color: rgba(0,0,0,0.6);">
        <p @click="$emit('add-to-cart', product)" class="inline-block text-yellow-600 bg-white px-6 py-2 rounded-md transition-colors duration-200 mb-4 cursor-pointer">Add to cart</p>
        <div class="flex gap-4 text-white text-sm">
          <span @click="$emit('share', product)" class="cursor-pointer hover:underline flex justify-center items-center gap-1">Share</span>
          <span @click="$emit('compare', product)" class="cursor-pointer hover:underline flex justify-center items-center gap-1">Compare</span>
          <span @click="$emit('like', product)" class="cursor-pointer hover:underline flex justify-center items-center gap-1">Like</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true }
})
</script>

<style scoped>
.overlay { opacity: 0; }
.product-card:hover .overlay { opacity: 1; }
</style>
