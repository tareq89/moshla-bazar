<template>
    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 item">
        <img class="img-thumbnail" :src="item.imageUrl" :alt="item.name">
        <div class="details">
            <h5 class="text-center">{{ item.name }}</h5>
            <h4 class="text-center">৳ {{ item.price }}</h4>
            <div class="add-to-cart-container" v-if="item.variant.length == 0">
                <span @click="addToCart" class="add-to-cart">Add to Cart</span>
            </div>
            <div class="show-variant-container" v-if="item.variant.length > 0">
                <span @click="showVariant" class="add-to-cart options">More Options . . .</span>
            </div>
            <variant-modal v-if="showModal" :item="$store.getters.currentlySelectedProductWithVariants"></variant-modal>
        </div>
    </div>
</template>


<script>
import VariantModal from './VariantModal.vue';
export default {
    props: ['item'],
    components: {
        'variant-modal': VariantModal
    },
    methods: {
        showVariant() {            
            this.$store.dispatch('showMoreOptionsOfCurrentProduct', this.currentItem);
        },        
        addToCart() {
            this.$store.dispatch('addCartItem', this.currentItem);            
        }
    },
    computed: {
        currentItem() {            
            const item = Object.assign({}, this._props.item);
            return item;
        },
        showModal() {
            if(Object.keys(this.$store.getters.currentlySelectedProductWithVariants).length > 0) {
                return true;
            } return false;
        }
    },
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
.options {
    background-color: #edad77;
}

.show-variant-container :active{
    font-weight: 700;
    background-color: #f1b212; 
}
.add-to-cart-container :active {
    font-weight: 700;
    background-color: #f1b212;    
}
</style>
