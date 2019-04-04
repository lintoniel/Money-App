<template>
    <div>
        <button @click="showAddIncomePage">+</button>
        <button @click="showAddExpensePage">-</button>
    </div>
</template>

<script>
export default {
    name: 'ChangeCash',
    methods: {
        /**
         * Показываем страницу для добавления доходов
         */
        showAddIncomePage() {
            this.$store.commit('changeVisiblityAddIncomPage', true);
            history.pushState('{ page : addIncome}', 'addIncome', '#addIncome');
        },
        /**
         * Показывает страницу для записи расходов
         */
        showAddExpensePage() {
            this.$store.commit('changeVisiblityAddExpensePage', true);
            history.pushState('{ page : addExpense}', 'addExpense', '#addExpense');
        }
    }

}
</script>