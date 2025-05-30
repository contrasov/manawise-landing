<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <Header/>
        <main>
            <slot/>
        </main>
        <Footer/>
    </div>
</template>