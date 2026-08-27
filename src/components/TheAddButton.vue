<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
    item: {
        type: Object
    }
})


const isAdded = ref(false)
let addCounter = ref(0)

const handleAdd = () => {
    if (!isAdded.value) {
        isAdded.value = true;
    }
    addCounter.value++;
};
const chageImage = computed(() => {
    if (props.item && props.item.image && props.item.image.length > 1) {
        return isAdded.value ? props.item.image[1] : props.item.image[0];
    }
    return '';
})



</script>

<template>
    <div class='adding-button' :class="{ 'adding-button--added': isAdded === true }" @click="handleAdd">
        <img :src="chageImage" alt="">
        <span>{{ item.text }}</span>
        <div class=" adding-button__counter" v-if="isAdded">
            <span>{{ addCounter }}</span>
        </div>
    </div>
</template>

<style>
.adding-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;

    cursor: pointer;

    padding: 11px 18px 14px 18px;
    background-color: var(--orange);
    border: 1px solid #fe5f1e;
    border-radius: 30px;

    span {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 16px;
        color: var(--white);
    }
}

.adding-button--added {
    padding: 11px 14px 9px 17px;
    background-color: var(--white);
    border: 1px solid var(--button-orange-text);

    span {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 16px;
        color: var(--button-orange-text);
    }

    .adding-button__counter {

        border-radius: 100%;
        background-color: var(--button-orange-text);
        padding: 4px 9px;
        span {
            font-family: var(--font-family);
            font-weight: 700;
            font-size: 13px;
            color: var(--white);
        }
    }
}
</style>