import Vue from 'vue'
import Button from './button.vue'

// Vue.component('g-button',Button)

new Vue({
    el:'#app',
    template:`<g-button />`,
    components:{
        'g-button':Button
    }
});
