<template>
	<div class="container-fluid">
		<cart />
		<topbar />
		<div class="row">
			<sidebar v-if="$store.getters.sidebarOpen" :categories="$store.getters.categories"/>
			<nuxt/>     
		</div>
	</div>
</template>


<script>
import Topbar from '../components/Topbar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import Cart from '../components/cart/Cart.vue';

export default {
	components: {
		'topbar': Topbar,
		'sidebar': Sidebar,
		'cart': Cart
	}
}
</script>

<style>
html
{
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
*, *:before, *:after
{
	box-sizing: border-box;
	margin: 0;
}
.button--green
{
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}
.button--green:hover
{
	color: #fff;
	background-color: #3b8070;
}
.button--grey
{
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}
.button--grey:hover
{
	color: #fff;
	background-color: #35495e;
}

#nuxt-container {
	position: relative;
}
</style>
