<template>
    <div class="contact-item-container">
        <div class="contact-item">
            <div class="contact-info-container">
                <strong class="contact-info">{{ name }}</strong>
                <p class="contact-info">{{ phoneNumber }}</p>
            </div>
            <div class="contact-action-container">
                <button @click="editContact()" class="button">edit</button>
                <button class="button">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactItem',

    props: {
        name: String,
        phoneNumber: Number,
    },

    methods: {
        editContact() {
            this.$router.push({ query: { name: this.name, phoneNumber: this.phoneNumber } });
        },
    },
};
</script>

<style lang="scss" scoped>
.contact-item {
    display: flex;
    justify-content: space-between;
    width: 30%;
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
