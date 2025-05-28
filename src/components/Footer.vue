<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="footer-items">
            <img id="logo-footer" src="../assets/logo1.svg" alt="Logo Footer">

            <ul class="footer-list">
                <li>ÍNICIO</li>
                <li>SOBRE</li>
                <li>EVENTOS</li>
                <li>PRODUTOS</li>
                <button>Em breve</button>
            </ul>

            <div class="social">
                <div id="social-items">
                    <a href="https://www.instagram.com/manawise_/" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/instagram.svg" alt="Instagram Manawise">
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/twitter.svg" alt="Instagram Manawise">
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/discord.svg" alt="Instagram Manawise">
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/twitch.svg" alt="Instagram Manawise">
                    </a>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="../assets/social/spotify.svg" alt="Instagram Manawise">
                    </a>
                </div>
                <span id="contacts">
                    <p>CONTATO@MANAWISE.COM.BR</p>
                    <p id="mt">(85)99259-5161</p>
                </span>
            </div>
        </div>

        <div class="footer-terms">
            <p>Todos os direitos reservados Manawise</p>
            <div id="terms">
                <p>Política de Privacidade</p>
                <p>Termos de Serviço</p>
                <p>Código de Conduta</p>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    display: flex;
    flex-direction: column;
}

.footer-list {
    display: flex;
    flex-direction: row;
    gap: 46px;
    align-items: center;
    font-size: 14px;
}

.footer-terms {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: #E0FE08;
    color: #090F20;
    font-size: 12px;
}

#terms {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

#terms>p:hover {
    border-bottom: 1px solid black;
    margin-bottom: -2px;
    cursor: pointer;
}

#mt {
    margin-top: 8px;
}

#contacts {
    color: white;
    text-align: end;
}

#contacts>p {
    font-size: 14px;
}

.footer-items {
    background-color: #20113C;
    display: flex;
    flex-direction: row;
    padding: 42px 47px;
    justify-content: space-between;
}

.social {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#social-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#social-items>img:hover {
    color: #E0FE08;
    cursor: pointer;
}

@media (max-width: 480px) {
    .footer-items {
        flex-direction: column;
        gap: 24px;
        padding: 42px 15px;
    }

    .footer-items > img {
        height: 50px;
        width: auto;
    }

    #social-items {
        justify-content: center;
        gap: 24px;
    }

    .footer-list {
        flex-direction: column;
        font-size: 12px;
        gap: 12px;
        margin-left: -30px;
    }

    #contacts {
        text-align: center;
    }

    .footer-terms {
        font-size: 10px;
        padding: 12px 0;
    }
}
</style>