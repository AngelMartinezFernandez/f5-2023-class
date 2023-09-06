import Sidebar from "@/modules/shared/components/Sidebar.vue";
import CartView from "@/modules/cart/views/CartView.vue";

export default {
    path: '/cart',
    name: 'cart',
    components: {
        default: CartView,
        aside: Sidebar
    },
}
