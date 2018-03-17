<template>	
	<category-display />
</template>

<script>
import axios from '~/plugins/axios';
import CategoryDisplay from '../components/categories/CategoryDisplay.vue';
export default {
	components: {
		'category-display': CategoryDisplay
	},
  	created() {
		axios.get('/categories')
		.then(({ data }) => {          				
			this.$store.dispatch('setCategories', data);
		});
  	}
}
</script>