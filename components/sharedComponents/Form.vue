<template>
    <div>
        <form @submit.prevent="onSubmit" class="form">
            <div class="input-container">
                <input v-model="value.name" type="text" placeholder="name.." class="input" />
                <input v-model="value.phoneNumber" type="number" placeholder="phone number.." class="input" />
            </div>
            <button type="submit" class="button">Save</button>
            <button type="button" @click="onCloseModal()" class="button">Close</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',

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

        onSubmit() {
            if (this.value.name && this.value.phoneNumber) {
                this.$emit('submit', { name: this.name, phoneNumber: Number(this.phoneNumber) });
                this.$store.dispatch('onChangeStatusModal');
                this.$store.commit('hideModalForm');
                this.$router.push({ path: '/' });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input {
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    outline: 0;
    background-color: #f5f5f5;
    border-color: #bdbdbd;
    opacity: 1;
}

.input-container {
    display: flex;
    flex-direction: column;
}

.button {
    margin: 10px;
}
</style>
