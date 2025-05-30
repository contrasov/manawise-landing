<script setup lang="ts">
import SectionAbout from '../components/SectionAbout.vue';
import SectionBanner from '../components/SectionBanner.vue'
import SectionShop from '../components/SectionShop.vue';
import SectionSquad from '../components/SectionSquad.vue';
import SectionTimer from '../components/SectionTimer.vue';
</script>

<template>
    <SectionBanner />
    <SectionTimer />
    <div class="flex flex-col gap-[117px] justify-center items-center py-20 mx-[10%] max-sm:mx-[5%]">
        <SectionAbout />
        <SectionSquad id="ml" />
        <SectionShop />
    </div>
</template>