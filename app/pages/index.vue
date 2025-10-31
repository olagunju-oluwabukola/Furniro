<template>
    <div>
    <home-hero/>

    <div class="max-w-7xl mx-auto">
        <Range/>
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