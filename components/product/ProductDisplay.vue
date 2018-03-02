<template>
  <div :class="nuxtContainerClasses">
      <div class="row">
          <div class="col-md-6">
              <img class="img-fluid" :src="product.imageUrl" :alt="product.name">
          </div>
          <div class="col-md-6">
              <h2 class="">{{product.name}}</h2>
              <h3>Price: ৳ {{ product.price }}</h3><br><br>
              <div class="row" v-if="product.availableVariant !== undefined">
                  <div class="col-md-12" v-for="(variant, index) in product.availableVariant" :key="index">
                      <h4>{{ variant.type }}</h4>
                      <div class="row">
                        
                            <nuxt-link v-for="(option,index) in variant.options" :key="index"
                             class="col-md-2" :class="{urlStyle: true, highlight: option.highlight, mute: option.mute}" 
                              :to="`/product${option.url}`">
                                {{ option.value }}
                            </nuxt-link>                                                        
                        
                      </div>
                    <br>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-5">
                      <div class="add-to-cart-container" @click="addToCart" >
                            <div>Add to Cart</div>
                      </div>
                  </div>
                  <div class="col-md-5">
                      <div class="add-to-cart-container" @click="buyNow" >
                            <div>Buy Now</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <h3>Description: </h3>
              <p>{{$store.getters.currentProduct.description}}</p>
          </div>
      </div>      
  </div>
</template>

<script>
export default {
    computed: {
        nuxtContainerClasses: function() {
            return {
                'col-lg-9 col-md-8 col-sm-6 col-xs-6': this.$store.getters.sidebarOpen,
                'col-lg-12 col-md-12 col-sm-12 col-xs-12': !this.$store.getters.sidebarOpen,
                'nuxt-container': true
            }
        },
        product() {
            const product = Object.assign({}, this.$store.getters.currentProduct);
            return product;
        }

    },
    methods: {
        addToCart() {
            this.$store.dispatch('addCartItem', this.product);
            // TODO: find a way to set current session cart data inside store
            window.localStorage.setItem('cartItems', JSON.stringify(this.$store.getters.cartItems));
        },
        buyNow() {
            this.$store.dispatch('addCartItem', this.product);
            this.$store.dispatch('toggleCart', true);
        }
    }
}
</script>

<style scoped>
.nuxt-container
{
    padding: 30px 40px;
}
h3 {
    font-weight: 300;
}
.highlight {
    border-color: #ffd875 !important;
}
.mute {
    border: 4px dashed lightgrey !important;
}
.mute a {
    color: grey;
}
a {
    text-decoration: none;
    color: black;
}
.urlStyle {
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 6px;
    margin: 3px 10px;    
    text-align: center;
    border: 4px solid lightgrey;
}

.add-to-cart-container {
    width: 100%;    
    height: 40px;      
    text-align: center;
    cursor: pointer;
    background-color: #ffd875;
    line-height: 40px;
    margin-left: -4px;
}

.add-to-cart-container :active {
    font-weight: 700;
    background-color: #f1b212;    
}
</style>

