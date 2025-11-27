<script setup>
import heroOverlay from '../heroOverlay.vue';
import img from "~/assets/images/herobg.png"
</script>
<template>
    <heroOverlay
    :image=img
    title="Checkout"
    :breadcrumbs="[
        {label:'Home', link:'/'},
        {label:'Checkout'}
    ]"
    />

</template>
