<template>
    <div id="sidebar">
        <div class="sidebar-header">
            <span>UserName</span>
        </div>
        <div class="sidebar-nav">
            <router-link to="/products" class="nav-button text">Products</router-link>
            <router-link to="/cart" class="nav-button text">Cart</router-link>
        </div>
        <div class="sidebar-footer text total">
            {{ total }}
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/modules/cart/store/cartStore'
import { computed } from 'vue'

const cartStore = useCartStore()

// COMPUTED
const total = computed(() => {
    return `Total: ${cartStore.getTotal} €`
})
</script>

<style scoped>
#sidebar {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    /*height: 100%;*/
}

.sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-size: 1.2rem;
    letter-spacing: 1.1rem;
    text-transform: uppercase;
    color: whitesmoke;
    border-bottom: 2px solid white;
}

.sidebar-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 20%;
    color: whitesmoke;
    border-top: 2px solid white;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 2em;*/
    padding: 1rem;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
    background-color: var(--primary-color);
    /*border-radius: 15px;*/
    text-align: center;
    text-decoration: none;
}

.nav-button:hover {
    color: var(--secondary-color);
    background-color: var(--elements-color);
    /*border-radius: 15px;*/
}

.text {
    letter-spacing: 1.1rem;
    text-transform: uppercase;
    color: var(--secondary-color);
}

.total {
    letter-spacing: 0.5rem;
}
</style>
