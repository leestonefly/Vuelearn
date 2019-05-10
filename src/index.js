import Vue from 'vue'
import MyButton from './vue/button'
Vue.component('g-button',MyButton);
new Vue({
    el: '#app',
    data: {
        message: 'hi'
    },
});

