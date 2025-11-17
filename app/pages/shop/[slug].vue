<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// Fetch product by slug
const { data: product, pending, error } = await useFetch(`/api/products/${slug}`)
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Product not found.</div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-10">

      <!-- LEFT : Big Product Image -->
      <div>
        <img :src="product.image" class="w-full rounded-lg shadow-md" />
      </div>

      <!-- RIGHT : Product Info -->
      <div>
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <p class="text-xl mt-3"> {{ product.price }} </p>

        <p class="mt-6 text-gray-600 leading-relaxed">{{ product.description }}</p>

        <button
          class="bg-[#B88E2F] text-white px-6 py-3 rounded mt-6"
          @click="cart.add(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>
