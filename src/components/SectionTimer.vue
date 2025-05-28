<script setup lang="ts">
</script>

<template>
    <section id="sec-timer">
        <h1 id="timer">00 : 00 : 00 : 00</h1>

        <div id="timer-text">
            <h2>Contagem regressiva!</h2>
            <p>O programa estará disponível no Spotify às 08:00!</p>
        </div>

        <button id="podcast-btn">Manawise Podcast</button>
    </section>
</template>

<style>

#timer {
    font-size: 48px;
}

#sec-timer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 45px;
    padding: 26px;
    background-color: #E0FE08;
    color: #000000;
}

#timer-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;
}

#timer-text > h2 {
    font-size: 23px;
}

#podcast-btn {
    background-color: #090F20;
    color: #E0FE08;
}

#podcast-btn:hover {
    background-color: #132647;
    cursor: pointer;
}

@media (max-width: 480px) {
    #sec-timer {
        flex-direction: column;
    }

    #timer {
        font-size: 32px;
    }

    #timer-text {
        text-align: center;
    }
}
</style>