import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
    el: '#app',
    router,
    components:{
        'header-component':HeaderComponent,
        'footer-component':FooterComponent,
    }
});
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

