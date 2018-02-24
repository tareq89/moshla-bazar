<template>
    <div>
        <h1>{{ $store.getters.currentContext.name }}</h1>
        <div v-for="(category, index) in $store.getters.currentContext.subcategories" :key="index">
            {{ category.name }}
        </div>        
    </div>
</template>

<script>
export default {
  
}
</script>
