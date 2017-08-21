// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import "expose-loader?$!expose-loader?jQuery!jquery";
import semantic from "semantic-ui-css/semantic.min.css";
import axios from "axios";
import VueRouter from "vue-router";


import Mainpage from './components/Mainpage'

Vue.prototype.$http = axios;

Vue.use(semantic);
Vue.use(VueRouter);

const currency = require('./currency.json')

console.log(currency)

const routes = [{
        path: "/",
        redirect: "/main",
        component: App
    },
    {
        path: "/main",
        component: Mainpage,
        name: "Mainpage"
    }
];

const router = new VueRouter({
    mode: "hash",
    linkActiveClass: "active",
    routes
});

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
}).$mount('#app');