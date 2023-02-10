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
import CreateContact from '@/components/CreateContact.vue';
import ContactsList from '~/components/ContactsList.vue';
import Modal from '@/components/sharedComponents/Modal.vue';
import EditContact from '@/components/EditContact.vue';

export default {
    name: 'MainPage',

    components: {
        Header,
        CreateContact,
        ContactsList,
        Modal,
        EditContact,
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
.main {
    text-align: center;
}
</style>
