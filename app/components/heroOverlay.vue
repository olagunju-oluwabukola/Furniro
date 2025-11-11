<template>
    <div class="relative w-full h-[50vh] flex items-center justify-center text-white">
        <div class="absolute inset-0 bg-cover bg-center"
        :style="{backgroundImage:` url(${image})`}"></div>
        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative z-10 text-center">
            <h1 class="text-xl md:text-3xl font-semibold mb-4">{{ title }}</h1>
            <nav class="text-sm md:text-base flex justify-center items-center gap-2 font-semibold">
                <template v-for="(crumb, index) in breadcrumbs" :key="index">
                    <a :href="crumb.link"
                     v-if="crumb.link"
                     class="" > {{ crumb.label }}</a>

                     <span v-else="">{{ crumb.label }}</span>

                     <span v-if="index < breadcrumbs.length - 1"> <ChevronRight/> </span>

                </template>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next';
defineProps({
  image: String,
  title: String,
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
</script>