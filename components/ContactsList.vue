<template>
    <div class="contacts-list">
        <p v-if="isShowNoMatchResult">no matching result</p>
        <template v-else>
            <ContactItem
                v-for="contact in contacts"
                :key="contact.id"
                :name="contact.name"
                :phoneNumber="contact.phoneNumber"
                :id="contact.id"
            />
        </template>
    </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
    name: 'ContactsList',

    components: {
        ContactItem,
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
    },

    props: {
        searchList: Array,
    },
};
</script>
