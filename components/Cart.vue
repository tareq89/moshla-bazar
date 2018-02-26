<template>
  <div id="cart">
        <div id="cart-summary" @click="toggle" v-show="showSummaryCart">
            <div class="text-center">
                <span>
                    <icon name="shopping-cart" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
                </span>
            </div>
            <div class="text-center">{{ 0 }} Items</div>
            <div id="summary-taka" class="text-center">{{ 0 }} taka</div>
        </div>
        <div id="full-page-opacity" v-show="showMainCart" @click="toggle">
        </div>
        <div id="cart-body" v-show="showMainCart">
            <div id="cart-body-title">Shopping Cart</div>
            <div id="cart-body-close" @click="toggle">
                <icon name="arrow-circle-o-right" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
            </div>

            <cart-item />
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
    data() {
        return {
            showMainCart: false,
            showSummaryCart: true,
        }
    },
    methods: {
        toggle() {
            this.showMainCart = !this.showMainCart;
            this.showSummaryCart = !this.showSummaryCart;
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
    top: 50px;
    right: 0;       
    height: 100vh;
    width: 15vw;
    background-color: white;
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
</style>
