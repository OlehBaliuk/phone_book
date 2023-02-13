<template>
    <div class="container">
        <p class="title">Sort:</p>
        <button @click="sortAsc" class="button asc"></button>
        <button @click="sortDesc" class="button desc"></button>
    </div>
</template>

<script>
export default {
    name: 'SortContacts',

    methods: {
        sortAsc() {
            this.$store.commit('sortAsc');
        },

        sortDesc() {
            this.$store.commit('sortDesc');
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    min-width: 30px;

    &.active {
        color: grey;
    }
}

.title {
    font-size: 24px;
}

.asc::before {
    content: '🡅';
}

.desc::before {
    content: '🡇';
}
</style>
