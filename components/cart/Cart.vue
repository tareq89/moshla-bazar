<template>
  <div id="cart">
        <div id="cart-summary" @click="toggle" v-show="!$store.getters.cartOpen">
            <div class="text-center">
                <span>
                    <icon name="shopping-cart" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
                </span>
            </div>
            <div class="text-center">{{ totalItems }} Items</div>
            <div id="summary-taka" class="text-center">৳ {{ totalPrice }}</div>
        </div>

        <div id="full-page-opacity" v-show="$store.getters.cartOpen" @click="toggle"></div>

        <div id="cart-body" v-show="$store.getters.cartOpen">
            <div id="cart-body-title">Shopping Cart</div>
            <div id="cart-body-close" @click="toggle">
                <icon name="arrow-circle-o-right" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
            </div>
            <div class="text-center" v-show="totalItems > 0">
                <span>
                    <b>Total Item: {{ totalItems }}</b>
                </span>
            </div>

            <cart-item v-for="item in $store.getters.cartItems" :key="item.id" :item="item"/>

            <div id="check-out" v-show="totalItems > 0">
                <div id="total-taka">
                    <div>  Total : ৳ {{ totalPrice }}</div>
                </div>                
                <div class="place-order">
                    <div>Place Order</div>                    
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/shopping-cart';
import 'vue-awesome/icons/arrow-circle-o-right';
import CartItem from './CartItem';
export default {
    components: {
        'cart-item': CartItem
    },
    computed: {
        totalItems() {
            let totalItem = 0;
            for(let item of this.$store.getters.cartItems) {
                totalItem += item.amount;
            }
            return totalItem;
        },
        totalPrice() {
            let totalprice = 0;
            for(let item of this.$store.getters.cartItems) {
                totalprice += item.totalPrice;
            }
            return totalprice;
        }
    },
    methods: {
        toggle() {
            this.$store.dispatch('toggleCart', !this.$store.getters.cartOpen)
        }
    }
}
</script>


<style scoped>


#cart-summary {    
    z-index: 100;    
    right: 0;
    position: fixed;
    top: 45%;
    background-color: #ffd875;
    height: 85px;
    width: 75px;
    font-size: .9em;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}

#summary-taka {
    background-color: seashell;
    vertical-align: middle;
    line-height: 30px;
    text-align: center !important;
    border-radius: 0px 0px 6px 6px;  
}

#full-page-opacity {
    z-index: 50;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: .5;

}

#cart-body { 
    z-index: 100;
    position: fixed;    
    right: 0;       
    height: 100vh;
    width: 15vw;
    background-color: white;
    overflow: auto;
}

#cart-body-title {
    margin: auto;
    display: block;
    font-weight: 700;
    text-align: center;
    background-color: aquamarine;
    padding: 20px;
    background-color: #f79a64;
}

#cart-body-close {
    position: absolute;    
    top: 16px;
    right: 13px;
    cursor: pointer;
}

#check-out {
    margin-top: -12px;    
    height: 100px;
    padding: 10px;
}
#total-taka {
    text-align: right;
    font-size: 16px;
    margin: 0px 15px 10px 0px;
}
.place-order {
    background-color: tomato;
    border: 1px solid black;
    line-height: 50px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}
div.place-order :active {
    background-color: red !important;

}
</style>
