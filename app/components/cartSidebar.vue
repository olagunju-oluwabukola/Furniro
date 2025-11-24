<script setup>
import { X } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return `NGN. ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
</script>

<template>
  <div>

  <div
  v-if="cartStore.isCartOpen"
  @click="cartStore.closeCart"
  class="fixed inset-0 bg-black/40 transition-opacity duration-300"
></div>

    <div
      :class="[
        'fixed top-0 right-0 h-full w-full md:w-[420px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col',
        cartStore.isCartOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >

      <div class="flex items-center justify-between px-6 py-6 border-b border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-900">Shopping Cart</h2>
        <button
          @click="cartStore.closeCart"
          class="text-gray-400 hover:text-gray-600 transition"
        >
          <X class="w-6 h-6" />
        </button>
      </div>


      <div class="flex-1 overflow-y-auto px-6 py-6">
        <div v-if="cartStore.items.length === 0" class="text-center py-12">
          <p class="text-gray-500">Your cart is empty</p>
        </div>

        <div v-else class="space-y-6">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex gap-4 items-start"
          >

            <div class="w-24 h-24 bg-[#F9F1E7] rounded-lg overflow-hidden flex-shrink-0">
              <img
                :src="item.img"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>


            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-gray-900 truncate">{{ item.title }}</h3>

              <div class="flex items-center gap-3 mt-2">
                <div class="flex items-center gap-2">
                  <button
                    @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                    class="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition text-sm"
                  >
                    -
                  </button>
                  <span class="w-8 text-center text-sm font-medium">{{ item.quantity }}</span>
                  <button
                    @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                    class="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition text-sm"
                  >
                    +
                  </button>
                </div>
                <span class="text-sm text-gray-600">x</span>
                <span class="text-sm font-medium text-[#B88E2F]">
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </div>

            <button
              @click="cartStore.removeItem(item.id)"
              class="text-gray-400 hover:text-red-500 transition flex-shrink-0"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 px-6 py-6 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-gray-900 font-medium">Subtotal</span>
          <span class="text-xl font-semibold text-[#B88E2F]">
            {{ formatPrice(cartStore.subtotal) }}
          </span>
        </div>

        <div class="flex gap-3">

          <NuxtLink
            to="/checkout"
            @click="cartStore.closeCart"
            class="flex-1 text-center border-2 border-gray-900 text-gray-900 py-2 rounded-full hover:bg-gray-900 hover:text-white transition font-medium text-sm"
          >
            Checkout
          </NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>