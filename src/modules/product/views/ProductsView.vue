<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useProductsStore } from '@/modules/product/store/productStore'
import { useCartStore } from '@/modules/cart/store/cartStore'
import ProductItem from '@/modules/product/components/ProductItem.vue'
import Paginator from "@/modules/global/components/Paginator.vue";

const productsStore = useProductsStore()
const cartStore = useCartStore()
// CICLO DE VIDA DE VUE, TAMBIÉN SE CONOCEN COMO HOOKS, BUSCAR EN LA DOCUMENTACIÓN OFICIAL:
// onBeforeMount: AQUI SUELO TRATAR DATOS ANTES DE QUE SE RENDERICE EL TEMPLATE (HTML)
// onMounted: ES LA PARTE "FINAL" EN LA QUE SE RENDERIZA EL TEMPLATE (HTML)
// onBeforeUnmount: AQUI SUELO TRATAR ACCIONES QUE SE REALIZAN AL DESTRUIR EL COMPONENTE
// SI TENÉIS DUDAS PONERLOS TODOS CON UN CONSOLE.LOG DIFERENTE EN CADA UNO, ASI VERÉIS EL ORDEN.
onBeforeMount( () => {
    getProducts()
})

// DATA
const loading = ref(true)

// COMPUTED
const loadingClass = computed(() => {
    return loading.value ? 'loading' : ''
})

// METHODS
const getProducts = async () => { // ESTE MÉTODO MOVERLO A ProductApiClient
    await productsStore.fetchProducts()
    loading.value = false
}

const addProduct = (productId) => {
    const product = productsStore.getProductById(productId)
    cartStore.addItemToShoppingCart(product)
}
const paginate = (pageModifier) => {
    console.log(pageModifier)
    loading.value = true
    if(pageModifier > 0) productsStore.nextPage()
    else productsStore.previousPage()
    getProducts()
}
</script>

<template>
    <div v-if="loading" class="view-content" :class="loadingClass">
        <div  class="lds-dual-ring"/>
    </div>
    <!--              LOADING SACADO DE https://loading.io/css/-->
    <div v-else class="view-content" :class="loadingClass">

        <div class="content__products" v-for="product in productsStore.products" :key="product.id">
            <ProductItem
                :id="product.id"
                :image="product.thumbnail"
                :noImage="productsStore.noImageSrc"
                :title="product.title"
                :description="product.description"
                :price="product.price"
                @addProduct="addProduct"
            />
        </div>
        <Paginator
            :current-page="productsStore.currentPage"
            :total-pages="productsStore.totalPages"
            @paginate="paginate"
        />
    </div>
</template>

<style scoped>
.content__products {
    width: 90%;
}

.loading {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
}
</style>
