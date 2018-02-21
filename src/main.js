// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import Notifications from 'vue-notification'

import App from './components/app'

import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'

const VueProgressBarOptions = {
  color: '#00ffa8',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  location: 'top'
}


Vue.use(VueProgressBar, VueProgressBarOptions)


Vue.use(Notifications)

Vue.use(VueRouter)

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && (!router.app.$store.state.token || router.app.$store.state.token === 'null')) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

sync(store, router)

// Check local storage to handle refreshes
if (window.localStorage) {
  store.commit('SET_TOKEN', window.localStorage.getItem('token'))
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
