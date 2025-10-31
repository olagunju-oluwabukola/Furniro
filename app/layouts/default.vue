<template>
    <div>
        <appHeader/>
        <div >
            <slot/>
        </div>
        <appFooter/>
    </div>
</template>

<script setup>
import appHeader from '~/components/appHeader.vue';
import appFooter from '~/components/appFooter.vue';
</script>