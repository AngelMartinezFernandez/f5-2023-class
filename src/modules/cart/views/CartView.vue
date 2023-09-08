<script setup>
import { useCartStore } from '@/modules/cart/store/cartStore'
import CartItem from '@/modules/cart/components/CartItem.vue'

// STORE
const cartStore = useCartStore()

// METHODS
const deleteProduct = (itemId) => {
    cartStore.removeItemFromCart(itemId)
}
</script>
<template>
    <div class="view-content">
        <h1 v-if="cartStore.shoppingCart.length === 0">No hay elementos en el carrito</h1>
        <div v-else v-for="item of cartStore.shoppingCart" :key="item.id" class="cart-item-container">
            <CartItem
                    :id="item.id"
                    :title="item.title"
                    :price="item.price"
                    @delete-item="deleteProduct"
            />
        </div>
    </div>
</template>
<style scoped>
p {
    margin: 0 10px
}
</style>
