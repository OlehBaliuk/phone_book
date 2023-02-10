<template>
    <div class="contacts-list">
        <ContactItem
            v-for="contact in contacts"
            :key="contact.id"
            :name="contact.name"
            :phoneNumber="contact.phoneNumber"
            :id="contact.id"
        />
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
            return this.$store.getters['contacts'];
        },
    },
};
</script>

<style lang="scss" scoped></style>
