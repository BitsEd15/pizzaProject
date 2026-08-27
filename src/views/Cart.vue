<script setup>
import { cartStorage } from '@/stores/cart';
import CartEmpty from '@/components/CartEmpty.vue';
import CartFull from '@/components/CartFull.vue';
const cart = cartStorage()
</script>

<template>
    <div class="cart-container">
        <div class="cart-container__header header__basic-info-logo--global">
            <img src="/public/logo.png" alt="Pizza-logo">
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
        </div>
        <div class="cart-container__hr header__hr--global">
        </div>
        <CartEmpty v-if="cart.isCartEmpty" />
        <CartFull v-if="!cart.isCartEmpty" />
    </div>
</template>

<style>
.cart-container__header.header__basic-info-logo--global {
    max-width: 236px;
    white-space: nowrap;
}

.cart-container__hr.header__hr--global {
    margin-top: 40px;
}
</style>
