<template>
    <div class="container">
        <Header />
        <main class="main">
            <ContactsList />
            <Modal>
                <CreateContact v-if="getCreateContactStatus" />
                <EditContact v-if="getEditContactStatus" />
            </Modal>
            <button class="button" @click="onOpenCreateModal()">Create contact</button>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CreateContact from '~/components/CreateContact.vue';
import ContactsList from '@/components/contactsList/ContactsList.vue';
import Modal from '@/components/sharedComponents/Modal.vue';
import EditContact from '@/components/EditContact.vue';

export default {
    name: 'IndexPage',

    components: {
        Header,
        CreateContact,
        ContactsList,
        Modal,
        EditContact,
    },

    async fetch({ store }) {
        await store.dispatch('getContacts');
    },

    methods: {
        onOpenCreateModal() {
            this.$store.dispatch('onChangeStatusModal');
            this.$store.commit('showCreateContactForm');
        },
    },

    computed: {
        getEditContactStatus() {
            return this.$store.getters['editContactStatus'];
        },

        getCreateContactStatus() {
            return this.$store.getters['createContactStatus'];
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
