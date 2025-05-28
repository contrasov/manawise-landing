<script setup lang="ts">
</script>

<template>
    <section class="section-normal">
        <div class="sec-title">
            <h1 class="h1-sec">Manawise Squad</h1>
        </div>
        <p>Apresentamos nosso time de nerdolas.</p>
    </section>    
</template>

<style>

.section-normal {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 1161px;
    text-align: left;
}

.sec-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 480px) {
    .section-normal {
        width: 357px;
    }

    .sec-title > h1 {
        font-size: 32px;
    }
}

/* @media (min-width: 380px) {
    .section-normal {
        width: 357px;
        margin: 0 -10px 0 0;
    }

    .sec-title > h1 {
        font-size: 32px;
    }
} */
</style>