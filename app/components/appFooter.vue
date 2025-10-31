<template>
  <footer class=" mt-20">
    <!-- Divider -->
    <div class="my-10 md:my-20">
      <hr class="border-gray-300"/>
    </div>

    <!-- Footer content -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">

      <!-- Logo & Address -->
      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Furniro</h2>
        <div class="text-sm md:text-base text-gray-500 space-y-1">
          <p>20b, Adebodun Williams,</p>
          <p>Lagos State</p>
          <p>Nigeria</p>
        </div>
      </div>

      <!-- Links -->
      <div>
        <p class="text-gray-400 mb-4  tracking-wider font-semibold ">Links</p>
        <div class="flex flex-col gap-2">
          <nuxt-link
            v-for="link in links"
            :key="link.title"
            :to="link.to"
            class="py-2 px-2 hover:text-[#B88E2F] hover:font-semibold transition-all duration-200 rounded "
          >
       <span class="text-xs md:text-sm">     {{ link.title }}</span>
          </nuxt-link>
        </div>
      </div>

      <!-- Help -->
      <div>
        <p class="text-gray-400 mb-4  tracking-wider font-semibold">Help</p>
        <div class="flex flex-col gap-2">
          <div
            v-for="item in help"
            :key="item.title"
            class="py-2 px-2 hover:text-[#B88E2F] hover:font-semibold transition-all duration-200 rounded"
          >
            <span class="text-xs md:text-sm">  {{ item.title }} </span>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div>
        <p class="text-gray-400 mb-4 tracking-wider font-semibold">Newsletter</p>
        <div class="flex flex-col md:flex-row gap-2 items-center">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            class="outline-none border-b border-gray-300 py-2 px-2 w-full md:w-auto focus:border-[#B88E2F] transition-colors duration-200 text-xs"
          >
          <button class=" text-xs md:text-sm py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>

    </div>

     <div class="my-10 md:my-20">
      <hr class="border-gray-300"/>
    </div>
    <div class="max-w-7xl mx-auto px-4 md:px-8 mt-12 pb-8 text-sm text-gray-400 t">
      &copy; 2025 Oluwabukola💛.
    </div>
  </footer>
</template>



<script setup>
const links = [
  {title: 'Home', to: "/" },
  {title: 'Shop', to:'/shop'},
  {title: 'About', to: '/about'},
  {title: 'Contact', to:'/contact'}
]

const help = [
  {title: 'Payment Options'},
  {title: 'Returns'},
  {title: 'Privacy Policy'}
]
</script>