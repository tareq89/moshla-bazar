<template>
    <div>
        <span> 
            <a v-on:click="clickAllCategory()">
                <span>All Categories</span>
                <span v-if="currentContextLength">{{ ' > ' }}</span>
            </a> 
        </span>
        <span v-for="(root, index) in $store.getters.currentContext.immediateroots" :key="index"> 
            <a v-on:click="click(root.nodeid)">
                <span>{{root.name}}</span>
                <span v-if="index < $store.getters.currentContext.immediateroots.length-1">{{ ' > ' }}</span>
            </a> 
        </span>
    </div>
</template>

<script>
export default {
  methods: {
      clickAllCategory: function() {
            this.$store.dispatch('closeAllMenue');
            this.$store.dispatch('setCurrentContext', {});
      },
      click: function(nodeid) {            
            this.$store.dispatch('setCurrentContext', nodeid);
      }
  },
  computed: {
      currentContextLength () {
          const length = Object.keys(this.$store.getters.currentContext).length;
          console.log(length>0)
          return (length > 0);
      }
  }  
}
</script>


<style scoped>
span {
    font-weight: 600;
    cursor: pointer;
    color: grey;
}

span :active {
    color: black;
}
</style>
