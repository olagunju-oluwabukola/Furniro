<template>
   <nav class="w-full bg-white shadow-sm py-5 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
<NuxtLink to="/">
 <div class="flex items-center gap-2">
      <img :src="logo" alt="logo" class="h-8 w-8 object-contain" />
      <h3 class="font-bold text-xl text-gray-800 tracking-wide">Furniro</h3>
    </div>
</NuxtLink>


    <div class="hidden md:flex items-center gap-8">
      <nuxt-link
        v-for="item in navItems"
        :key="item.title"
        :to="item.to"
        class="inline-flex  hover:text-[#B88E2F] font-medium transition-all duration-300 text-[16px]"
        active-class="text-[#B88E2F]"
      >
        {{ item.title }}
      </nuxt-link>
    </div>

    <div class="hidden md:flex gap-8">
      <nuxt-link
        v-for="i in navIcons"
        :key="i.icon"
        :to="i.to"
        @click.prevent="i.action ? i.action() : null"
        class="text-black hover:text-[#B88E2F] transition-colors duration-500 relative"
        active-class="text-[#B88E2F]"
      >
        <component :is="i.icon" class="w-4 h-5 stroke-current"/>
        <!-- Cart badge -->
        <span v-if="i.badge && cartStore.itemCount > 0"
              class="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
          {{ cartStore.itemCount }}
        </span>
      </nuxt-link>
    </div>

    <div class="md:hidden">
      <button @click="toggleMobile">
        <component :is="isMobileOpen ? X : Menu" class="w-4 h-4"/>
      </button>

      <div
        v-if="isMobileOpen"
        class="md:hidden fixed right-0 h-full w-1/2 bg-white shadow-lg py-6 flex flex-col gap-4 rounded overflow-hidden
               transform transition-transform duration-300 ease-in-out"
        :class="isMobileOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <nuxt-link
          v-for="navs in mobileNav"
          :key="navs.title"
          :to="navs.to"
          @click="navs.action ? navs.action() : closeMobile()"
          class="flex gap-2 items-center justify-center"
        >
          <component :is="navs.icon" class="w-4 h-4"/>
          <span class="w-24 truncate font-medium">{{ navs.title }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</nav>

<!-- Cart Sidebar Component -->
<CartSidebar />
</template>

<script setup>
import logo from "../../public/images/logo.svg"
import { User2Icon, Heart, Search, ShoppingCart, HomeIcon, ShoppingBagIcon, InfoIcon, PhoneIcon, Menu, X } from "lucide-vue-next"
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const navItems = [
  { title: "Home", to: '/' },
  { title: "Shop", to: '/shop' },
  { title: "Blog", to: '/blog' },
  { title: "Contact", to: '/contact' },
]

const navIcons = [
  { icon: User2Icon, to: '/' },
  { icon: Heart, to: '/' },
  { icon: Search, to: '/' },
  {
    icon: ShoppingCart,
    to: "#",
    badge: true,
    action: () => cartStore.toggleCart()
  }
]

const mobileNav = [
  { title: "Home", to: "/", icon: HomeIcon },
  { title: "Shop", to: "/shop", icon: ShoppingBagIcon },
  { title: "Blog", to: "/blog", icon: InfoIcon },
  { title: "Profile", to: "/", icon: User2Icon },
  {
    title: "Cart",
    to: "/cart",
    icon: ShoppingCart,
    action: () => {
      closeMobile()
      cartStore.toggleCart()
    }
  },
  { title: "Search", to: "/", icon: Search },
  { title: "Contact", to: "/contact", icon: PhoneIcon },
  { title: "Favorites", to: "/", icon: Heart },
]

const isMobileOpen = ref(false)
const closeMobile = () => isMobileOpen.value = false
const toggleMobile = () => isMobileOpen.value = !isMobileOpen.value
</script>