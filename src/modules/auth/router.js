import LoginView from "@/modules/auth/views/LoginView.vue";
import router from "@/router";

export default {
    path: '/auth',
    name: 'auth',
    children: [
        {
            path: 'login',
            name: 'auth.login',
            component: LoginView
        }
    ]
}
