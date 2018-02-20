<template>
  <ul v-bind:class="{ hidden: visible }">
      <category class="danechap" v-for="(category, index) in categories"  
            v-bind:key="index" :category="category"></category>
  </ul>
</template>

<script>
import Category from './Category.vue';

export default {    
    props: ['categories', 'visible'],
    created() {
        console.log("prop visible initial value - ", this._props.visible);
    },
    beforeUpdate() {
        console.log("prop updated - ", this._props.visible);
    }
}
</script>


<style>
ul {
    list-style: none;
    width: 16vw;
    padding-left: 0;    
}

.hidden {
    display: none;
}

.danechap {
    margin-left: 30px;
}
</style>
