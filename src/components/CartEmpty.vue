<script setup>

</script>

<template>
    <div class="empty">
        <div class="empty__header">
            <h3>Корзина пустая</h3>
            <img src="/😕.png" alt="">
        </div>
        <div class="empty__hero">
            <p class="empty__hero-text">
                Вероятней всего, вы не заказывали ещё пиццу.<br>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img class="empty__hero-img" src="/empty-cart.png" alt="">
            <router-link to="/home" class="empty__hero-btn">
                Вернуться назад
            </router-link>
        </div>
    </div>
</template>

<style>
.empty {
    padding: 163px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.empty__header {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 0.01em;
        color: var(--black);
    }

    img {
        width: 32px;
        height: 32px;
    }
}

.empty__hero {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.empty__hero-text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    letter-spacing: 0.01em;
    text-align: center;
    color: var(--text-grey);
}

.empty__hero-img {
    max-width: 300px;
    max-height: 255px;
    margin-top: 47px;
}

.empty__hero-btn {
    margin-top: 74px;
    border-radius: 30px;
    width: 210px;
    height: 46px;
    background-color: var(--cat-button-selected);

    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.01em;
    text-align: center;
    color: var(--white);
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all 0.3s ease;
}
.empty__hero-btn:hover{
background-color: var(--orange);
}
</style>