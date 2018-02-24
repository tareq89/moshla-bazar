<template>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-left">{{ category.name }}</h3>
        </div>
        <sub-category-item v-for="n in numbers" :key="n" :name="category.name + ' ' + n"/>
    </div>
</template>


<script>
import SubCategoryItem from './SubCategoryItem.vue';
export default {
  props: ['category'],
  components: {
      'sub-category-item': SubCategoryItem
  },
  data() {
      return {
          numbers: [1,2,3,4,5]
      }
  }
}
</script>


<style scoped>
h3 {
    white-space: nowrap;
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
</style>
