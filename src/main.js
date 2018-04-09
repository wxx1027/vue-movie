import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueLazyLoad from 'vue-lazyload'; 

import 'common/stylus/index.styl'; 

Vue.use(VueLazyLoad, {
  loading: require('./common/image/loading.gif')
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
