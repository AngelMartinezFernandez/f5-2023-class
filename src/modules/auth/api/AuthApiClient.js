import ApiClient from "@/modules/global/api/ApiClient";


export default class AuthApiClient extends ApiClient {
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
