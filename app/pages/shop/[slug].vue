<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'
const activeTab = ref('description')
const descriptionText = [
  `Designed for comfort and crafted with modern aesthetics, the Syltherine chair
  is the perfect blend of luxury and functionality. Its ergonomic design ensures proper posture support
  whether you're working, relaxing, or reading.`,

  `Built with high-quality materials, the Syltherine chair features premium cushioning, a sturdy wooden frame,
  and a smooth finish that elevates the elegance of any room. The chair is lightweight yet strong,
  making it easy to move around while maintaining exceptional durability.`
]

const additionalInfo = {
  weight: '7.5 kg',
  dimensions: '82 cm (H) × 50 cm (W) × 45 cm (D)',
  material: 'Solid Wood + High-Density Foam + Fabric Upholstery',
  color: 'Cream, Brown, Black',
  warranty: '2 years manufacturing warranty'
}

const reviews = [
  {
    name: 'Adebola',
    rating: "⭐⭐⭐⭐⭐",
    text: 'Very comfortable chair! Fits perfectly in my reading corner.'
  },
  {
    name: 'Sarah O.',
    rating: "⭐⭐⭐",
    text: 'Strong, stylish, and great quality. Worth every price!'
  },
  {
    name: 'Michael',
    rating: "⭐⭐⭐⭐",
    text: 'Lightweight but solid. The cushioning is excellent — highly recommend!'
  }
]
const cartStore = useCartStore()
const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value)
  }
}


const route = useRoute()
const slug = route.params.slug

const { data: product, pending, error } = await useFetch(`/api/products/${slug}`)

const selectedImage = ref(0)
const quantity = ref(1)
const selectedSize = ref('L')
const selectedColor = ref('#816DFA')

const images = [
  product.value?.img,
  product.value?.img,
  product.value?.img,
  product.value?.img,
]

const sizes = ['L', 'XL', 'XS']
const colors = ['#816DFA', '#000000', '#B88E2F']

const relatedProducts = ref([])

const { data: allProducts } = await useFetch('/api/products')
if (allProducts.value) {
  relatedProducts.value = allProducts.value
    .filter(p => p.slug !== slug)
    .slice(0, 4)
}

// const cart = {
//   add(p) {
//     if (!p) return
//     alert(`Added ${quantity.value}x "${p.title}" to cart`)
//   }
// }

