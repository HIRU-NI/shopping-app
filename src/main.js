import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#FFB300'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
