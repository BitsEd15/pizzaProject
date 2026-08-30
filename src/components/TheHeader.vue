<script setup>
import TheCategory from './TheCategory.vue';
import TheSelect from './TheSelect.vue';
import { ref } from 'vue';
import { cartStorage } from '@/stores/cart.js';
import { cardsStorage } from '@/stores/cards.js';
const cardsItems = cardsStorage()

const cart = cartStorage()





// Выбор способа сортировки
const selectionArr = ["популярности", "по цене", "по алфавиту"];
const currentSelection = ref('популярности')
const sortIsClicked = ref(false)
const changeCurrentSelection = (val) => {
    currentSelection.value = val
}


</script>

<template>
    <div class="header">
        <div class="header__basic-info">
            <div class="header__basic-info-logo header__basic-info-logo--global">
                <img src="/public/logo.png" alt="Pizza-logo">
                <h1>REACT PIZZA</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
            <router-link to="/cart" class="header__basic-info-total">
                <p>{{ cart.totalPrice }} ₽</p>
                <div></div>
                <p>{{ cart.totalQuantity }}</p>
            </router-link>
        </div>
        <div class="header__hr header__hr--global">
        </div>
        <div class="header__selection">
            <TheCategory :itemsCat="cardsItems.categoriesArr" :chosenCategory='cardsItems.currentCategory'
                @SelectCategory="cardsItems.changeCurrentCategory()" />
            <div class="header__selection-options">
                <span class="header__selection-options-text"
                    :class="{ 'header__selection-options-text-clicked': sortIsClicked === true }">
                    Сортировка по:
                </span>
                <TheSelect :options='selectionArr' :currentMethod="currentSelection"
                    @SelectOption="changeCurrentSelection" @toggle="sortIsClicked = $event" />
            </div>
        </div>
    </div>

</template>

<style>
.header {
    display: flex;
    flex-direction: column;
}

.header__basic-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
}


.header__basic-info-total {
    padding: 12px 23px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: var(--orange);
    border-radius: 30px;
    /* max-width: 150px; */
    gap: 13px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    div {
        width: 1px;
        height: 25px;
        background: rgba(255, 255, 255, 0.25);
    }

    p {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 16px;
        color: #fff;
    }

    p:last-child::before {
        content: url('/vectors/iconfinder_shopping-cart_2561279 1.svg');
        margin-right: 7px;
        vertical-align: middle;
    }

}

.header__selection {
    display: flex;
    justify-content: space-between;
    padding-top: 37px;
    align-items: center;
}

.header__selection-options {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .header__selection-options-text {
        display: inline-flex;
        /* Меняем с inline на inline-flex */
        align-items: center;
        /* Магия: выравнивает иконку и текст по центру */
        margin-right: 8px;
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.01em;
        position: relative;


    }

    .header__selection-options-text::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 6px;
        background-image: url('/vectors/Vector (6).svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: all 0.3s ease;
    }

    .header__selection-options-text-clicked::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
        width: 10px;
        height: 6px;
        background-image: url('/vectors/Vector (6).svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>