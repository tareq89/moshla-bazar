<template>
    <div id="side-bar" class="col-md-2">
        <ul>
            <li v-for="(category, index) in categories" :key="index">{{ category.name }}</li>           
        </ul>
    </div>      
</template>

<script>


export default {
    props: ["categories"],
    data() {
        console.log("************")
        console.log(this.props)
        return {};
    }
}
</script>

<style scoped>
ul {
}

#side-bar {    
    border-right: 1px solid rgb(176, 172, 163);    
    width: 100%;
    height: 100vh;
}
</style>
