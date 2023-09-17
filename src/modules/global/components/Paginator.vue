<script setup>
const DEFAULT_PAGE = 1
const NEXT_PAGE_MODIFIER = +1
const PREVIOUS_PAGE_MODIFIER = -1

const props = defineProps({
    currentPage: {
        type: Number,
        default: DEFAULT_PAGE
    },
    totalPages: {
        type: Number,
        default: DEFAULT_PAGE
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
    <span @click="emitPageModifier(PREVIOUS_PAGE_MODIFIER)">{{ $t('global.back') }}</span>
    <span>{{ props.currentPage }}</span>
    <span>{{ 'de' }}</span>
    <span>{{ props.totalPages }}</span>
    <span @click="emitPageModifier(NEXT_PAGE_MODIFIER)">{{ $t('global.next') }}</span>
</div>
</template>

<style scoped>
.paginator-container {
    display: flex;
    justify-content: center;
    gap: 5px;
}
</style>
