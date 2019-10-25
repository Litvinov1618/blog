import Vue from 'vue';
import App from './components/App.vue'

const app = new Vue(App);

app.$mount('#app');
window.app = app;
