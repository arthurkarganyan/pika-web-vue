import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'
import axios from "/web_modules/axios/dist/axios.js"

Vue.use(httpVueLoader);

Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  components: {
    'app': 'url:./components/app.vue'
  },
  template: '<app></app>'
});
