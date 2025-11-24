<template>
  <Transition name="slide">
    <div
      v-if="wishlistStore.isOpen"
      class="fixed inset-0 z-50 overflow-hidden"
      @click.self="wishlistStore.toggleWishlist()"
    >

      <div class="absolute inset-0 bg-black/50 transition-opacity"></div>

      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">

        <div class="border-b px-6 py-4 flex items-center justify-between bg-[#B88E2F] text-white">
          <div class="flex items-center gap-2">
            <Heart class="w-5 h-5" />
            <h2 class="text-xl font-semibold">My Wishlist</h2>
          </div>
          <button
            @click="wishlistStore.toggleWishlist()"
            class="hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <div v-if="wishlistStore.itemCount > 0" class="px-6 py-3 bg-gray-50 border-b">
          <p class="text-sm text-gray-600">
            {{ wishlistStore.itemCount }} {{ wishlistStore.itemCount === 1 ? 'item' : 'items' }} in your wishlist
          </p>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4">

          <div v-if="wishlistStore.itemCount === 0" class="flex flex-col items-center justify-center h-full text-center py-12">
            <div class="bg-gray-100 rounded-full p-6 mb-4">
              <Heart class="w-16 h-16 text-gray-300" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
            <p class="text-gray-500 mb-6">Save your favorite items here</p>
            <button
              @click="wishlistStore.toggleWishlist()"
              class="bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#9a7728] transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          <div v-else class="space-y-4">
            <TransitionGroup name="list">
              <div
                v-for="item in wishlistStore.items"
                :key="item.slug"
                class="flex gap-4 border-b pb-4 last:border-b-0"
              >

                <div class="relative flex-shrink-0">
                  <NuxtLink :to="`/shop/${item.slug}`" @click="wishlistStore.toggleWishlist()">
                    <img
                      :src="item.img"
                      :alt="item.title"
                      class="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
                    />
                  </NuxtLink>

                  <div v-if="item.discount" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    -{{ item.discount }}%
                  </div>
                </div>


                <div class="flex-1 flex flex-col">
                  <NuxtLink :to="`/shop/${item.slug}`" @click="wishlistStore.toggleWishlist()">
                    <h3 class="font-semibold text-gray-800 hover:text-[#B88E2F] transition-colors line-clamp-2">
                      {{ item.title }}
                    </h3>
                  </NuxtLink>

                  <p class="text-xs text-gray-500 mt-1 line-clamp-1">{{ item.description }}</p>


                  <div class="flex items-center gap-2 mt-2">
                    <span class="font-bold text-[#B88E2F]">NGN {{ item.price }}</span>
                    <span v-if="item.oldPrice" class="text-xs line-through text-gray-400">
                      NGN {{ item.oldPrice }}
                    </span>
                  </div>


                  <div class="flex gap-2 mt-3">
                    <button
                      @click="handleAddToCart(item)"
                      class="flex-1 text-xs bg-[#B88E2F] text-white px-3 py-2 rounded hover:bg-[#9a7728] transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                    <button
                      @click="handleRemove(item.slug)"
                      class="text-xs text-red-500 hover:text-red-700 transition-colors px-2 flex items-center gap-1"
                      title="Remove from wishlist"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <div v-if="wishlistStore.itemCount > 0" class="border-t px-6 py-4 space-y-3 bg-gray-50">
          <button
            @click="handleAddAllToCart"
            class="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#9a7728] transition-colors font-semibold"
          >
            Add All to Cart
          </button>
          <button
            @click="handleClearWishlist"
            class="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { X, Heart, Trash2 } from 'lucide-vue-next'
import { useWishlistStore } from '~/stores/wishlist'
import { useCartStore } from '~/stores/cart'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

const handleAddToCart = (item) => {
  cartStore.addItem(item)
  wishlistStore.removeFromWishlist(item.slug)
}

const handleRemove = (slug) => {
  wishlistStore.removeFromWishlist(slug)
}

const handleAddAllToCart = () => {
  wishlistStore.items.forEach(item => {
    cartStore.addItem(item)
  })
  wishlistStore.clearWishlist()
}

const handleClearWishlist = () => {
  if (confirm('Are you sure you want to clear your wishlist?')) {
    wishlistStore.clearWishlist()
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from .absolute.right-0,
.slide-leave-to .absolute.right-0 {
  transform: translateX(100%);
}

.slide-enter-from .absolute.inset-0.bg-black\/50,
.slide-leave-to .absolute.inset-0.bg-black\/50 {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.3s ease;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>