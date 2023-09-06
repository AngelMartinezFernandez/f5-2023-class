import ProductsView from "@/modules/product/views/ProductsView.vue";
import Sidebar from "@/modules/shared/components/Sidebar.vue";

export default {
    path: '/products',
    name: 'products',
    components: {
        default: ProductsView,
        aside: Sidebar
    },
}
