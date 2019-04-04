import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMoney: 0,
    show_add_incom_page: false,
    show_add_expense_page: false, 
  },
  mutations: {
    changeVisiblityAddIncomPage(state, value) {
      this.state.show_add_incom_page = value;
    },
    changeVisiblityAddExpensePage(state, value) {
      this.state.show_add_expense_page = value;
    }
  },
  actions: {

  }
})
