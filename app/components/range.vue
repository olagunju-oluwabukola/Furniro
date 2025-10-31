<template>
    <div class="text-center my-10 md:my-16">
         <h2 class="capitalize text-xl md:text-4xl font-bold">Browse the range</h2>
         <p class="text-sm md:text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

</template>

<script setup>
import dining from "~/assets/images/dining.png"
import living from "~/assets/images/living.png"
import bedroom from "~/assets/images/bedroom.png"
const range = [
    {img: dining, label: "Dining" },
    {img: living, label:"Living"},
    {img: bedroom, label: "Bedroom"}
]
</script>