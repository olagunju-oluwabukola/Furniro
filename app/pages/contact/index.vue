<template>
  <heroOverlay
    :image=img
    title="Blog"
    :breadcrumbs="[
        {label:'Home', link:'/'},
        {label:'Blog'}
    ]"
    />
  <div class="container mx-auto py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">

    <!-- Left Info -->
    <div class="space-y-10">

      <div class="flex gap-4">
        <span class="text-xl">📍</span>
        <div>
          <h4 class="font-semibold">Address</h4>
          <p class="text-gray-600 text-sm">
            236 5th SE Avenue, New<br />
            York NY10000, United States
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <span class="text-xl">📞</span>
        <div>
          <h4 class="font-semibold">Phone</h4>
          <p class="text-gray-600 text-sm">Mobile: (+84) 546-6789</p>
          <p class="text-gray-600 text-sm">Hotline: (+84) 456-6789</p>
        </div>
      </div>

      <div class="flex gap-4">
        <span class="text-xl">⏰</span>
        <div>
          <h4 class="font-semibold">Working Time</h4>
          <p class="text-gray-600 text-sm">Mon-Fri: 9:00 - 22:00</p>
          <p class="text-gray-600 text-sm">Sat-Sun: 9:00 - 21:00</p>
        </div>
      </div>

    </div>

    <!-- Right Form -->
    <form class="space-y-5">
      <div>
        <label>Your name</label>
        <input type="text" class="w-full border rounded px-3 py-2" placeholder="Abc" />
      </div>

      <div>
        <label>Email address</label>
        <input type="email" class="w-full border rounded px-3 py-2" placeholder="Abc@gmail.com" />
      </div>

      <div>
        <label>Subject</label>
        <input type="text" class="w-full border rounded px-3 py-2" placeholder="This is optional" />
      </div>

      <div>
        <label>Message</label>
        <textarea class="w-full border rounded px-3 py-2 h-28" placeholder="Hi! I'd like to ask about…"></textarea>
      </div>

      <button class="bg-yellow-600 text-white px-6 py-2 rounded">
        Submit
      </button>
    </form>
  </div>

</template>

<script setup>
import img from "~/assets/images/herobg.png"
</script>