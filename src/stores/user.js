import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "../apis/user";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "../apis/cart";

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        await mergeCartAPI(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()
    }

    //退出操作
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()

    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo,
    }
}, {
    persist: true,
})