const incrementQuantity = () => quantity.value++
const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <div class=" bg-white">

    <div class="bg-[#F9F1E7] py-6 px-6">
      <div class="max-w-7xl mx-auto flex items-center gap-3 text-sm">
        <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink>
        <span class="text-gray-400">›</span>
        <NuxtLink to="/shop" class="text-gray-500 hover:text-gray-700">Shop</NuxtLink>
        <span class="text-gray-400">›</span>
        <span class="text-gray-900 font-medium">{{ product?.title || 'Product' }}</span>
      </div>
    </div>

    <div v-if="pending" class="text-center py-20 text-gray-500">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B88E2F] mx-auto"></div>
      <p class="mt-4">Loading...</p>
    </div>

    <div v-else-if="error || !product" class="text-center py-20 text-red-500">
      <p class="text-xl">Product not found</p>
      <NuxtLink to="/shop" class="text-[#B88E2F] hover:underline mt-4 inline-block">
        Back to Shop
      </NuxtLink>
    </div>
    <div v-else>

      <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="flex gap-6">
            <div class="flex flex-col gap-4">
              <div
                v-for="(img, idx) in images"
                :key="idx"
                @click="selectedImage = idx"
                :class="[
                  'w-20 h-20 rounded-lg cursor-pointer bg-[#F9F1E7] overflow-hidden transition-all',
                  selectedImage === idx ? 'ring-2 ring-[#B88E2F]' : 'opacity-60 hover:opacity-100'
                ]"
              >
                <img :src="img" :alt="`Thumbnail ${idx + 1}`" class="w-full h-full object-cover" />
              </div>
            </div>

            <div class="flex-1 bg-[#F9F1E7] rounded-lg overflow-hidden">
              <img
                :src="images[selectedImage]"
                :alt="product.title"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h1 class="text-4xl font-semibold text-gray-900">{{ product.title }}</h1>
            <p class="text-2xl text-gray-500 mt-2">NGN {{ product.price }}</p>


            <div class="flex items-center gap-4 mt-4">
              <div class="flex gap-1">
                <span v-for="i in 5" :key="i" class="text-yellow-400">
                  {{ i <= 4 ? '★' : '☆' }}
                </span>
              </div>
              <span class="text-sm text-gray-500">5 Customer Review</span>
            </div>

            <p class="text-gray-600 mt-6 leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound that is both articulate and pronounced. The analogue knobs allow you to
              fine tune the controls to your personal preferences while the guitar-influenced leather
              strap enables easy and stylish travel.
            </p>

            <div class="mt-6">
              <p class="text-sm text-gray-500 mb-3">Size</p>
              <div class="flex gap-3">
                <button
                  v-for="size in sizes"
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'px-4 py-2 rounded-md text-sm font-medium transition-all',
                    selectedSize === size
                      ? 'bg-[#B88E2F] text-white'
                      : 'bg-[#F9F1E7] text-gray-700 hover:bg-[#f0e8d8]'
                  ]"
                >
                  {{ size }}
                </button>
              </div>
            </div>


            <div class="mt-6">
              <p class="text-sm text-gray-500 mb-3">Color</p>
              <div class="flex gap-3">
                <button
                  v-for="color in colors"
                  :key="color"
                  @click="selectedColor = color"
                  :class="[
                    'w-8 h-8 rounded-full transition-all',
                    selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                  ]"
                  :style="{ backgroundColor: color }"
                ></button>
              </div>
            </div>

            <div class="flex gap-4 mt-8">
              <div class="flex items-center border border-[#F9F1E7] rounded-lg">
                <button
                  @click="decrementQuantity"
                  class="px-4 py-3 hover:bg-gray-50 transition"
                >
                  -
                </button>
                <span class="px-6 py-3 border-x border-[#F9F1E7]">{{ quantity }}</span>
                <button
                  @click="incrementQuantity"
                  class="px-4 py-3 hover:bg-gray-50 transition"
                >
                  +
                </button>
              </div>
             <button
  @click="addToCart"
  class="flex-1 bg-white border-2 border-[#F9F1E7] rounded-xl cursor-pointer hover:bg-[#B88E2F] hover:border-0 hover:text-white"
>
  Add To Cart
