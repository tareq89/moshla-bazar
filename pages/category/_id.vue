<template>	
    <category-display />
</template>

<script>
import axios from '~/plugins/axios';
import CategoryDisplay from '../../components/categories/CategoryDisplay.vue';
export default {
    components: {
		'category-display': CategoryDisplay
	},  	
  	created() {
		axios.get('/categories')
			.then(({ data }) => {          				
				if(this.$store.getters.categories.length == 0) {
					this.$store.dispatch('setCategories', data);
					this.$store.dispatch('findAndSetContextByUrl', this.$route.params.id);
				}				
			});
  	}
}
</script>