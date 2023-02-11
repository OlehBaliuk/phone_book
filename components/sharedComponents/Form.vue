<template>
    <div>
        <form @submit.prevent="submit" class="form">
            <div class="input-container">
                <Input @update:value="updateName" :value="value.name" type="text" placeholder="name.." />
                <Input
                    @update:value="updatePhoneNumber"
                    :value="value.phoneNumber"
                    type="number"
                    placeholder="phone number.."
                />
            </div>
            <button type="submit" class="button">Save</button>
            <button type="button" @click="onCloseModal()" class="button">Close</button>
        </form>
    </div>
</template>

<script>
import Input from '@/components/sharedComponents/Input.vue';

export default {
    name: 'Form',

    components: {
        Input,
    },

    props: {
        value: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },

    methods: {
        onCloseModal() {
            this.$store.dispatch('onChangeStatusModal');
            this.$store.commit('hideModalForm');
            this.$router.push({ path: '/' });
        },

        submit() {
            if (this.value.name && this.value.phoneNumber) {
                this.$emit('onSubmit');
                this.$store.dispatch('onChangeStatusModal');
                this.$store.commit('hideModalForm');
                this.$router.push({ path: '/' });
            }
        },

        updateName(value) {
            this.value.name = value;
        },

        updatePhoneNumber(value) {
            this.value.phoneNumber = value;
        },
    },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.button {
    margin: 10px;
}
</style>
