import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/font/iconfont.js'
import './assets/scss/reset.scss'
import './assets/css/bootstrap-grid.css'
import './assets/scss/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
