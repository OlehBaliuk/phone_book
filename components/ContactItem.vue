<template>
    <div class="contact-item-container">
        <div class="contact-item">
            <div class="contact-info-container">
                <strong class="contact-info">{{ name }}</strong>
                <p class="contact-info">{{ phoneNumber }}</p>
            </div>
            <div class="contact-action-container">
                <button @click="editContact()" class="button">edit</button>
                <button @click="deleteContact()" class="button">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import API_ROUTES from '../constants/apiRoutes';

export default {
    name: 'ContactItem',

    props: {
        name: String,
        phoneNumber: Number,
        id: String,
    },

    methods: {
        editContact() {
            this.$router.push({ query: { name: this.name, phoneNumber: this.phoneNumber, id: this.id } });
            this.$store.dispatch('onChangeStatusModal');
            this.$store.commit('showEditContactForm');
        },

        async deleteContact() {
            try {
                await this.$axios.$delete(`${API_ROUTES.contacts}/${this.id}`);
                this.$store.dispatch('getContacts');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.contact-item {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 10px auto;
    background-color: #d5d2d2;
    padding: 5px;
    border-radius: 5px;
}

.contact-info-container {
    text-align: start;
}

.contact-info {
    padding: 5px;
}

.contact-action-container {
    display: flex;
    align-items: center;
}
</style>
