<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const step = ref(1)

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  address: '',
  city: '',
  province: '',
  zip: '',
  phone: '',
  email: '',
  note: '',
  payment: 'bank'
})

const totalPrice = computed(() => {
  return cartStore.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
})

const goToBilling = () => {
  if (!cartStore.items.length) {
    alert('Your cart is empty')
    return
  }
  step.value = 2
}

const placeOrder = () => {
  if (!form.value.firstName || !form.value.lastName || !form.value.address || !form.value.phone || !form.value.email) {
    alert('Please fill all required fields')
    return
  }
  step.value = 3
  cartStore.clearCart()
}
</script>


<template>
  <section class="max-w-6xl mx-auto px-6 py-12">

    <!-- STEP TITLES -->
    <div class="flex items-center justify-center gap-3 mb-10">
      <div :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition',
        step === 1 ? 'bg-[#B88E2F] text-white' : 'bg-gray-200'
      ]">
        Cart
      </div>

      <div class="h-1 w-10 bg-gray-300"></div>

      <div :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition',
        step === 2 ? 'bg-[#B88E2F] text-white' : 'bg-gray-200'
      ]">
        Billing
      </div>

      <div class="h-1 w-10 bg-gray-300"></div>

      <div :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition',
        step === 3 ? 'bg-[#B88E2F] text-white' : 'bg-gray-200'
      ]">
        Success
      </div>
    </div>


    <!-- STEP 1: CART -->
    <div v-if="step === 1">
      <h1 class="text-3xl font-bold mb-6">Checkout</h1>

      <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-12">
        Your cart is empty
      </div>

      <div v-else class="space-y-6">

        <div
          v-for="item in cartStore.items"
          :key="item.id"
          class="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
        >
          <div class="flex items-center gap-4">
            <img :src="item.img" class="w-16 h-16 object-cover rounded" />
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p class="text-gray-600">Qty: {{ item.quantity }}</p>
            </div>
          </div>

          <p class="font-semibold text-[#B88E2F]">
            Rs. {{ (item.price * item.quantity).toLocaleString('en-IN') }}
          </p>
        </div>

        <div class="flex justify-between items-center font-semibold text-xl pt-4">
          <span>Total</span>
          <span class="text-[#B88E2F]">
            Rs. {{ totalPrice.toLocaleString('en-IN') }}
          </span>
        </div>

        <button
          @click="goToBilling"
          class="w-full bg-[#B88E2F] text-white py-3 rounded-lg font-medium hover:bg-[#A3731F] transition"
        >
          Continue to Billing →
        </button>
      </div>
    </div>


    <!-- STEP 2: BILLING FORM -->
    <div v-if="step === 2" class="grid md:grid-cols-2 gap-10">

      <!-- Left Form -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Billing details</h2>

        <div class="space-y-4">

          <!-- First + Last -->
          <div class="grid grid-cols-2 gap-4">
            <input v-model="form.firstName" placeholder="First Name" class="border p-3 rounded" />
            <input v-model="form.lastName" placeholder="Last Name" class="border p-3 rounded" />
          </div>

          <!-- Company -->
          <input v-model="form.company" placeholder="Company Name (Optional)" class="w-full border p-3 rounded" />

          <!-- Country -->
          <select v-model="form.country" class="w-full border p-3 rounded">
            <option value="">Country / Region</option>
            <option>Sri Lanka</option>
            <option>Nigeria</option>
            <option>Ghana</option>
          </select>

          <!-- Address -->
          <input v-model="form.address" placeholder="Street address" class="w-full border p-3 rounded" />

          <!-- City + Province -->
          <div class="grid grid-cols-2 gap-4">
            <input v-model="form.city" placeholder="Town / City" class="border p-3 rounded" />
            <select v-model="form.province" class="border p-3 rounded">
              <option value="">Province</option>
              <option>Western Province</option>
            </select>
          </div>

          <!-- Zip + Phone -->
          <div class="grid grid-cols-2 gap-4">
            <input v-model="form.zip" placeholder="ZIP Code" class="border p-3 rounded" />
            <input v-model="form.phone" placeholder="Phone" class="border p-3 rounded" />
          </div>

          <!-- Email -->
          <input v-model="form.email" placeholder="Email address" class="w-full border p-3 rounded" />

          <!-- Note -->
          <textarea
            v-model="form.note"
            placeholder="Additional Information"
            class="w-full border p-3 rounded"
          ></textarea>
        </div>
      </div>

      <!-- Right Side (Order Summary + Payment) -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Product</h2>

        <div class="flex justify-between text-gray-600 pb-2 border-b">
          <span>{{ cartStore.items[0]?.title }} x {{ cartStore.items[0]?.quantity }}</span>
          <span>Rs. {{ totalPrice.toLocaleString('en-IN') }}</span>
        </div>

        <div class="flex justify-between font-semibold py-3 border-b">
          <span>Total</span>
          <span class="text-[#B88E2F]">Rs. {{ totalPrice.toLocaleString('en-IN') }}</span>
        </div>

        <div class="space-y-3 text-sm mt-4">
          <label class="flex items-center gap-2">
            <input type="radio" value="bank" v-model="form.payment" />
            Direct Bank Transfer
          </label>

          <label class="flex items-center gap-2">
            <input type="radio" value="cod" v-model="form.payment" />
            Cash on Delivery
          </label>
        </div>

        <button
          @click="placeOrder"
          class="w-full mt-6 bg-[#B88E2F] text-white py-3 rounded-lg font-medium hover:bg-[#A3731F] transition"
        >
          Place order
        </button>
      </div>
    </div>


    <!-- STEP 3: SUCCESS PAGE -->
    <div v-if="step === 3" class="text-center py-20">
      <h2 class="text-3xl font-bold mb-4">Order Successful 🎉</h2>
      <p class="text-gray-600 mb-8">
        Thank you for your purchase! Your order has been placed successfully.
      </p>

      <a href="/" class="inline-block px-6 py-3 bg-[#B88E2F] text-white rounded-lg">
        Go Home
      </a>
    </div>

  </section>
</template>
