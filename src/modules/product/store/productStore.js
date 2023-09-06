import { defineStore } from 'pinia'

export const useProductsStore = defineStore( {
    id: 'products',
    state: () => ({
        products: [],
        noImageSrc: 'https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png'
    }),
    actions: {
        async fetchProducts () {
            // ESTO NORMALMENTE SE EXTRAE A UN API_CLIENT, CON ESTO ME REFIERO A LAS PETICIONES
            // CREARÍAMOS POR EJEMPLO  EN UNA CARPETA API UN FICHERO ProductsApi.js EN EL QUE CREAREMOS
            // TODOS LOS METODOS NECESARIOS PARA HACER PETICIONES A LA API, GET, POST, PUT, DELETE
            // AQUÍ SOLO LLAMARIAMOS A ProductsApi.get() Y MODIFICARÍAMOS EL STATE
            await fetch( 'https://fakestoreapi.com/products/' )
                .then( res => res.json() )
                .then( data => {
                    this.products = data
                } )
        },
        getProductById (id) {
            return this.products.find( product => product.id === id )
        }
    }
})
