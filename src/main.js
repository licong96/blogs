import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VApp from 'vuetify/es5/components/VApp'
// import Vuetify from 'vuetify/es5/components/Vuetify'
// import transitions from 'vuetify/es5/components/transitions'
// import directives from 'vuetify/es5/directives'
// import VBtn from 'vuetify/es5/components/VBtn'

import './assets/scss/reset.scss'
import './assets/css/bootstrap-grid.css'
import './assets/scss/common.scss'

// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     Vuetify,
//     VBtn,
//   },
//   directives,
//   transitions,
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
