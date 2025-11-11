<script setup>
import heroOverlay from '../heroOverlay.vue';
import img from "~/assets/images/herobg.png"
</script>


<template>
    <heroOverlay
    :image=img
    title="shop"
    :breadcrumbs="[
        {label:'Home', link:'/'},
        {label:'shop'}

    ]"
    />

</template>
