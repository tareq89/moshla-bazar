<template>
    <div>
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
      click: function(nodeid) {
            this.$store.dispatch('setExpandFlagTrueAndSelectAndCloseOthers', nodeid);
            this.$store.dispatch('setCurrentContext', nodeid);            
      }
  }  
}
</script>
