// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
/*import Vant from 'vant'
import "vant/lib/index.css"
Vue.use(Vant);*/
//使用babel-plugin-inport
/*import {Tabbar, TabbarItem,Icon} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon);
Vue.config.productionTip = false;
/* eslint-disable no-new */
import {Icon,Tabbar,TabbarItem,Lazyload,Search} from 'vant';
Vue.use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Search);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
let winW=document.documentElement.clientWidth||document.body.clientWidth;
document.documentElement.style.fontSize=winW/640*100+"px";
