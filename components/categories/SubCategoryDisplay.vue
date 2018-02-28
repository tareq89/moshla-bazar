<template>
    <div class="row">
        <div class="col-md-12" v-show="items.length > 0">
            <h3 class="text-left">{{ category.name }}</h3>
        </div>
        <sub-category-item v-for="item in items" :key="item.id" :item="item" v-show="items.length > 0"/>
        <div class="spinner" v-show="items.length == 0"><icon name="spinner" pulse scale="5"></icon></div>
    </div>
</template>


<script>
import axios from 'axios';
import SubCategoryItem from './SubCategoryItem.vue';
import 'vue-awesome/icons/spinner';
export default {
    props: ['category'],
    created() {
        this.getItems();      
    },
    data() {
        return {
            items: []
        }
    },
    components: {
        'sub-category-item': SubCategoryItem
    },
    methods: {
        getItems(){            
            return axios.get(this.$store.getters.apiBaseUrl + `items?name=${this._props.category.name}`)
                .then((response) => {
                    this.items = response.data;
                });      
        }
    }
}
</script>


<style scoped>
h3 {
    white-space: nowrap;
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 10px;
}

img {
    padding: 4px;
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 10vw;
    height: auto;
}

.spinner {
    margin: 100px auto;
}
</style>
