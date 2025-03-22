<script setup>
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
</script>

<template>
    <header class="app-header">
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
    </header>
</template>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute; /* Stick to the top */
    top: 80px; /* Positioned below the nav */
    left: 0;
    right: 0;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
}

.app-header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
}

.app-header .logo {
    margin-right: 20px;
    display: flex;
    align-items: center; /* Ensure h1 is horizontally aligned */
    white-space: nowrap; /* Prevent h1 from wrapping */
    overflow: hidden; /* Hide overflow if content exceeds container */
    text-overflow: ellipsis; /* Add ellipsis for overflowed text */
}

.app-header .container ui {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-grow: 1;
}

.app-header .container ui li {
    margin-left: 20px;
    white-space: nowrap;
}

.app-header .search {
    display: flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
    margin-left: 40px; /* Added spacing between search bar and li */
}

.app-header .search input {
    margin-left: 10px;
    flex-shrink: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .app-header {
        flex-wrap: wrap;
        padding: 10px;
        top: 0; /* Adjust for mobile to stick at the top */
    }

    .app-header .container {
        flex-wrap: wrap;
    }

    .app-header .container ui {
        flex-wrap: wrap;
    }

    .app-header .container ui li {
        margin-left: 10px;
    }

    .app-header .search {
        margin-top: 10px;
        width: 100%;
        justify-content: flex-end;
    }

    .app-header .search input {
        width: auto;
    }
}
</style>