import Sidebar from "@/modules/global/components/Sidebar.vue";
import CartView from "@/modules/cart/views/CartView.vue";

export default {
    path: '/cart',
    name: 'cart',
    components: {
        default: CartView,
        aside: Sidebar
    },
}
