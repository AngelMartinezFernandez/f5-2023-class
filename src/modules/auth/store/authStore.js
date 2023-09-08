import {defineStore} from "pinia";
import AuthApiClient from "@/modules/auth/api/AuthApiClient";
import LocalStorage from "@/utils/LocalStorage";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        currentUser: {}
    }),
    getters: {},
    actions: {
        register({userName, password, email}) {
            return {userName, password, email}
        },
        login({userName, password}) {
            // usuarios de prueba de la api de desarrollo
            // utilizar cualquier usuario y contraseña de los especificados en este JSON
            // https://dummyjson.com/users
            //
            // username: 'kminchelle',
            // password: '0lelplR'
            return AuthApiClient.login(userName, password)
                .then((data) => {
                    this.currentUser = data
                    LocalStorage.set('token', data.token)
                })
        },
        recoverPassword() {
            return ''
        },
    },
})
