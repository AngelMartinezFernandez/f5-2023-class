import {defineStore} from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        currentUser: {}
    }),
    getters: {},
    actions: {
        register({user, password, email}) {
            return {user, password, email}
        },
        login({user, password}) {
            return {user, password}
        },
        recoverPassword() {
            return ''
        },
    },
})
