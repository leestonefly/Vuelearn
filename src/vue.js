var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: "页面加载于" + new Date().toLocaleDateString()
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        offsetButton: function () {
            this.seen = !this.seen
        }
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todo: [
            {text: '学习JavaScript'},
            {text: '学习 Vue'},
            {text: '整个NB项目'}
        ]
    }
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join("")
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue'
    }
});
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'vegetable'},
            {id: 1, text: 'nailao'},
            {id: 2, text: 'food'}
        ]
    }
});
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    // computed:{
    //     reversedMessage:function () {
    //         return this.message.split('').reverse().join('')
    //     }
    // },
    methods: {
        reversedMessage() {
            return this.message.split('').reverse().join('')
        }
    }
});
var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
    },
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //     }
    // },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1]
            }
        }
    }
});

