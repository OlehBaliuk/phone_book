<template>
    <div class="contacts-list">
        <p v-if="isShowNoMatchResult" class="message">no matching result</p>
        <template v-else>
            <ContactItem
                v-for="contact in paginatedData"
                :key="contact.id"
                :name="contact.name"
                :phoneNumber="contact.phoneNumber"
                :id="contact.id"
            />
            <ContactsPaginated v-if="isShowPaginate" @changePage="onChangePage" />
        </template>
    </div>
</template>

<script>
import ContactItem from './ContactItem.vue';
import ContactsPaginated from '@/components/ContactsPaginated.vue';

export default {
    name: 'ContactsList',

    components: {
        ContactItem,
        ContactsPaginated,
    },

    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
        };
    },

    computed: {
        contacts() {
            return this.searchList.length ? this.searchList : this.$store.getters['contacts'];
        },

        getSearchModeStatus() {
            return this.$store.getters['searchModeStatus'];
        },

        isShowNoMatchResult() {
            return this.getSearchModeStatus && !this.searchList.length;
        },

        paginatedData() {
            const itemOffset = (this.currentPage - 1) * this.itemsPerPage;
            const endOffset = itemOffset + this.itemsPerPage;

            if (this.getSearchModeStatus) {
                return this.searchList;
            }

            return this.contacts.slice(itemOffset, endOffset);
        },

        isShowPaginate() {
            return this.contacts.length > 10 && !this.getSearchModeStatus;
        },
    },

    props: {
        searchList: Array,
    },

    methods: {
        onChangePage(page) {
            this.currentPage = page;
        },

        setCurrentContactsList(itemOffset, endOffset) {
            return this.contacts.slice(itemOffset, endOffset);
        },
    },
};
</script>

<style lang="scss" scoped>
.message {
    font-size: 20px;
    font-weight: 600;
    margin: 15px;
}
</style>
