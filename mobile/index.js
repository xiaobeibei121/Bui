import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import RouterConfig from './router/router-config';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: RouterConfig
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
