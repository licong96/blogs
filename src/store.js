import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowNav: true,        // 是否显示导航
    PageColor: '#ef5350',   // 页面颜色
  },
  mutations: {
    setIsShowNav(state, bool) {
      state.isShowNav = bool
    },
    setPageColor(state, bool) {
      state.PageColor = bool
    },
  },
  actions: {
    setIsShowNav(context, bool) {
      context.commit('setIsShowNav', bool)
    },
    setPageColor(context, bool) {
      context.commit('setPageColor', bool)
    },
  },
  getters: {
    getIsShowNav: state => state.isShowNav,
    getPageColor: state => state.PageColor,
  }
})
