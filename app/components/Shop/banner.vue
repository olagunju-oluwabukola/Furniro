<template>
     <section class="bg-[#FFF3E3]  flex justify-between py-6  mt-10">
     <div v-for="list in banner" :key="list.title" class="flex justify-center items-center gap-2 md:gap-4">
        <div>
        <component :is="list.Icon" />
        </div>
        <div>
            <div class="font-bold capitalize text-xs md:text-lg">{{ list.title }}</div>
        <div class="text-[10px] md:text-sm">{{ list.subTitle }}</div>
        </div>
    </div>
     </section>

</template>

<script setup>
import { icons, TrophyIcon, CircleCheck, TruckElectric, HandFist} from 'lucide-vue-next';

const banner = [
    {
        title: "High quality",
        subTitle: "crafted from top materials",
        Icon:TrophyIcon
    },
    {
        title:"wrranty protection",
        subTitle:"over 2 years",
        Icon: CircleCheck
    },
    {
        title: "free shipping",
        subTitle:"order over 150k product",
        Icon: TruckElectric
    },
    {
        title:"24/7 support",
        subTitle: "dedicated support",
        Icon: HandFist
    }
]

</script>