<template>
  <div id="app">
    <div> {{all_money}} </div>
    <ChangeCash></ChangeCash>
    <AddIncome v-show="this.state.show_add_incom_page"></AddIncome>
    <AddExpense v-show="this.state.show_add_expense_page"></AddExpense>
  </div>
</template>

<script>
 import ChangeCash from './components/ChangeCash.vue'
 import AddIncome from './components/AddIncome.vue'
 import AddExpense from './components/AddExpense.vue'

export default {
  name: 'app',
  components: {
     ChangeCash,
     AddIncome,
     AddExpense

  },
  computed: {
    state() { return this.$store.state; },
    all_money() { return this.state.all_money }
  }
}
</script>

<style>
</style>
