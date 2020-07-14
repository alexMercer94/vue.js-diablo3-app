import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.styl';
import './directives';
import './plugins/bootstrapVue';
import './plugins/fontAwesome';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    created() {
        this.init();
    },
    methods: {
        init() {
            store.dispatch('oauth/getToken');
        }
    },
    render: h => h(App)
}).$mount('#app');
