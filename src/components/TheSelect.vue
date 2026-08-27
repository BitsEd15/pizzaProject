<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const isShow = ref(false)
const props = defineProps({
    currentMethod: {
        type: String
    },
    options: {
        type: Array
    }
})
const emit = defineEmits(['SelectOption', 'toggle'])
</script>

<template>
    <div class="select">
        <div class="select-header" @click="isShow = !isShow; emit('toggle', isShow)">
            <span>{{ currentMethod }}</span>
        </div>
        <div class="select-options" v-if="isShow">
            <div class="select-options-option" v-for="item in options"
                :class="{ 'select-options-option--selected': item === currentMethod }"
                @click="emit('SelectOption', item); isShow = false; emit('toggle', false)">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<style>
.select {
    position: relative;
}

.select .select-header {
    color: #fe5f1e;
}

.select-header {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.01em;
    color: var(--orange);
    text-decoration: underline dashed;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    cursor: pointer;
}

.select-options {
    position: absolute;
    top: calc(100% + 12px);
    transform: translateX(-42px);

    border-radius: 10px;
    width: 132px;
    height: auto;
    overflow-y: auto;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.09);
    background-color: #fff;

    display: flex;
    flex-direction: column;
    padding: 13px 0px 9px 0px;
    justify-content: space-between;
}

.select-options-option {
    padding: 10px 0px 11px 14px;
    cursor: pointer;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.01em;
    color: var(--black);
}

.select-options-option--selected {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.01em;
    color: var(--orange);
    background-color: rgba(254, 95, 30, 0.05);
}
</style>