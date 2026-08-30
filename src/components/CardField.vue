<script setup>
import TheCard from './TheCard.vue';
import { cardsStorage } from '@/stores/cards.js';
const cardsItems = cardsStorage()




</script>

<template>
    <h2 class="catalog-title">Все пиццы</h2>
    <div class="catalog-field">
        <TheCard :item="el" v-for="el in cardsItems.sortedArray" :key="el.id" />
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