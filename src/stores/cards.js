import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const cardsStorage = defineStore('cards', () => {
    // Выбор категории
    const categoriesArr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const currentCategory = ref('Все')
    const changeCurrentCategory = computed(()=>{
        return currentCategory.value
    })

// Массив с данными пиццы
    const cardsArr = [
        {
            id: 1,
            image: '/image 2.png',
            name: 'Чизбургер-пицца',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 395,
            category: ["Все", "Мясные", "Закрытые"]
        },
        {
            id: 2,
            image: '/image 7.png',
            name: 'Сырная',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 450,
            category: ["Все", "Вегетарианская"]
        },
        {
            id: 3,
            image: '/image 6.jpg',
            name: 'Креветки по-азиатски',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 290,
            category: ["Все", "Острые"]
        },
        {
            id: 4,
            image: '/image 5.png',
            name: 'Сырный цыпленок',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 385,
            category: ["Все", "Гриль"]
        },
        {
            id: 5,
            image: '/image 2.png',
            name: 'Чизстейк-пицца',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 395,
            category: ["Все", "Мясные", "Закрытые"]
        },
        {
            id: 6,
            image: '/image 7.png',
            name: 'Сытная',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 450,
            category: ["Все", "Мясные"]
        },
        {
            id: 7,
            image: '/image 6.jpg',
            name: 'Креветки по-осетински',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 290,
            category: ["Все", "Закрытые"]
        },
        {
            id: 8,
            image: '/image 5.png',
            name: 'Сырный орленок',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 385,
            category: ["Все", "Гриль", "Острые"]
        },

    ]
    const filteredCardsArr = cardsArr.value.filter((item) => {
        return item.category.value.includes(currentCategory.value)
    })



    return {
        categoriesArr,
        currentCategory,
        changeCurrentCategory,
        cardsArr,
        filteredCardsArr
    }
})