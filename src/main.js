import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/style.css'
Vue.config.productionTip = false

new Vue({
    created() {
        this.$store.dispatch('user/is_login')
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')