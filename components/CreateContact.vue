<template>
    <div class="container">
        <p class="title">Create contact</p>
        <Form v-model="data" />
    </div>
</template>

<script>
import Form from './sharedComponents/Form.vue';

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
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 24px;
    font-weight: 600;
}
</style>
