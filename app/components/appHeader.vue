<template>
   <nav class="w-full bg-white shadow-sm py-5 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">

    <div class="flex items-center gap-2">
      <img :src="logo" alt="logo" class="h-8 w-8 object-contain" />
      <h3 class="font-bold text-xl text-gray-800 tracking-wide">Furniro</h3>
    </div>


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
    :to=i.to
    class=" text-black hover:text-[#B88E2F] transition-colors duration-500"
    active-class="text-[#B88E2F]"
    >
    <component :is="i.icon" class=" w-4 h-5 stroke-current"/>
    </nuxt-link>
    </div>

    <div class="md:hidden">
      <button @click="toggleMobile">
        <component :is="isMobileOpen ? X : Menu" class="w-4 h-4"/>
      </button>

      <!-- mobileNav -->


<div
  v-if="isMobileOpen"
  class="md:hidden fixed  right-0 h-full w-1/2 bg-white shadow-lg py-6 flex flex-col gap-4 rounded overflow-hidden
         transform transition-transform duration-300 ease-in-out"
  :class="isMobileOpen ? 'translate-x-0' : 'translate-x-full'"
>
  <nuxt-link
    v-for="navs in mobileNav"
    :key="navs.title"
    :to="navs.to"
    @click="closeMobile"
    class="flex gap-2 items-center justify-center"
  >
    <component :is="navs.icon" class="w-4 h-4"/>
    <span class="w-24 truncate font-medium">{{ navs.title }}</span>
  </nuxt-link>
</div>

</div>
</div>
</nav>



</template>

<script setup>
import logo from "../../public/images/logo.svg"
import { User2Icon, Heart, Search,ShoppingCart,HomeIcon, ShoppingBagIcon,InfoIcon,PhoneIcon,Menu,X} from "lucide-vue-next"
const navItems= [
    {  title: "Home", to:'/'},
    {  title: "Shop", to:'/shop'},
     {  title: "About", to:'/about'},
      {  title: "Contact", to:'/contact'},
]

const navIcons = [
    {icon:User2Icon, to:'/' },
    {icon:Heart, to:'/'},
    {icon:Search, to:'/'},
    {icon:ShoppingCart, to:"/"}
]
const mobileNav = [
  { title: "Home", to: "/", icon: HomeIcon },
  { title: "Shop", to: "/shop", icon: ShoppingBagIcon },
  { title: "About", to: "/about", icon: InfoIcon },
   { title: "Profile", to: "/", icon: User2Icon },
     { title: "Cart", to: "/", icon: ShoppingCart },
     { title: "Search", to: "/", icon: Search },
  { title: "Contact", to: "/contact", icon: PhoneIcon },
  { title: "Favorites", to: "/", icon: Heart },


]

const isMobileOpen = ref(false)
const openMobile = () => isMobileOpen.value = true
const closeMobile = () => isMobileOpen.value = false
const toggleMobile = () => isMobileOpen.value = !isMobileOpen.value
</script>

