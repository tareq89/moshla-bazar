<template>
    <div id="side-bar" class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <!-- <div id="category-container" @click="clickAllCategory">ALL Categories</div>        -->
        <category v-for="(category, index) in categories" :key="index" :category="category" :mainCategory="true"></category>        
    </div>      
</template>

<script>
import Vue from 'vue';
import Category from './Category.vue';
import SubCategory from './SubCategory.vue';

Vue.component('category', Category);
Vue.component('sub-category', SubCategory);
export default {
    props: ["categories"],
    methods: {
        clickAllCategory: function() {
            this.$store.dispatch('closeAllMenue');
            this.$store.dispatch('setCurrentContext', {});
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    width: 100%;
    padding-left: 0;    
}

#side-bar {    
    border-right: 1px solid rgb(176, 172, 163);    
    width: 100%;
    height: 100vh;    
    overflow: auto;        
    z-index: 10;
    font-size: 1em;
}

#category-container {
    position: relative;
    display: block;
    padding: 12px 20px;        
    cursor: pointer;
    font-size: 2em;
}
</style>
