<template>
    <div class="container">
        <p class="title">Edit contact</p>
        <Form v-model="data" @onSubmit="submit" />
    </div>
</template>

<script>
import Form from './sharedComponents/Form.vue';

export default {
    name: 'EditContact',

    components: {
        Form,
    },

    data() {
        return {
            data: {
                name: '',
                phoneNumber: '',
            },
        };
    },

    watch: {
        $route() {
            const query = this.$route.query;
            this.data.name = query.name;
            this.data.phoneNumber = query.phoneNumber;
        },
    },

    methods: {
        async submit() {
            try {
                const params = {
                    name: this.data.name,
                    phoneNumber: Number(this.data.phoneNumber),
                };
                await this.$axios.$put(`contacts/${this.$route.query.id}`, params);
                await this.$store.dispatch('getContacts');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 24px;
    font-weight: 600;
}
</style>
