<template>
    <div class="container">
        <Header />
        <main class="main">
            <h1 class="title">My contacts</h1>
            <SearchContacts @onSearchInput="inputSearch" />
            <SortContacts v-if="!this.$store.getters['searchModeStatus']" />
            <ContactsList :searchList="getSearchList" />
            <Modal>
                <CreateContact v-if="getCreateContactStatus" />
                <EditContact v-if="getEditContactStatus" />
            </Modal>
            <button class="button-create button" @click="onOpenCreateModal()">Create contact</button>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CreateContact from '@/components/CreateContact.vue';
import ContactsList from '~/components/ContactsList.vue';
import Modal from '~/components/Modal.vue';
import EditContact from '@/components/EditContact.vue';
import SearchContacts from '@/components/SearchContacts.vue';
import SortContacts from '@/components/SortContacts.vue';

export default {
    name: 'MainPage',

    components: {
        Header,
        CreateContact,
        ContactsList,
        Modal,
        EditContact,
        SearchContacts,
        SortContacts,
    },

    data() {
        return {
            searchList: [],
        };
    },

    methods: {
        onOpenCreateModal() {
            this.$store.dispatch('onChangeStatusModal');
            this.$store.commit('showCreateContactForm');
        },

        inputSearch(value) {
            this.searchList = value;
        },
    },

    computed: {
        getEditContactStatus() {
            return this.$store.getters['editContactStatus'];
        },

        getCreateContactStatus() {
            return this.$store.getters['createContactStatus'];
        },

        contacts() {
            return this.$store.getters['contacts'];
        },

        getSearchList() {
            return this.searchList;
        },
    },
};
</script>

<style lang="scss">
.main {
    text-align: center;
}

.title {
    margin: 10px;
}

.button-create {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 100px;
    height: 100px !important;
}
</style>
