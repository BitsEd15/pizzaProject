import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const cardsStorage = defineStore('cards', () => {
    // Выбор категории
    const categoriesArr = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const currentCategory = ref('Все')
    const changeCurrentCategory = (newCategory) => {
        currentCategory.value = newCategory;
    };

    //Выбор способа сортировки
    const selectionArr = ["популярности", "по цене", "по алфавиту"];
    const currentSelection = ref('популярности')
    const sortIsClicked = ref(false)
    const changeCurrentSelection = (val) => {
        currentSelection.value = val;
    }

    // Массив с данными пиццы
    const cardsArr = [
        {
            id: 1,
            image: import.meta.env.BASE_URL + '/image 2.png',
            name: 'Чизбургер-пицца',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 395,
            category: ["Все", "Мясные", "Закрытые"]
        },
        {
            id: 2,
            image: import.meta.env.BASE_URL + '/image 7.png',
            name: 'Сырная',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 450,
            category: ["Все", "Вегетарианская"]
        },
        {
            id: 3,
            image: import.meta.env.BASE_URL + '/image 6.jpg',
            name: 'Креветки по-азиатски',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 290,
            category: ["Все", "Острые"]
        },
        {
            id: 4,
            image: import.meta.env.BASE_URL + '/image 5.png',
            name: 'Сырный цыпленок',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 385,
            category: ["Все", "Гриль"]
        },
        {
            id: 5,
            image: import.meta.env.BASE_URL + '/image 2.png',
            name: 'Чизстейк-пицца',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 395,
            category: ["Все", "Мясные", "Закрытые"]
        },
        {
            id: 6,
            image: import.meta.env.BASE_URL + '/image 7.png',
            name: 'Сытная',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 450,
            category: ["Все", "Гриль"]
        },
        {
            id: 7,
            image: import.meta.env.BASE_URL + '/image 6.jpg',
            name: 'Креветки по-осетински',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 290,
            category: ["Все", "Закрытые", "Мясные"]
        },
        {
            id: 8,
            image: import.meta.env.BASE_URL + '/image 5.png',
            name: 'Сырный орленок',
            dough: ['тонкое', 'традиционное'],
            size: [26, 30, 40],
            price: 385,
            category: ["Все", "Гриль", "Острые"]
        },

    ]
    const filteredCardsArr = computed(() => {
        if (currentCategory.value === "Все") {
            return cardsArr;
        }
        return cardsArr.filter((item) => {
            return item.category.includes(currentCategory.value);
        })
    })

    //функции сортировок
    const sortedArray = computed(() => {
        const result = [...filteredCardsArr.value];
        if (currentSelection.value === 'по цене') {
            return result.sort((a, b) => a.price - b.price);
        }
        else if (currentSelection.value === 'по алфавиту') {
            return result.sort((a, b) => a.name.localeCompare(b.name))
        } else {
            return result;
        }
    })

    return {
        categoriesArr,
        currentCategory,
        changeCurrentCategory,
        cardsArr,
        selectionArr,
        currentSelection,
        sortIsClicked,
        changeCurrentSelection,
        sortedArray
    }
})