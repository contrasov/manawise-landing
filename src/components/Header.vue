<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const route = useRoute();

const isRoute = (path: string) => {
    return route.path == path;
};
</script>

<template>
    <header class="p-5">
        <router-link to="/Alvaro/">
            <img src="../assets/logo1.svg" alt="Manawise Logo">
        </router-link>
        <div class="flex flex-row items-center gap-5 max-sm:hidden">
            <ul class="flex flex-row items-center gap-4 font-medium">
                <router-link to="/Alvaro/" class="hover-items"
                    :class="{ 'border-b-3 border-[#E0FE08] mb-[-2px]': isRoute('/Alvaro/') }">Ínicio</router-link>
                <router-link to="/Alvaro/Sobre" class="hover-items"
                    :class="{ 'border-b-3 border-[#E0FE08] mb-[-2px]': isRoute('/Alvaro/Sobre') }">Sobre</router-link>

                <!-- <li class="hover-items">Eventos</li> -->
                <li class="hover-items">Produtos</li>
                <a href="https://open.spotify.com/show/5oOy4DGPUv12RryslpKsLL?go=1&sp_cid=5bc747039e5c4ea5d2cbb067a4b37653&nd=1&dlsi=fabcdd5ccec148ce"
                    target="_blank" rel="noopener noreferrer" class="hover-items flex flex-row items-center gap-2">
                    <p>Podcast</p>
                    <ExternalLink class="h-4 w-4" />
                </a>
            </ul>
            <button class="cursor-not-allowed btn-y">Em Breve</button>
        </div>
        <p class="hidden max-sm:block">Menu</p>

    </header>
</template>