<template>
    <div class="container">
        <p class="title">Create contact</p>
        <Form v-model="data" @onSubmit="submit" />
    </div>
</template>

<script>
import Form from './sharedComponents/Form.vue';
import API_ROUTES from '@/constants/apiRoutes';

export default {
    name: 'CreateContact',

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

    methods: {
        async submit() {
            try {
                const params = {
                    name: this.data.name,
                    phoneNumber: Number(this.data.phoneNumber),
                };
                await this.$axios.$post(API_ROUTES.contacts, params);
                this.$store.dispatch('getContacts');
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
