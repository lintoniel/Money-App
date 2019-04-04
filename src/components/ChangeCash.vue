<template>
    <div>
        <button @click="showAddMoneyPage">+</button>
        <button>-</button>
    </div>
</template>

<script>
export default {
    name: 'ChangeCash',
    methods: {
        /**
         * Показываем страницу для добавления денег
         */
        showAddMoneyPage() {
            this.$store.commit('changeVisiblityAddMoneyPage', true);
            history.pushState('{ page : addMoney}', 'addMoney', '#addMoney');
        }
        
    }

}
</script>