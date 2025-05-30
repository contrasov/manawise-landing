// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Certifique-se de que o caminho está correto
import About from '../pages/About.vue';

const routes = [
    {
        path: '/Alvaro/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Alvaro/Sobre',
        name: 'About',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;