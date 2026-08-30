<script setup>
import { cartStorage } from '@/stores/cart.js';
const cart = cartStorage()

</script>

<template>
    <div class="full">
        <div class="full__header">
            <div class="full__header-logo">
                <img src="/vectors/iconfinder_shopping-cart_2561279 1 (1).svg" alt="">
                <h3>Корзина</h3>
            </div>
            <div class="full__header-clear">
                <img src="/vectors/iconfinder_trash-2_3324927 1.svg" alt="">
                <h3 @click="cart.clearCart()">Очистить корзину</h3>
            </div>
        </div>
        <div class="full__content" v-for="el in cart.items" :key="el.id">
            <div class="full__content-cards">
                <img class="full__content-cards-img" :src="el.img" alt="">
                <div class="full__content-cards-description">
                    <h4>{{ el.name }}</h4>
                    <div>
                        <span>{{ el.dough }} тесто, </span>
                        <span>{{ el.size }} см.</span>
                    </div>
                </div>
            </div>
            <div class="full__content-cards-config">
                <div class="full__content-cards-config-quantity">
                    <img src="/vectors/minus.svg" @click="cart.minusItem(el)">
                    <span>{{ el.quantity }}</span>
                    <img src="/vectors/plus.svg" @click="el.quantity++">
                </div>
                <p class="full__content-cards-config-price">{{ Number(el.price) * Number(el.quantity) }} ₽</p>
                <img class="full__content-cards-config-remove" src="/vectors/close.svg" @click="cart.removeEl(el)">
            </div>
        </div>
        <div class="full__total">
            <h5 class="full__total-quantity">Всего пицц:
                <span>{{ cart.totalQuantity }} шт.</span>
            </h5>
            <h5 class="full__total-sum">Сумма заказа:
                <span>{{ cart.totalPrice }} ₽</span>
            </h5>
        </div>
        <div class="full_button">
            <router-link to="/home" class="full_button-return">
                <img src="/vectors/Path.svg" alt="">
                <span>Вернуться назад</span>
            </router-link>
            <button class="full_button-pay">Оплатить сейчас</button>
        </div>
    </div>
</template>

<style>
.full {
    padding: 94px 224px 40px 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.full__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 30px;
}

.full__header-logo {
    display: flex;
    align-items: center;
    gap: 17px;

    img {
        width: 29px;
        height: 29px;
    }

    h3 {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 0.01em;
        color: var(--black);
    }
}

.full__header-clear {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }

    h3 {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        color: var(--text-grey-bin);
    }
}

.full__content {
    width: 100%;
    padding-top: 35px;
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f4f4f4;
}

.full__content-cards {
    display: flex;
    align-items: center;
    gap: 14px;
}

.full__content-cards-img {
    width: 80px;
    height: 80px;
}

.full__content-cards-description {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h4 {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 22px;
        letter-spacing: 0.01em;
        color: var(--black);
    }

    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0.01em;
        color: var(--text-grey-span);
    }
}

.full__content-cards-config {
    display: flex;
    gap: 93px;
    align-items: center;
    justify-content: space-between;
}

.full__content-cards-config-quantity {
    display: flex;
    gap: 12px;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    span {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 22px;
        letter-spacing: 0.01em;
        color: var(--black);
    }
}

.full__content-cards-config-price {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.01em;
    color: var(--black);
}

.full__content-cards-config-remove {
    width: 32px;
    height: 32px;
    cursor: pointer;
}

.full__total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
}

.full__total-quantity {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.01em;
    color: var(--black);

    span {
        font-weight: 700;
    }
}

.full__total-sum {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.01em;
    color: var(--black);

    span {
        font-weight: 700;
        color: var(--orange);
    }
}

.full_button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 91px;
}

.full_button-return {
    border: 1px solid #d3d3d3;
    border-radius: 30px;
    width: 211px;
    height: 55px;
    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #cacaca;
    text-decoration: none;
    cursor: pointer;

    img {
        width: 8px;
        height: 14px;
    }
}

.full_button-pay {
    border-radius: 30px;
    width: 211px;
    height: 55px;
    background-color: var(--orange);
    border: none;

    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: var(--white);
    cursor: pointer;
}
</style>