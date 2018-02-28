<template>
    <div class="cart-item">        
        <div class="remove-button">
            <span @click="$store.dispatch('removeCartItem', {item: item, remove: true})">
                <icon name="remove" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
            </span>
        </div>
        <div>
            <div>
                <div></div>
                <img :src="item.imageUrl" alt="">
            </div>
            <div>{{ item.name }}</div>
        </div>
        <div>
            <div>৳ {{ item.price }}</div>
            <div style="margin-top:10px">
                <div :disabled="item.amount == 1" class="button">
                    <span @click="$store.dispatch('removeCartItem', {item: item, remove: false})">
                        <icon name="minus-circle" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
                    </span>
                </div>
                <div class="button">
                    <span>{{ item.amount }}</span>
                </div>
                <div class="button">
                    <span @click="$store.dispatch('addCartItem', item)">
                        <icon name="plus-circle" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
                    </span>
                </div>
            </div>
            <div style="float:right">৳ {{ item.totalPrice }}</div>
        </div>            
    </div>
</template>

<script>
import 'vue-awesome/icons/plus-circle'
import 'vue-awesome/icons/minus-circle'
import 'vue-awesome/icons/remove'
export default {
    props: ['item']
}
</script>


<style scoped>
.cart-item {
    height: 150px;
    padding: 10px;
    border: 1px solid grey;
    margin: 14px;
    font-size: 14px;
}
.close-button {
    cursor: pointer;
    position: absolute;
    right: 20px;
}
.remove-button {
    cursor: pointer;
    float: right;
}
.button {
    float: left;
    cursor: pointer;
    margin-right: 15px;
}
img {
    background-color: grey;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 30%;
    height: auto;
}
</style>
