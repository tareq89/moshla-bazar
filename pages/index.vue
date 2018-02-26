<template>	
	<category-display />
</template>

<script>
import axios from 'axios';
import CategoryDisplay from '../components/contents/CategoryDisplay.vue';
export default {
	components: {
		'category-display': CategoryDisplay
	},
  	asyncData(context) {	  	
		return axios.get('http://0.0.0.0/api/categories')
			.then((response) => {          
				let categories = response.data;				
				return { categories };
			});
  	},
  	created() {		
		if(this.$store.getters.categories.length == 0) {
			this.$store.dispatch('setCategories', this.categories); 
		}    
  	}
}
</script>