import { defineStore } from 'pinia'
import ProductsApiClient from "@/modules/product/api/ProductApiClient";

export const useProductsStore = defineStore( {
    id: 'products',
    state: () => ({
        products: [],
        meta: {
            skip: 0,
            limit: 5,
            total: 0
        },
        noImageSrc: 'https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png'
    }),
    getters: {
        totalPages () {
            return this.meta.total / this.meta.limit
        },
        currentPage () {
            return (this.meta.skip / this.meta.limit) +1
        },
        itemsPerPage () {
            return this.meta.limit
        }
    },
    actions: {
        async fetchProducts () {
            return ProductsApiClient.getAll(this.meta)
/*
                .then( res => res.json() )
*/
                .then(({ limit, products, skip, total }) => {
                    console.log(products)
                    this.products = products || []
                    this.meta = {...this.meta, limit, skip, total}
                } )
        },
        getProductById (id) {
            return this.products.find( product => product.id === id )
        },
        nextPage () {
            const nextPage = this.currentPage+1
            if (nextPage <= this.totalPages) this.meta.skip = this.meta.skip + this.itemsPerPage
        },
        previousPage () {
            const previousPage = this.currentPage-1
            if (previousPage >= 1) this.meta.skip = this.meta.skip - this.itemsPerPage

        }
    }
})
