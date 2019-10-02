import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto/src/scrollTo'
import Slider from '@jeremyhamm/vue-slider'


import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.use(Slider);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
