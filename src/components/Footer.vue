<script setup lang="ts">

</script>

<template>
    <footer class="flex flex-col">
        <div class="bg-purpleMana flex flex-row max-sm:flex-col items-center justify-between max-sm:gap-10 px-5 py-10">
            <img id="logo-footer" src="../assets/logo1.svg" alt="Logo Footer">

            <ul class="flex flex-row max-sm:flex-col gap-6 text-sm items-center">
                <router-link to="/Alvaro/" class="hover-items">ÍNICIO</router-link>
                <router-link to="/Alvaro/Sobre" class="hover-items">SOBRE</router-link>
                <!-- <li class="hover-items">EVENTOS</li> -->
                <li class="hover-items">PRODUTOS</li>
                <button class="btn-y">Em breve</button>
            </ul>

            <div class="flex flex-col gap-3 max-sm:gap-5">
                <div class="flex flex-row justify-end gap-3 w-full items-center">
                    <a href="https://www.instagram.com/manawise_/" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/instagram.svg" alt="Instagram Manawise">
                    </a>
                    <a href="https://x.com/manawise_" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/twitter.svg" alt="Instagram Manawise">
                    </a>
<!--                     <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/discord.svg" alt="Instagram Manawise">
                    </a> -->
<!--                     <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/twitch.svg" alt="Instagram Manawise">
                    </a> -->
                    <a href="https://open.spotify.com/show/5oOy4DGPUv12RryslpKsLL?go=1&sp_cid=5bc747039e5c4ea5d2cbb067a4b37653&nd=1&dlsi=fabcdd5ccec148ce" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/spotify.svg" alt="Instagram Manawise">
                    </a>
                </div>
                <span class="text-right"> <!-- não aqui por causa do span do banner, na irei mudar :) -->
                    <p class="text-white">CONTATO@MANAWISE.COM.BR</p>
                    <p class="text-white mt-2">(85)99259-5161</p>
                </span>
            </div>
        </div>

        <div class="footer-terms">
            <p>Todos os direitos reservados Manawise</p>
<!--             <div class="flex flex-row gap-2">
                <p class="terms">Política de Privacidade</p>
                <p class="terms">Termos de Serviço</p>
                <p class="terms">Código de Conduta</p>
            </div> -->
        </div>
    </footer>
</template>