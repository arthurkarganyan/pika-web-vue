import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'
import axios from "/web_modules/axios/dist/axios.js"
import VueRouter from '/web_modules/vue-router/dist/vue-router.esm.browser.js'

Vue.use(httpVueLoader);
Vue.use(VueRouter)

Vue.prototype.$http = axios;

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: httpVueLoader('/components/todo.vue') }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  el: '#app',
  components: {
    'app': 'url:./components/app.vue'
  },
  template: '<app></app>',
  router
});
