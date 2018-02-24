<template>	   
	<div class="row">
		<sidebar v-if="$store.getters.sidebarOpen" :categories="$store.getters.categories"/>
		<div id="nuxt-container" :class="nuxtContainerClasses">
      <category-nested-link />
			<section class="nuxt-container">
				<div>
					<category-display />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Sidebar from '../components/Sidebar.vue';
import CategoryNestedLink from '../components/contents/CategoryNestedLink';
import CategoryDisplay from '../components/contents/CategoryDisplay.vue';
import axios from 'axios';

export default {
  components: {
	'logo': Logo,	
    'sidebar': Sidebar,
    'category-nested-link': CategoryNestedLink,
    'category-display': CategoryDisplay
  },
  computed: {
    nuxtContainerClasses: function() {
      return {
        'col-lg-9 col-md-8 col-sm-6 col-xs-6': this.$store.getters.sidebarOpen,
        'col-lg-12 col-md-12 col-sm-12 col-xs-12': !this.$store.getters.sidebarOpen
      }
    }
  },
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
.nuxt-container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
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
