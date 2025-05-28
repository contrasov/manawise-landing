<script setup lang="ts">
</script>

<template>
    <section class="section-about">
        <img id="tv-manawise" src="../assets/tvMockupManawise.svg" alt="Manawise TV">
        <div class="about">
            <h1 id="h1-about">Sobre</h1>
            <p id="desc-about">
                Lorem ipsum dolor sit amet. Et rerum dolor cum aperiam cupiditate ut eligendi recusandae est repellat
                quos! Aut tempora maxime nam sequi reiciendis et necessitatibus nemo At necessitatibus neque.
                Aut nisi quos est officiis omnis vel veniam molestiae. Sed rerum expedita sed unde provident 33 error
                minus aut nesciunt quos et provident laboriosam.
                Ut impedit veritatis qui molestiae sint qui quisquam voluptates et temporibus minus sit maiores facere
                est odit ullam quo molestias laborum.
            </p>
        </div>
    </section>
</template>

<style>
#h1-about {
    color: #E0FE08;
    font-size: 64px;
    width: fit-content;
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    gap: 32px;
}

#desc-about {
    max-width: 820px;
}

.section-about {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 32px;
    width: fit-content;
}

@media (max-width: 480px) {
    #tv-manawise {
        display: none;
    }
}
</style>