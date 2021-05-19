import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import router from './router'
import VueSmoothScroll from 'vue2-smooth-scroll'
import vuetify from './plugins/vuetify'
Vue.use(VueSmoothScroll)

library.add(faFacebookF)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// import { BootstrapVue } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
