import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    // EL STATE SON VARIABLES QUE SE PUEDEN MODIFICAR, ESTAS LAS UTILIZAREMOS EN LOS COMPONENTES.
    state: () => ({
        shoppingCart: []
    }),
    // LOS GETTERS SON FUNCIONES QUE SE EJECUTAN EN EL COMPONENTE Y SE RETORNAN UN VALOR, A MI ME GUSTA VERLAS COMO VARIABLES CON LÓGICA.
    // SALVO QUE SE LE PASEN PARAMS LOS CONSIDERO COMPUTED DE LA STORE
    getters: {
        getTotal: state => {
            let total = 0
            state.shoppingCart.forEach(item => total += (item.price * item.quantity))
            return total
        }
    },
    // LOS ACTIONS SON MÉTODOS SIN MÁS, LO ÚNICO ES QUE AL TENERLAS EN UNA STORE PODEMOS REUTILIZARLAS POR TODA LA APP.
    actions: {
        addItemToShoppingCart(product) {
            console.log('addItemToShoppingCart', product)
            // EN ESTE MÉTODO SE RECIBE UN PRODUCTO Y SE AGREGA AL CARRITO
            // HABRÍA QUE CREAR CIERTAS COMPROBACIONES PARA QUE NO SE AGREGUE UN PRODUCTO QUE YA ESTA EN EL CARRITO
            const includesProduct = this.shoppingCart.find(item => item.id === product.id)
            if (includesProduct) {
                return includesProduct.quantity++
            }
            const handledProduct = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1
            }
            product.quantity = 1
            this.shoppingCart = [...this.shoppingCart, handledProduct]
        },
        removeItemFromCart(id) {
            console.log('removeItemFromCart', id)
            // EN ESTE MÉTODO SE RECIBE UN ID PORQUE NO NECESITAMOS NADA MAS

            let cartItem = this.shoppingCart.find(item => item.id === id)
            let cartIndex = this.shoppingCart.indexOf(cartItem)
            this.shoppingCart.splice(cartIndex, 1)
        }
    }
})
