<template>
  <div :class="nuxtContainerClasses">
      <div class="row">
          <div class="col-md-6">
              <img class="img-fluid" :src="$store.getters.currentProduct.imageUrl" :alt="$store.getters.currentProduct.name">
          </div>
          <div class="col-md-6">
              <h1 class="display-4">{{$store.getters.currentProduct.name}}</h1>
              <h3>Price: ৳ {{ $store.getters.currentProduct.price }}</h3>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <h3>Description: </h3>
              <p>{{$store.getters.currentProduct.description}}</p>
          </div>
      </div>
      <!-- {{$store.getters.currentProduct}} -->
  </div>
</template>

<script>
export default {
    computed: {
        nuxtContainerClasses: function() {
            return {
                'col-lg-9 col-md-8 col-sm-6 col-xs-6': this.$store.getters.sidebarOpen,
                'col-lg-12 col-md-12 col-sm-12 col-xs-12': !this.$store.getters.sidebarOpen,
                'nuxt-container': true
            }
        },

    }
}
</script>

<style scoped>
.nuxt-container
{
    padding: 30px 40px;
}
h3 {
    font-weight: 300;
}
</style>

