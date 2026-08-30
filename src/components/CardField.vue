<script setup>
import TheCard from './TheCard.vue';


//Карточки товаров
const cardsArr = [
    {
        id: 1,
        image: '/image 2.png',
        name: 'Чизбургер-пицца',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 395
    },
    {
        id: 2,
        image: '/image 7.png',
        name: 'Сырная',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 450
    },
    {
        id: 3,
        image: '/image 6.jpg',
        name: 'Креветки по-азиатски',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 290
    },
    {
        id: 4,
        image: '/image 5.png',
        name: 'Сырный цыпленок',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 385
    },
    {
        id: 5,
        image: '/image 2.png',
        name: 'Чизстейк-пицца',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 395
    },
    {
        id: 6,
        image: '/image 7.png',
        name: 'Сытная',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 450
    },
    {
        id: 7,
        image: '/image 6.jpg',
        name: 'Креветки по-осетински',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 290
    },
    {
        id: 8,
        image: '/image 5.png',
        name: 'Сырный орленок',
        dough: ['тонкое', 'традиционное'],
        size: [26, 30, 40],
        price: 385
    },

]


</script>

<template>
    <h2 class="catalog-title">Все пиццы</h2>
    <div class="catalog-field">
        <TheCard :item="el" v-for="el in cardsArr" :key="el.id" />
    </div>
</template>

<style>
.catalog-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.01em;
    color: var(--black);
    padding-top: 35px;
    padding-bottom: 35px;
}

.catalog-field {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 35px;
    row-gap: 65px;
    padding-bottom: 96px;
}
</style>