<template>
    <div>
        <div>
            Добавить доход
        </div>
        <ChooseCategory></ChooseCategory>
    </div>
</template>

<script>
import ChooseCategory from './ChooseCategory.vue'

export default {
    name: 'AddIncome',
    components: {
         ChooseCategory
    }
}
</script>
