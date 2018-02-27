<template>
    <transition name="modal">
        <div>
            <div class="modal-mask" @click="hideVariant"></div>
            <div class="modal-wrapper">
                <div class="modal-container">
                    {{item}}
                    <div class="modal-header">
                        <h1>{{item.name}}</h1>
                        <img :src="item.imageUrl" alt="item.name">
                    </div>

                    <div class="modal-body">
                        <div>
                            <!-- Price -->
                        </div>
                    </div>

                    <div class="modal-footer">                    
                        <button class="modal-default-button" @click="hideVariant">
                            OK
                        </button>                    
                    </div>
                </div>
            </div>        
        </div>
    </transition>
</template>

<script>
export default {
    props: ['item'],
    methods: {
            hideVariant() {
                this.$store.dispatch('hideMoreOptionsOfCurrentProduct');
            }
    }
}
</script>


<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .3;
    background-color: rgba(0, 0, 0, .5);    
    transition: opacity .7s ease;
}

.modal-wrapper {
    position: fixed;
    top: 20%;
    bottom: 50%;
    left: 0;
    right: 0;
    z-index: 9999;
    visibility: visible;
    transform: visibility .7x ease;
    vertical-align: middle;
}

.modal-container {
    width: 50%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}
</style>
