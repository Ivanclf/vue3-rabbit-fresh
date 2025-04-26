import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import SubCategory from "@/views/SubCategory/index.vue"
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '../views/Checkout/index.vue'
import PayBack from '../views/pay/payBack.vue'
import Pay from '../views/pay/index.vue'
import Member from '../views/Member/index.vue'
import Userinfo from '../views/Member/components/Userinfo.vue'
import UserOrder from '../views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: "category/:id",
          component: Category
        },
        {
          path: "category/sub/:id",
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: "",
          component: Home
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children:[
            {
              path: '',
              component: Userinfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        }

      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  // 路由行为控制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
