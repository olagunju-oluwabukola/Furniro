<template>
    <div>
    <home-hero/>

    <div class="max-w-7xl mx-auto">
        <Range/>
        <home-products/>

    </div>
    <div class="mt-10 md:mt-16">
        <HomeRoomInspiration/>
    </div>
    </div>
</template>

<script setup>
import Range from '~/components/range.vue';


definePageMeta({
layout: "default",
title: "Home Page"
}),

useSeoMeta({
    title: "Home - Furniro"
})
</script>