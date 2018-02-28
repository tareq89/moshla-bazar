<template>	
	<category-display />
</template>

<script>
import axios from 'axios';
import CategoryDisplay from '../components/categories/CategoryDisplay.vue';
export default {
	components: {
		'category-display': CategoryDisplay
	},
  	asyncData(context) {		
		const apiBaseUrl = context.env.apiBaseUrl;
		return axios.get(apiBaseUrl +'categories')
			.then((response) => {          
				let asyncdata = {
					apiBaseUrl: apiBaseUrl,
					categories: response.data
				} 
				return { asyncdata };
			});
  	},
  	created() {		  
		if(this.$store.getters.categories.length == 0) {
			this.$store.dispatch('setApiBaseUrl', this.asyncdata.apiBaseUrl);
            this.$store.dispatch('setCategories', this.asyncdata.categories);            
		}
  	}
}
</script>