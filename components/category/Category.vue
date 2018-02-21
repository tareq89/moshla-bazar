<template>
    <div>
        <div class="menu">
            <a :class="{ 'category-name-selected': isSelected, 'category-container': true }" v-on:click="expandOnceAndSelect">
                <span >{{ category.name }}</span>
                <span class="category-icon"  v-if="category.subcategories && category.subcategories.length > 0">
                    <span v-if="mainCategory" class="maincategory">
                        <icon name="chevron-circle-down" scale="1" :style="{verticalAlign: 'middle'}" v-if="!isSelected"></icon>
                        <icon name="chevron-circle-up" scale="1" :style="{verticalAlign: 'middle'}" v-if="isSelected"></icon>
                    </span>
                    <span v-else class="subcategory">
                        <icon name="plus" scale="1" :style="{verticalAlign: 'middle'}" v-if="!isSelected"></icon>
                        <icon name="minus" scale="1" :style="{verticalAlign: 'middle'}" v-if="isSelected"></icon>
                    </span>
                </span>
            </a>
        </div>
        <sub-category v-if="category.subcategories" :visible="!isSelected" :categories="category.subcategories"></sub-category>        
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
    data() {
        return {
            isSelected: false
        }
    },
    methods: {
        expandOnceAndSelect($event) {                        
            if($event.target.tagName === ('path' || 'svg')) {
                this.isSelected = !this.isSelected;
                console.log($event.target.tagName)
                console.log(this.isSelected)
            } else {
                this.isSelected = true;
            }
        }
    }    
}
</script>

<style scoped>

.category-container {
    position: relative;
    display: block;
    padding: 12px 20px;        
    cursor: pointer;
}

.category-icon{
    position: absolute;
    top: 11px;
    right: 11px;
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
