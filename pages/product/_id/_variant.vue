<template>	
	<product-display></product-display>
</template>

<script>
import axios from '~/plugins/axios';
import ProductDisplay from '../../../components/product/ProductDisplay';
export default {
    components: {
		'product-display': ProductDisplay
	},
  	created() {		  
		const id = this.$route.params.id;
		const variant = this.$route.params.variant;
		const productUrl = `${id}/${variant}`;		
		let asyncdata = {};
		return axios.get('/categories')
			.then((response) => {
				asyncdata = {					
					categories: response.data
				};
				return axios.get('/product/' + productUrl)
			})
			.then((response) => {
				asyncdata.product = response.data;				
				this.$store.dispatch('setCurrentProduct', asyncdata.product);
				if(this.$store.getters.categories.length == 0) {
					this.$store.dispatch('setCategories', asyncdata.categories);            
				}
			})
			.catch((error) => {
				
			});		
  	}
}
</script>