import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusLog : false
  },
  mutations: {
    changeStatusLogin(state, payload){
      state.statusLog = payload;
    }
  },
  actions: {

  }
})
