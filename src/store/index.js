import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    number: 100
  },
  mutations: {
    // 同步方法
    SET_NUMBER(state, value) {
      state.number = value
    }
  },
  actions: {
    // 异步方法
    setNumber({ commit }, value) {
      commit('SET_NUMBER', value)
    }
  },
  modules: {
  }
})
