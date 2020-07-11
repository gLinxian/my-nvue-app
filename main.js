import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

/**
 * 1.nvue 暂不支持任何全局注册
 * 
 * 2.globalData 和 vuex 同时支持 vue 页面和 nvue 页面
 * 
 * 3.nvue 的居中只能使用 flex
 */
