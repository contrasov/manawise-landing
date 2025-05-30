<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const images = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    url: new URL(`../assets/images/product${index + 1}.png`, import.meta.url).href,
}))

const config = {
    itemsToShow: 3,
    gap: 5,
    wrapAround: true,
}
</script>

<template>
    <section class="section-normal">
        <div class="section-title">
            <h1>Pré-venda a caminho!</h1>
        </div>
        <p>Alguns de nossos produtos estarão a venda em breve!</p>
        <Carousel v-bind="config">
            <Slide v-for="image in images" :key="image.id">
                <img class="h-full rounded-[8px] object-cover" :src="image.url" alt="image" loading="lazy" />
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>