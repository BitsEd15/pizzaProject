<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';
import TheAddButton from './TheAddButton.vue';
import { cartStorage } from '@/stores/cart.js';



const props = defineProps({
    item: {
        type: Object
    }
})

const btnContentArr = {
    image: [
        import.meta.env.BASE_URL + 'vectors/plus1.svg',
        import.meta.env.BASE_URL + 'vectors/plus2.svg'
    ],
    text: 'Добавить'
}
//Чтобы менять стиль при клике на параметры и чтобы изначально был выбран тип пиццы
const selectedDough = ref(props.item.dough[0]);
const selectedSize = ref(props.item.size[0]);


// Расчет цены в зависимости от размера пиццы
const calculatedPrice = computed(() => {
    const basePrice = props.item.price

    if (selectedSize.value === 30) {
        return Math.floor((30 / 26) * basePrice)
    }
    if (selectedSize.value === 40) {
        return Math.floor((40 / 26) * basePrice)
    }
    return basePrice
})

//Добавление объекта в корзину
const cart = cartStorage()
const emit = defineEmits(['addItem'])
const addObjToCart = () => {
    const finalDoughText = selectedDough.value === 'традиционное' ? 'толстое' : selectedDough.value;
    const obj = {
        id: `${props.item.id}-${selectedSize.value}-${selectedDough.value}`,
        img: props.item.image,
        name: props.item.name,
        dough: finalDoughText,
        size: selectedSize.value,
        price: calculatedPrice.value,
        quantity: 1
    }
    cart.addItem(obj);
}


</script>

<template>
    <div class='pizza-card'>
        <img class='pizza-card__img' :src="item.image" alt="">
        <h2 class='pizza-card__title'>{{ item.name }}</h2>
        <div class='pizza-card__parameters-container'>
            <div class='pizza-card__parameters-container-testo'>
                <button v-for="value in item.dough" :key="value" @click.stop="selectedDough = value"
                    :class="{ 'testo-btn--clicked': selectedDough === value }">
                    {{ value }}</button>
            </div>
            <div class='pizza-card__parameters-container-size'>
                <button v-for="value in item.size" :key="value" @click.stop="selectedSize = value"
                    :class="{ 'size-btn--clicked': selectedSize === value }">{{ value
                    }}см.</button>
            </div>
        </div>
        <div class='pizza-card__adding'>
            <p class='pizza-card__adding-price'> от {{ calculatedPrice }} ₽</p>
            <TheAddButton :item="btnContentArr" @click="addObjToCart" />
        </div>
    </div>
</template>

<style>
.pizza-card {
    display: flex;

    flex-direction: column;
    align-items: center;
}

.pizza-card__img {
    object-fit: contain;
    padding-left: 15px;
    padding-right: 5px;
    margin-bottom: 11px;
}

.pizza-card__title {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 0.01em;
    text-align: center;
    color: var(--black);
    padding-bottom: 22px;
}

.pizza-card__parameters-container {
    padding: 7px 4.78px 7px 5.73px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: space-between;
    background-color: var(--gray);
    border-radius: 10px;
    width: 100%;
}

.pizza-card__parameters-container-testo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5.73px;

    button {
        border: none;
        cursor: pointer;
        height: 32px;
        background-color: var(--gray);

        font-family: var(--font-family);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.01em;
        text-align: center;
        color: var(--cat-button-option-text);
        opacity: 0.6;

        transition: all 0.2s ease-in-out;
    }
}

.pizza-card__parameters-container-size {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5.73px;

    button {
        border: none;
        height: 32px;
        cursor: pointer;
        background-color: var(--gray);

        font-family: var(--font-family);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.01em;
        text-align: center;
        color: var(--cat-button-option-text);
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
    }
}

.pizza-card__adding {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 17px;
    align-items: center;
}

.pizza-card__adding-price {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.01em;
    color: var(--black);
}


.pizza-card__parameters-container-testo .testo-btn--clicked,
.pizza-card__parameters-container-size .size-btn--clicked {
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    opacity: 1;
}

.pizza-card__parameters-container-size>button:hover,
.pizza-card__parameters-container-testo>button:hover {
    color: var(--orange);
}

.pizza-card__parameters-container-testo .testo-btn--clicked:hover,
.pizza-card__parameters-container-size .size-btn--clicked:hover {
    color: var(--black);
}
</style>