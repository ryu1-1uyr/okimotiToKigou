import Vue from 'vue'
import layout from './layout.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(layout) },
}).$mount('#app')
