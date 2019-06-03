import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#FFB300'
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
