<template>
    <div class="row" id="topbar">
        <div>
            <button id="menu-bar-button" v-on:click="$store.dispatch('toggleSidebar')">
                <icon name="bars" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
            </button>
        </div>
        <div id="home" class="col-md-1">
            <h2>Deligram</h2>
        </div>
        <div class="col-md-7">
            <b-input-group id="search-group">
                <b-form-input placeholder="search for mashla ex: gorom moshla"></b-form-input>
                <b-input-group-addon>
                    <button id="search-bar-button">
                        <icon name="search" scale="2" :style="{ verticalAlign: 'middle'}"></icon>
                    </button>
                </b-input-group-addon>
            </b-input-group>
        </div>
        <div class="col-md-1 help-link">
            <nuxt-link to="/about">Need Help?</nuxt-link>
        </div>
        <div class="col-md-1 help-link">
            <nuxt-link to="/about"><span>EN</span>| <span>বাং</span></nuxt-link>
        </div>
        <div id="sign-in" class="col-md-1 help-link">
            <nuxt-link to="/about">Sign in</nuxt-link>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import 'vue-awesome/icons/bars';
import 'vue-awesome/icons/search';
import Icon from "vue-awesome/components/Icon";

Vue.component('icon', Icon);

export default {

}
</script>

<style scoped>
#home {
    margin: auto;
    display: block;
}
h2 {
    font-style: italic;
    font-weight: bolder;    
}
#topbar {    
    background-color: #ffd875;
}
#menu-bar-button {    
    background-color: #ffd875;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
}

button:active,
button:hover,
button:focus {
    outline: 0px !important;  
}

input {
    border: none;
}
#search-group {
    margin-top: 6px;
}
#search-bar-button {
    border: none;
    background-color: white;
    border-radius: 0px 0.25rem 0.25rem 0px;
    height: 100%;
}

icon {
    vertical-align: middle;
}

.help-link {
    border-left: 1px solid #ECC766;
}

a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    color: black;
    white-space: nowrap;
}

#sign-in {
    background-color: #ff686e;
}
</style>
