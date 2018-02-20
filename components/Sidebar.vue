<template>
    <div id="side-bar" class="col-md-2">
        <ul>
            <category v-for="(category, index) in categories" 
            :key="index" :category="category"></category>           
        </ul>
    </div>      
</template>

<script>
import Vue from 'vue';
import Category from '../components/category/Category.vue';
import SubCategory from '../components/category/SubCategory.vue';

Vue.component('category', Category);
Vue.component('sub-category', SubCategory);
export default {
    props: ["categories"]
}
</script>

<style scoped>
ul {
    list-style: none;
    width: 16vw;
    padding-left: 0;
}


#side-bar {    
    border-right: 1px solid rgb(176, 172, 163);    
    width: 100%;
    height: 100vh;
    z-index: 10;
}
</style>
