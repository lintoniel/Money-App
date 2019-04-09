<template>
    <div>
        <div>Категории</div>
        <button @click="addCategory">Добавить категорию</button>
        <AddCategory v-show='add_category_visible'></AddCategory>
    </div>
</template>

<script>
import AddCategory from './AddCategory.vue'

export default {
    name: 'ChooseCategory',
    components: {
        AddCategory
    },
    methods: {
        addCategory() {
            this.$store.commit('changeVisiblityAddCategory', true);
        }
    },
    computed: {
        add_category_visible() { return this.$store.state.add_category_visible}
    }
}
</script>

