<script setup>
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category'

const { y } = useScroll(window)
const categoryStore = useCategoryStore()
</script>

<template>
    <div class="app-header-sticky" :class="{ show: y > 78 }">
        <div class="container">
            <h1 class="logo">
                <router-link to="/">商城</router-link>
            </h1>
            <ui class="app-header-nav">
                <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
                    <router-link to="/">{{ item.name }}</router-link>
                </li>
            </ui>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-header-sticky {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
    transform: translateY(-100%);
    opacity: 0;
}

.app-header-sticky.show {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateY(0);
    opacity: 1;
}

.app-header-sticky .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
}

.app-header-sticky .logo {
    margin-right: 20px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.app-header-sticky .container ui {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-grow: 1;
}

.app-header-sticky .container ui li {
    margin-left: 20px;
    white-space: nowrap;
}

.app-header-sticky .search {
    display: flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
    margin-left: 40px;
}

.app-header-sticky .search input {
    margin-left: 10px;
    flex-shrink: 0;
}

@media (max-width: 768px) {
    .app-header-sticky {
        flex-wrap: wrap;
        padding: 10px;
        top: 0;
    }

    .app-header-sticky .container {
        flex-wrap: wrap;    
    }

    .app-header-sticky .container ul {
        flex-wrap: wrap;
    }

    .app-header-sticky .container ul li {
        margin-left: 10px;
    }

    .app-header-sticky .search {
        margin-top: 10px;
        width: 100%;
        justify-content: flex-end;
    }

    .app-header-sticky .search input {
        width: auto;
    }
}
</style>