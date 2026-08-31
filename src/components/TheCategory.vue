<script setup>
import { defineProps, defineEmits } from 'vue';
// пропсы
const props = defineProps({
    itemsCat: {
        type: Array,
    },
    chosenCategory: {
        type: String
    }
})
const emit = defineEmits(['SelectCategory']);
</script>

<template>
    <div class='categories'>
        <button class="categories__btn" v-for="value in itemsCat" :key="value"
            :class="{ 'categories__btn--selected': chosenCategory === value }" @click="emit('SelectCategory', value)">
            {{ value }}
        </button>
    </div>
</template>

<style>
.categories {
    display: flex;
    gap: 8.95px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.categories__btn {
    border-radius: 30px;
    background-color: var(--cat-button-non-selected);
    padding: 13.93px 15.33px 16.74px 15.33px;

    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.01em;
    text-align: center;
    color: var(--cat-button-option-text);

    cursor: pointer;
    border: none;
    transition: all 0.15s ease;
}

.categories__btn--selected {
    background-color: var(--cat-button-selected);
    color: #fff;
    box-shadow: 1px 1px 1px 1px;
}

.categories__btn:hover {
    background-color: var(--cat-button-selected);
    color: #fff;
}
</style>