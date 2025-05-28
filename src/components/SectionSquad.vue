<script setup lang="ts">
</script>

<template>
    <section class="sec-h">
        <div class="sec-title">
            <h1 class="h1-sec">Manawise Squad</h1>
        </div>
        <p>Apresentamos nosso time de nerdolas.</p>
    </section>    
</template>

<style>

.sec-h {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
}

.sec-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1161px;
}

@media (max-width: 480px) {
    .sec-title {
        width: 400px;
    }
}
</style>