<template>
    <div>
        <Header />
        <main class="main">
            <ContactsList />
            <CreateContact />
            <button class="button" @click="onOpenCreateModal()">Create contact</button>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CreateContact from '@/components/createContact/CreateContact.vue';
import ContactsList from '@/components/contactsList/ContactsList.vue';

export default {
    name: 'IndexPage',

    components: {
        Header,
        CreateContact,
        ContactsList,
    },

    async fetch({ store }) {
        await store.dispatch('getContacts');
    },

    methods: {
        onOpenCreateModal() {
            this.$store.dispatch('onChangeStatusCreateModal');
        },
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

.main {
    text-align: center;
}
</style>
