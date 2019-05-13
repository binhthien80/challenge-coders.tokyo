import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import { store } from '@/store/store'
import Toasted from 'vue-toasted'

Vue.use(Vuetify)
Vue.use(Toasted)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
