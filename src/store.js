import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowNav: true,    // 是否显示导航
  },
  mutations: {
    setIsShowNav(state, bool) {
      state.isShowNav = bool
    }
  },
  actions: {
    setIsShowNav(context, bool) {
      context.commit('setIsShowNav', bool)
    }
  },
  getters: {
    getIsShowNav: state => state.isShowNav
  }
})
