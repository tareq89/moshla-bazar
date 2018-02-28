<template>
  <div :class="nuxtContainerClasses">
      {{$store.getters.currentProduct}}
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
        }
    }
}
</script>