</button>

              <button
                class="px-6 py-3 border-2 rounded-lg hover:transition cursor-pointer hidden md:block border-[#F9F1E7]  hover:bg-[#B88E2F] hover:border-0 hover:text-white"
              >
                + Compare
              </button>
            </div>
            <div class="mt-10 pt-10 border-t border-gray-200 space-y-3 text-sm">
              <div class="flex">
                <span class="text-gray-500 w-24">SKU</span>
                <span class="text-gray-400 mx-3">:</span>
                <span class="text-gray-700">SS001</span>
              </div>
              <div class="flex">
                <span class="text-gray-500 w-24">Category</span>
                <span class="text-gray-400 mx-3">:</span>
                <span class="text-gray-700">Sofas</span>
              </div>
              <div class="flex">
                <span class="text-gray-500 w-24">Tags</span>
                <span class="text-gray-400 mx-3">:</span>
                <span class="text-gray-700">Sofa, Chair, Home, Shop</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-500 w-24">Share</span>
                <span class="text-gray-400 mx-3">:</span>
                <div class="flex gap-4">
                  <button class="text-gray-700 hover:text-[#B88E2F]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button class="text-gray-700 hover:text-[#B88E2F]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </button>
                  <button class="text-gray-700 hover:text-[#B88E2F]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section class="border-t border-gray-200">
    <div class="max-w-5xl mx-auto px-6 py-12">

      <!-- Tabs -->
      <div class="flex justify-center gap-12 border-b border-gray-200 mb-8">
        <button
          @click="activeTab = 'description'"
          class="pb-4 font-medium transition"
          :class="activeTab === 'description'
            ? 'border-b-2 border-gray-900 text-gray-900'
            : 'text-gray-500 hover:text-gray-900'"
        >
          Description
        </button>

        <button
          @click="activeTab = 'additional'"
          class="pb-4 transition"
          :class="activeTab === 'additional'
            ? 'border-b-2 border-gray-900 text-gray-900'
            : 'text-gray-500 hover:text-gray-900'"
        >
          Additional Information
        </button>

        <button
          @click="activeTab = 'reviews'"
          class="pb-4 transition"
          :class="activeTab === 'reviews'
            ? 'border-b-2 border-gray-900 text-gray-900'
            : 'text-gray-500 hover:text-gray-900'"
        >
          Reviews [{{ reviews.length }}]
        </button>
      </div>

      <div v-if="activeTab === 'description'" class="text-gray-600 space-y-6 text-justify">
        <p v-for="(t, i) in descriptionText" :key="i">{{ t }}</p>

        <div class="grid grid-cols-2 gap-6 mt-8">
          <div class="bg-[#F9F1E7] rounded-lg overflow-hidden">
            <img :src="product.img" alt="Detail 1" class="w-full h-80 object-cover" />
          </div>
          <div class="bg-[#F9F1E7] rounded-lg overflow-hidden">
            <img :src="product.img" alt="Detail 2" class="w-full h-80 object-cover" />
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'additional'" class="text-gray-700 space-y-4">
        <div class="grid grid-cols-2 gap-x-1">
          <p class="font-semibold">Weight:</p>
          <p>{{ additionalInfo.weight }}</p>

          <p class="font-semibold">Dimensions:</p>
          <p>{{ additionalInfo.dimensions }}</p>

          <p class="font-semibold">Material:</p>
          <p>{{ additionalInfo.material }}</p>

        </div>
      </div>

      <!-- REVIEWS -->
<div v-if="activeTab === 'reviews'" class="space-y-6">
  <div
    v-for="(r, i) in reviews"
    :key="i"
    class="p-5 rounded-xl bg-gray-100/70 shadow-sm flex gap-4 items-start"
  >
    <!-- Avatar -->
    <img
      :src="`https://api.dicebear.com/8.x/avataaars/svg?seed=${r.name}`"
      alt="avatar"
      class="w-12 h-12 rounded-full shadow-md"
    />

    <div class="flex-1">
      <p class="font-semibold text-lg flex items-center gap-2">
        {{ r.name }}
        <span class="text-yellow-500 text-sm">{{ r.rating }}</span>
      </p>

      <p class="text-gray-600 mt-2 leading-relaxed">
        {{ r.text }}
      </p>
    </div>
  </div>
</div>


    </div>
  </section>

      <section class="py-16 border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-3xl font-semibold text-center mb-12">Related Products</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink
              v-for="item in relatedProducts"
              :key="item.slug"
              :to="`/shop/${item.slug}`"
              class="group"
            >
              <div class="relative bg-[#F4F5F7] rounded-lg overflow-hidden">
                <div
                  v-if="item.discount"
                  class="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10"
                >
                  -{{ item.discount }}%
                </div>
                <div
                  v-if="item.tag"
                  class="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10 capitalize"
                >
                  {{ item.tag }}
                </div>

                <div class="aspect-square overflow-hidden">
                  <img
                    :src="item.img"
                    :alt="item.title"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div class="p-4 bg-white">
                  <h3 class="font-semibold text-lg text-gray-900">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500 mt-1">{{ item.description }}</p>
                  <div class="flex items-center gap-3 mt-3">
                    <span class="font-semibold text-gray-900">Rp {{ item.price }}</span>
                    <span v-if="item.oldPrice" class="text-sm text-gray-400 line-through">
                      Rp {{ item.oldPrice }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div class="text-center mt-12">
            <NuxtLink
              to="/shop"
              class="inline-block border-2 border-[#B88E2F] text-[#B88E2F] px-12 py-3 rounded hover:bg-[#B88E2F] hover:text-white transition font-medium"
            >
              Show More
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>