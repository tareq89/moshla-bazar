<template>	
	<product-display></product-display>
</template>

<script>
import axios from 'axios';
import ProductDisplay from '../../components/product/ProductDisplay';
export default {
    components: {
		'product-display': ProductDisplay
	},
  	asyncData(context) {
		const productUrl = context.route.params.id;
		const apiBaseUrl = context.env.apiBaseUrl;
		let asyncdata = {};
		return axios.get(apiBaseUrl +'categories')
			.then((response) => {
				asyncdata = {
					apiBaseUrl: apiBaseUrl,
					categories: response.data
				};
				return axios.get(apiBaseUrl +'product/' + productUrl)
			})
			.then((response) => {
				asyncdata.product = response.data;
				console.log(asyncdata)
				return { asyncdata };
			});
  	},
  	created() {		  
		this.$store.dispatch('setApiBaseUrl', this.asyncdata.apiBaseUrl);			
		this.$store.dispatch('setCurrentProduct', this.asyncdata.product);
		if(this.$store.getters.categories.length == 0) {
			this.$store.dispatch('setCategories', this.asyncdata.categories);            
		}
  	}
}
</script>