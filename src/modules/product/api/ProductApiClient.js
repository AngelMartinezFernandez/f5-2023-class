import ApiClient from "@/modules/global/api/ApiClient";


export default class ProductsApiClient extends ApiClient {
    static getProductsUri () {
        return '/products'
    }
    static getAll (params) {

        return this.getApiClient()
            .get(this.getProductsUri(), {'params': params})
            .then((res) => {
                return res
            })
            .catch((error) =>{
                const message = error.response.data.message
                console.log({message})
            })

    }
    static get (id, params) {

        return this.getApiClient()
            .get(`${this.getProductsUri()}/${id}`, {'params': params})
            .then((res) => {
                return res
            })
            .catch((error) =>{
                const message = error.response.data.message
                console.log({message})
            })

    }
}
