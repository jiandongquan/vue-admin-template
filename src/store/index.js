import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

// 启用全局状态存储管理
const store = new Vuex.Store({
  modules: {
    app, // 应用相关的状态管理模块
    permission, // 权限相关的状态管理模块
    settings, // 全局设置相关的状态管理模块；
    user // 用户相关的状态管理模块；
  },
  getters // 统一输出状态值的getter函数
})

export default store
