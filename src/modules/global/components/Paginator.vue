<script setup>

const props = defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    totalPages: {
        type: Number,
        default: 1
    }
})
const emits = defineEmits(['paginate'])

// METHODS
const emitPageModifier = (pageModifier) => {
    if ((props.currentPage >= 1) && (props.currentPage < props.totalPages))
    emits('paginate', pageModifier)
}
</script>

<template>
<div class="paginator-container">
    <span @click="emitPageModifier(-1)">{{ $t('global.back') }}</span>
    <span>{{ props.currentPage }}</span>
    <span>de</span>
    <span>{{ props.totalPages }}</span>
    <span @click="emitPageModifier(+1)">{{ $t('global.next') }}</span>
</div>
</template>

<style scoped>
.paginator-container {
    display: flex;
    justify-content: center;
    gap: 5px;
}
</style>
