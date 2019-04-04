import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMoney: 0,
    showAddMoneyPage: false,
    newTestProperty: 0, 
  },
  mutations: {
    changeVisiblityAddMoneyPage(state, value) {
      this.state.showAddMoneyPage = value;
    }
  },
  actions: {

  }
})
