<template>	
    <category-display />
</template>

<script>
import axios from 'axios';
import CategoryDisplay from '../../components/contents/CategoryDisplay.vue';
export default {
    components: {
		'category-display': CategoryDisplay
	},
  	asyncData(context) {		
		const apiBaseUrl = context.env.apiBaseUrl;
		return axios.get(apiBaseUrl +'categories')
			.then((response) => {          
				let categories = response.data;				
				return { categories };
			});
  	},
  	created() {		
		if(this.$store.getters.categories.length == 0) {
            this.$store.dispatch('setCategories', this.categories);            
            this.$store.dispatch('findAndSetContextByUrl', this.$route.params.id);
		}
  	}
}
</script>