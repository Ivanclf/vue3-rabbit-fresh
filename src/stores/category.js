import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/category"

export const useCategoryStore = defineStore("category", () => {
    // state
    const categoryList = ref([])
    // action
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res
    }

    return {
        categoryList,
        getCategory
    }
})