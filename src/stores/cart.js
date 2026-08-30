import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const cartStorage = defineStore('cart', () => {
    const items = ref([]); // в ӕтот массив отправятся объекты
    const addItem = (item) => {
        let idx = items.value.findIndex((val) => val.id === item.id)
        if (idx === -1)
            items.value.push(item)// добавление в массив items.
        else
            items.value[idx].quantity += 1;
    }
    const isCartEmpty = computed(() => { // проверка на пустой массив
        if (items.value.length > 0)
            return false
        else
            return true
    })
    const clearCart = () => items.value.splice(0)
    const minusItem = (el) => {
        if (el.quantity > 0) {
            el.quantity--;
        }
    }

    const removeEl = (el) => items.value.splice(items.value.indexOf(el), 1)

    const totalQuantity = computed(() => {
        return items.value.reduce((sum, el) => sum + el.quantity, 0);
    });

    const totalPrice = computed(() => {
        return items.value.reduce((sum, el) => sum + (Number(el.price) * Number(el.quantity)), 0);
    });

    return { items, addItem, isCartEmpty, clearCart, minusItem, removeEl, totalQuantity, totalPrice }
})