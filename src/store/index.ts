import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count += 1
    }
  }
})

store.commit('increment')
console.log(store.state.count)

export default store
