<script setup>
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>

<template>
    <div class="container" style="position: relative">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
</template>