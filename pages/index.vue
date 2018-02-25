<template>	
  <router-view></router-view>
</template>

<script>
import axios from 'axios';

export default {
  asyncData() {
    return axios.get('http://127.0.0.1:3000/api/categories')
        .then((response) => {          
          let categories = response.data;
            return { categories };
        });
  },
  created() { 
    this.$store.dispatch('setCategories', this.categories); 
  }
}
</script>

<style scoped>

.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
