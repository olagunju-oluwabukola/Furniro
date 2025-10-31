<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>


<script setup>
import logo from "../public/images/logo.svg"

useHead({
  link: [
    {
      rel: "icon",
      type:"image/svg+xml",
      href:logo
    }
  ]
})
</script>