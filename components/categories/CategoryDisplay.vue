<template>
    <div :class="nuxtContainerClasses">
        <div class="row">
            <div class="col-md-12">
                <category-nested-link />
            </div>
            <div class="col-md-12">
                <h1 class="text-center">{{ $store.getters.currentContext.name }}</h1>        
            </div>
        </div>        
        <sub-category-display v-for="(category, index) in $store.getters.currentContext.subcategories" :key="index" :category="category" />        
        <sub-category-display v-if="noSubCategories" :category="$store.getters.currentContext" />        
    </div>
</template>

<script>
import axios from '~/plugins/axios';
import CategoryNestedLink from './CategoryNestedLink';
import SubCategoryDisplay from './SubCategoryDisplay.vue';
export default {
    components: {
        'category-nested-link': CategoryNestedLink,
        'sub-category-display': SubCategoryDisplay
    },   
    computed: {
        nuxtContainerClasses: function() {
            return {
                'col-lg-9 col-md-8 col-sm-6 col-xs-6': this.$store.getters.sidebarOpen,
                'col-lg-12 col-md-12 col-sm-12 col-xs-12': !this.$store.getters.sidebarOpen,
                'nuxt-container': true
            }
        },
        noSubCategories: function() {            
            let context = this.$store.getters.currentContext;
            let isEmpty = (Object.keys(this.$store.getters.currentContext).length === 0);             
            if(!isEmpty) {                
                if(!context.subcategories || context.subcategories.length === 0)
                    return true;
            } else return false;
        }
    }
  
}
</script>

<style scoped>
.nuxt-container
{
    height: 100vh;
    overflow: auto;
}

img {
    margin: auto;
    display: block;
}
</style>
