import axios from "axios";
import LocalStorage from "@/utils/LocalStorage";

export default class ApiClient {
    static getApiClient () {
        const client = axios
            .create({
                baseURL: import.meta.env.VITE_API_URL,
                timeout: import.meta.env.VITE_API_TIMEOUT,
                headers: this.getHeaders()
            })
        client.interceptors.response.use(responseInterceptor)
        return client
    }

    static getHeaders () {
        const token = LocalStorage.get('token')
        return {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }
}

const responseInterceptor = (response) => {
    // aqui se podría gestionar que si esta bien, pues te paso la response
    // o te quito un nivel de respuesta que no nos interesa para nada retornando response.data
    console.log({errorInterceptor: response})
    return response.data
}






