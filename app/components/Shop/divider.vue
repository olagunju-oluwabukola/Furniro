<script setup>

import { SlidersHorizontal, LayoutGrid, TvMinimal } from 'lucide-vue-next'

const props = defineProps({
  productsCount: Number,
  showCount: Number,
  sortBy: String,
  layout: String
})

const emit = defineEmits(['update:showCount', 'update:sortBy', 'update:layout'])
const updateShowCount = (event) => {
  const val = parseInt(event.target.value) || 1
  emit('update:showCount', val)
}

const updateSortBy = (event) => {
  emit('update:sortBy', event.target.value)
}
const toggleLayout = (val) => {
  emit('update:layout', val)
}
</script>

<template>
  <section class="bg-[#FFF3E3]">
    <div class="flex justify-between items-center max-w-7xl mx-auto py-5">

      <div class="hidden md:flex items-center gap-6">
        <div class="flex items-center gap-2 font-semibold cursor-pointer">
          <SlidersHorizontal class="w-4 h-4"/> Filter
        </div>
        <div @click="toggleLayout('grid')" class="cursor-pointer"><LayoutGrid class="w-4 h-4 font-bold" /></div>
        <div @click="toggleLayout('list')" class="cursor-pointer"><TvMinimal class="w-4 h-4 font-bold" /></div>
        <div class="border h-8 font-thin"></div>
        <div class="font-thin">showing {{ showCount }} of {{ productsCount }}</div>
      </div>
      <div class="flex items-center gap-6 px-10 md:px-0">
        <div>
          <span class="mr-2 font-semibold">show</span>
          <input
            type="number"
            min="1"
            :max="productsCount"
            :value="showCount"
            @input="updateShowCount"
            class="bg-white outline-none w-16"
          >
        </div>

        <div class=" text-sm">
          <span class="mr-2 font-semibold">sort by</span>
          <select
            :value="sortBy"
            @change="updateSortBy"
            class="bg-white outline-none text-sm text-center h-10 w-24"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>