<script setup lang="ts">

</script>

<template>
    <header>
        <img id="logo-header" src="../assets/logo1.svg" alt="Manawise Logo">
        <div class="items">
            <ul id="items-list" >
                <li>Ínicio</li>
                <li>Sobre</li>
                <li>Eventos</li>
                <li>Produtos</li>
                <li>Podcast</li>
            </ul>
            <button id="none-function">Em Breve</button>
        </div>
        <p id="menu-burguer">Menu</p>

    </header>
</template>

<style>

#menu-burguer {
    display: none;
}

.items {
    display: flex;
    flex-direction: row;
    gap: 24px;
    list-style-type: none;
    align-items: center;
}

#items-list {
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-weight: 700;
}

li {
    padding: 4px 0 4px 0 ;
    position: relative;
}

li:hover {
    border-bottom: solid 3px #E0FE08;
    cursor: pointer;
    margin-bottom: -2px;
}

#none-function {
    cursor: not-allowed;
}

#logo-header {
    margin-left: -2vh;
}

@media (max-width: 480px) {

    header > .items {
        display: none;
    }

    #menu-burguer {
        display: block;
    }
}
</style>