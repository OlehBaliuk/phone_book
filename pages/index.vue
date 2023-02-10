<template>
    <MainPage />
</template>

<script>
import MainPage from '@/components/MainPage.vue';

export default {
    name: 'IndexPage',

    components: {
        MainPage,
    },

    async fetch({ store }) {
        await store.dispatch('getContacts');
    },
};
</script>

<style lang="scss">
@import '@/styles/_reset.scss';

.button {
    background-color: orange;
    border: none;
    border-radius: 5px;
    padding: 5px;
    min-width: 80px;
    height: 30px;
    margin: 0 5px;

    &:hover {
        cursor: pointer;
    }
}
</style>
