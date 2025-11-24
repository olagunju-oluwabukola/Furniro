<script setup>
import { ref, computed } from 'vue'
import Actions from './divider.vue'

const { data: products, pending, error } = await useFetch('/api/products')

const showCount = ref(8)
const sortBy = ref('default')
const layout = ref('grid')

const productsCount = computed(() => products.value?.length || 0)

const displayedProducts = computed(() => {
  if (!products.value) return []

  let result = [...products.value]

  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')))
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')))
  }

  return result.slice(0, showCount.value)
})

const handleAddToCart = (product) => console.log(`Added ${product.title} to cart`)

const handleShare = async (product) => {
  const url = `${window.location.origin}/shop/${product.slug}`
  try {
    await navigator.clipboard.writeText(url)
    alert(`Product link copied!\n${url}`)
  } catch (err) {
    alert("Failed to copy link")
  }
}

const compareList = ref([])

const handleCompare = (product) => {
  if (!compareList.value.find(p => p.slug === product.slug)) {
    compareList.value.push(product)
    console.log(`${product.title} added to compare list`)
  } else {
    console.log(`${product.title} is already in compare list`)
  }
}

const handleLike  = (product) => console.log(`Liked ${product.title}`)
</script>


<template>
  <Actions
    :products-count="productsCount"
    v-model:showCount="showCount"
    v-model:sortBy="sortBy"
    v-model:layout="layout"
  />

  <section class="max-w-7xl mx-auto px-4 mt-10">
    <div v-if="pending" class="text-center py-10 text-gray-500">Loading products...</div>
    <div v-else-if="error" class="text-center py-10 text-red-500">Failed to load products.</div>

    <div v-else :class="layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6' : 'flex flex-col gap-4'">

        <ProductCard
        v-for="(product, index) in displayedProducts"
        :key="index"
        :product="product"
        @add-to-cart="handleAddToCart"
        @share="handleShare"
        @compare="handleCompare"
        @like="handleLike"
      />
         </div>



    <div class="flex justify-center mt-10" v-if="showCount < productsCount">
      <button
        @click="showCount += 4"
        class="border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition-colors duration-200"
      >
        Show More
      </button>
    </div>
  </section>
</template>