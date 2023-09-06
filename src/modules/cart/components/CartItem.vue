<template>
    <div class="cart-item">
        <p>{{ id }}</p>
        <p>{{ title }}</p>
        <p>{{ price }}€</p>
        <Button
                :title="'Eliminar'"
                :type="'cancel'"
                @click="emitDelete"
        />
    </div>
</template>

<script setup>
import Button from '@/modules/shared/components/Button.vue'
// PROPS
const props = defineProps( {
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
} )

// EMITS
const emits = defineEmits(['delete-item'])

// METHODS
const emitDelete = () => {
    emits('delete-item', props.id)
}
</script>

<style scoped>
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    padding: 0.5rem 0;
    border: 2px solid #2d2a4c;
}
</style>
