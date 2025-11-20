<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const { data: product, pending, error } = await useFetch(() => `/api/products/${slug}`)
const cart = {
  add(p) {
    if (!p) return
    alert(`Added "${p.title}" to cart`)
  }
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div v-if="pending" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error || !product.value" class="text-center text-red-500">
      Product not found.
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <img
          :src="product.value.img"
          class="w-full rounded-lg shadow-md"
          :alt="product.value.title"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold">{{ product.value.title }}</h1>
        <p class="text-xl mt-3 font-semibold">{{ product.value.price }}</p>
        <p class="mt-6 text-gray-600">{{ product.value.description }}</p>

        <button
          class="bg-[#B88E2F] text-white px-6 py-3 rounded mt-6 hover:bg-[#a37b25] transition"
          @click="cart.add(product.value)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>
