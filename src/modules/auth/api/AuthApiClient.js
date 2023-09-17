import ApiClient from "@/modules/global/api/ApiClient";


export default class AuthApiClient extends ApiClient {

    // Creamos una función static login, en este caso utilizaremos el AuthApiClient directamente en el módula de pinia correspondiente
    // no es algo que quiera crear una nueva instancia de esta clase, solo aprovecharme de la herencia (extends ApiClient) y reutilizar la lógica en mi aplicación
    static login (username, password) {
        const payload = {
            username,
            password,
            'grant_type': 'password',
        }
        return this.getApiClient()
            .post('/auth/login', payload)
            .then((res) => {
                return res
            })
            .catch((error) =>{
                const message = error.response.data.message
                console.log({message})
            })

    }
}
