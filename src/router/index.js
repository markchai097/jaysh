import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Product from "@/views/Product/index.vue";
import ProductItem from "@/views/ProductItem/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
          name: "首頁",
        },
        {
          path: "/product",
          component: Product,
          name: "產品介紹",
        },
        {
          path: "/productItem/:id",
          component: ProductItem,
          name: "產品內容",
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});



export default router;
