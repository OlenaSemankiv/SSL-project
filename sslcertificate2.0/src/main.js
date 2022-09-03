import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { MdButton, MdCard,MdRipple, MdContent, MdMenu, MdList, MdField, MdSnackbar  } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './plugins/vuetify'


Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdRipple)
Vue.use(MdContent)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdSnackbar)
// window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

