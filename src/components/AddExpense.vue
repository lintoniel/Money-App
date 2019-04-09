<template>
    <div>
        <div>
            Добавить расход
        </div>
        <ChooseCategory></ChooseCategory>
    </div>
</template>

<script>
import ChooseCategory from './ChooseCategory.vue'

export default {
    name: 'AddExpense',
    components: {
         ChooseCategory
    }
}
</script>
