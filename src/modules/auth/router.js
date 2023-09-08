import LoginView from "@/modules/auth/views/LoginView.vue";
import LogoSidebar from "@/modules/auth/components/LogoSidebar.vue";

export default {
    path: '/auth',
    name: 'auth',
    children: [
        {
            path: 'login',
            name: 'auth.login',
            components: {
                aside: LogoSidebar,
                default: LoginView
            }
        }
    ]
}
