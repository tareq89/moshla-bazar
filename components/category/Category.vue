<template>
    <li>
        <div class="category-container" 
            :class="{ 'category-name-selected': isSelected }">
            <span>{{ category.name }}</span>
            <span class="category-icon" 
                    v-on:click="toggleSelect" 
                    v-if="category.subcategories && category.subcategories.length > 0">
                <icon name="chevron-circle-down" scale="1" 
                 :style="{verticalAlign: 'middle'}" v-if="!isSelected"></icon>
                <icon name="chevron-circle-up" scale="1" v-if="isSelected"
                 :style="{verticalAlign: 'middle'}"></icon>
            </span>
        </div>
        <sub-category v-if="category.subcategories" :visible="!isSelected"
        :categories="category.subcategories"></sub-category>        
    </li>
</template>

<script>
import 'vue-awesome/icons/chevron-circle-down';
import 'vue-awesome/icons/chevron-circle-up';
import SubCategory from './SubCategory.vue';

export default {
    name: 'category',
    props: ['category'],
    data() {
        return {
            isSelected: false
        }
    },
    methods: {
        toggleSelect() {
            console.log("Should show the list? " + this.isSelected);
            this.isSelected = !this.isSelected;
        }
    }
}
</script>

<style scoped>
.category-container {
    position: relative;
    display: block;
    padding: 12px 20px;    
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
}
.category-name-selected {
    font-weight: 700;
    background-color: sandybrown;
}

.category-icon{
    position: absolute;
    top: 11px;
    right: 11px;
    cursor: pointer;
}
</style>
