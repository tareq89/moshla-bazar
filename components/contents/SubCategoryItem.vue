<template>
    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 item">
        <img class="img-thumbnail" :src="item.imageUrl" :alt="item.name">
        <div class="details">
            <h5 class="text-center">{{ item.name }}</h5>
            <h4 class="text-center">৳ {{ item.price }}</h4>
            <div class="add-to-cart-container">
                <span @click="addToCart" class="add-to-cart">Add to Cart</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['item'],
    methods: {
        addToCart() {
            const item = Object.create(this._props.item);            
            this.$store.dispatch('addCartItem', item);            
        }
    }    
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
    height: 40px;
    line-height: 40px;
    border-radius: 0px 0px 5px 5px;;
    position: absolute;    
    text-align: center;
    cursor: pointer;    
    background-color: #ffd875;
}

.add-to-cart-container :active {
    font-weight: 700;
    background-color: #f1b212;    
}
</style>
