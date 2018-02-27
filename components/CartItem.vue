<template>
    <div class="cart-item">
        <div class="remove-button">
            <span>
                <icon name="remove" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
            </span>
        </div>
        <div>
            <div>
                <div></div>
                <img src="https://placeimg.com/400/300/any?2-0.5" alt="">
            </div>
            <div><a href="/product/t-shirt-batman" class="_3jADJAoCoJ_0">Batman T-shirt</a></div>
        </div>
        <div>
            <div>৳ 250</div>
            <div style="margin-top:10px">
                <div disabled="disabled" class="button">
                    <span>
                        <icon name="minus-circle" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
                    </span>
                </div>
                <div class="button">
                    <span>1</span>
                </div>
                <div class="button">
                    <span>
                        <icon name="plus-circle" scale="1" :style="{ verticalAlign: 'middle'}"></icon>
                    </span>
                </div>
            </div>
            <div style="float:right">৳ 250</div>
        </div>            
    </div>
</template>

<script>
import 'vue-awesome/icons/plus-circle'
import 'vue-awesome/icons/minus-circle'
import 'vue-awesome/icons/remove'
export default {
  
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
