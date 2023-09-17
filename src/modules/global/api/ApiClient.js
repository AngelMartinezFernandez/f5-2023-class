import axios from "axios";
import LocalStorage from "@/utils/LocalStorage";

export default class ApiClient {
    static getApiClient () {
        // Declaramos el cliente base de axios en una constante para posteriormente gestionar el interceptor
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

    // yo aqui gestionaría por ejemplo que si recibo un error de caducidad de token (el standard que genera nuestro auth en el backend,
    // en caso de que hubieramos implementado un refreshToken, el cual podemos hacer que caduque cada 30 días por ejemplo,
    // pues automaticamente (el refreshToken) al endpoint correspondiente y si recibe un nuevo token repetimos la petición
    // por la cual recibimos error pero con el nuevo token.
    console.log({errorInterceptor: response})
    return response.data
}






