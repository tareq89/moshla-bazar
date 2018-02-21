<template>
  <div v-bind:class="{ visible: visible }">
      <category class="danechap" v-for="(category, index) in categories"  
            v-bind:key="index" :category="category" :shouldHighlightList="!visible"></category>
  </div>
</template>

<script>
import Category from './Category.vue';

export default {    
    props: ['categories', 'visible'] 
}
</script>


<style>
ul {
    list-style: none;    
    width: 100%;
    padding-left: 0;    
    background-color: white !important;
}

.visible {
    display: none;
}

.danechap {
    margin-left: 30px;
    border-left: 1px solid black;
}

</style>
