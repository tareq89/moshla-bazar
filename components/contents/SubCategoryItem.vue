<template>
    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 item">
        <img class="img-thumbnail" src="https://placeimg.com/400/300/any?3-1" alt="">
        <div class="details">
            <h5 class="text-center">{{ name }}</h5>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>
</template>


<script>
export default {
    props: ['name']    
}
</script>

<style scoped>
.item {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
    word-wrap: break-word;
    margin: 0px 21px 50px 22px;
    padding: 0;
}
.details {
    position: relative;
}
.add-to-cart {
    width: 100%;
    background-color: white;
    /* border: none;     */
    border-radius: 0px 0.25rem 0.25rem 0px;
    position: absolute;
}
.add-to-cart :active {
    background-color: grey;
    outline: 0px !important;
}
</style>
