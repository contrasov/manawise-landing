<script setup lang="ts">
import { ExternalLink, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const isFixed = ref(false);
const isMenuOpen = ref(false);

const isRoute = (path: string) => {
    return route.path == path;
};

const handleScroll = () => {
    isFixed.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
    <header
        :class="['p-4 transition-all duration-300', isFixed ? 'py-2 fixed top-0 left-0 right-0 bg-darkMana shadow-lg z-50' : '']">
        <router-link to="/Alvaro/">
            <img :class="['transition-all duration-300', isFixed ? 'h-[40px]' : '']" src="../assets/logo1.svg"
                alt="Manawise Logo">
        </router-link>
        <div class="flex flex-row items-center gap-5 max-sm:hidden">
            <ul class="flex flex-row items-center gap-4 font-medium">
                <router-link to="/Alvaro/" class="hover-items"
                    :class="{ 'border-b-3 border-[#E0FE08] mb-[-2px]': isRoute('/Alvaro/') }">Ínicio</router-link>
                <router-link to="/Alvaro/Sobre" class="hover-items"
                    :class="{ 'border-b-3 border-[#E0FE08] mb-[-2px]': isRoute('/Alvaro/Sobre') }">Sobre</router-link>
                <a href="#products" class="hover-items">Produtos</a>
                <a href="https://open.spotify.com/show/5oOy4DGPUv12RryslpKsLL?go=1&sp_cid=5bc747039e5c4ea5d2cbb067a4b37653&nd=1&dlsi=fabcdd5ccec148ce"
                    target="_blank" rel="noopener noreferrer" class="hover-items flex flex-row items-center gap-2">
                    <p>Podcast</p>
                    <ExternalLink class="h-4 w-4" />
                </a>
            </ul>
            <button class="cursor-not-allowed btn-y">Em Breve</button>
        </div>
        <Menu @click="openMenu()" class="hidden max-sm:block" />

        <div v-show="true"
            class="text-2xl fixed top-0 right-0 w-full h-full bg-darkMana transition-all duration-300 ease-in-out transform"
            :class="isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'">
            <button @click="openMenu" class="absolute top-4 right-4 text-white">
                <X />
            </button>
            <ul class="flex flex-col items-center mt-18">
                <router-link to="/Alvaro/" class="hover-items" @click="openMenu">Ínicio</router-link>
                <router-link to="/Alvaro/Sobre" class="hover-items" @click="openMenu">Sobre</router-link>
                <a href="#products" class="hover-items" @click="openMenu">Produtos</a>
                <a href="https://open.spotify.com/show/5oOy4DGPUv12RryslpKsLL?go=1&sp_cid=5bc747039e5c4ea5d2cbb067a4b37653&nd=1&dlsi=fabcdd5ccec148ce"
                    target="_blank" rel="noopener noreferrer" class="hover-items" @click="openMenu">Podcast</a>
            </ul>
        </div>
    </header>
</template>