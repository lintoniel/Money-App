import Vue from 'vue'
import Vuex from 'vuex'
import {expenseStore} from './modules/expenseStore.js'
import {incomeStore} from './modules/incomeStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_money: 0,
    show_add_incom_page: false,
    show_add_expense_page: false, 
    add_category_visible: false
  },
  mutations: {
    changeVisiblityAddIncomPage(state, value) {
      this.state.show_add_incom_page = value;
    },
    changeVisiblityAddExpensePage(state, value) {
      this.state.show_add_expense_page = value;
    },
    changeVisiblityAddCategory(state, value) {
      this.state.add_category_visible = value;
    }
  },
  actions: {

  },

  modules: {
    expenseStore,
    incomeStore
  }
})
