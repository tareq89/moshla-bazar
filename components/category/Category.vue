<template>
    <div>
        <div class="menu">
            <a :class="{ 'category-name-selected': category.expand, 'category-container': true }" v-on:click="expandAndSelect($event, category)">
                {{ category.name }}
                <span class="category-icon"  v-if="category.subcategories && category.subcategories.length > 0">
                    <span v-if="mainCategory" class="maincategory">
                        <icon name="chevron-circle-down" scale="1" :style="{verticalAlign: 'middle'}" v-if="!category.expand"></icon>
                        <icon name="chevron-circle-up" scale="1" :style="{verticalAlign: 'middle'}" v-if="category.expand"></icon>
                    </span>
                    <span v-else class="subcategory">
                        <icon name="plus" scale="1" :style="{verticalAlign: 'middle'}" v-if="!category.expand"></icon>
                        <icon name="minus" scale="1" :style="{verticalAlign: 'middle'}" v-if="category.expand"></icon>
                    </span>
                </span>
            </a>
        </div>
        <sub-category v-if="category.subcategories" :visible="!category.expand" :categories="category.subcategories"></sub-category>        
    </div>
</template>

<script>
import 'vue-awesome/icons/chevron-circle-down';
import 'vue-awesome/icons/chevron-circle-up';
import 'vue-awesome/icons/plus';
import 'vue-awesome/icons/minus';
import SubCategory from './SubCategory.vue';

export default {    
    props: ['category', 'mainCategory'],    
    methods: {
        expandAndSelect($event, category) {            
            switch($event.target.tagName) {
                case 'path':
                case 'svg':
                case 'SPAN':                    
                    this.$store.dispatch('setExpandFlag', {
                        nodeid: category.nodeid,
                        expand: !category.expand
                    });
                    if(category.expand === false) {                        
                        // if closing a _parent menu, then set the context = parent of that _parent manu
                        let nodeid = category.nodeid.slice(0, category.nodeid.length -1);                     
                        if(nodeid === '0') {
                            this.$store.dispatch('setCurrentContext', {
                                context: {},
                                router: this.$router
                            });    
                        } else {
                            this.$store.dispatch('setCurrentContext', {
                                context: nodeid,
                                router: this.$router
                            });
                        }
                    }
                    break;
                default:                    
                    this.$store.dispatch('setExpandFlagTrueAndSelectAndCloseOthers', category.nodeid);
                    this.$store.dispatch('setCurrentContext', {
                        context: category,
                        router: this.$router
                    });                    
                    break;
            }            
        }
    }    
}
</script>

<style scoped>
.menu {
    color: grey;
}
.category-container :active {
    color: black !important;
}
.menu :hover {
    background-color: #ffd875;
    font-weight: 700;
}

.category-container {
    position: relative;
    display: block;
    padding: 12px 20px;        
    cursor: pointer;
}

.category-icon{
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
}

.category-name-selected {
    font-weight: 700;    
}

.maincategory {
    opacity: 0.8;
}

.subcategory {
    opacity: 0.5;
}
</style>
