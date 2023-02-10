<template>
    <div class="container">
        <Modal>
            <p class="title">Create contact</p>
            <Form />
        </Modal>
    </div>
</template>

<script>
import Modal from '../sharedComponents/Modal.vue';
import Form from '../sharedComponents/Form.vue';

export default {
    name: 'CreateContact',
    components: {
        Modal,
        Form,
    },
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 24px;
    font-weight: 600;
}
</style>
