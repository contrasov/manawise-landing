<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
    <section id="mg-test">
        <Header/>
        <div class="title">
            <h1 id="h1-banner">O único podcast que te dá <span>+4</span> em sabedoria</h1>
            <h2 id="h2-banner">Podcast <span>todas as quartas</span> às 08:00!</h2>
        </div>
    </section>
</template>

<style>
#mg-test {
    padding: 2vh;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 22vh 0 36vh 0;
}

#h1-banner {
    font-size: 64px;
    max-width: 75%;
    font-weight: black;
}

#h2-banner {
    font-size: 18px;
}

span {
    color: #E0FE08;
}



@media (max-width: 480px) {
    #h1-banner {
        font-size: 32px;
    }

    #h2-banner {
        font-size: 16px;
    }

    .title {
        padding: 20vh 0 20vh 0;
    }

}
</style>