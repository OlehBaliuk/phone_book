<template>
    <Input @update:value="inputSearch" v-model="value" type="search" placeholder="search.." class="search-input" />
</template>

<script>
import Input from '@/components/sharedComponents/Input.vue';

export default {
    name: 'SearchContacts',

    components: {
        Input,
    },

    data() {
        return {
            value: '',
            searchList: [],
        };
    },

    methods: {
        inputSearch(value) {
            this.value = value;
        },
    },

    computed: {
        contacts() {
            return this.$store.getters['contacts'];
        },
    },

    watch: {
        value() {
            if (this.value) {
                this.searchList = this.contacts.filter(contact => contact.name.includes(this.value));
                this.$emit('onSearchInput', this.searchList);
                this.$store.commit('switchOnSearchMode');
            } else {
                this.$emit('onSearchInput', []);
                this.$store.commit('switchOffSearchMode');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.search-input {
    width: 600px;
}
</style>
