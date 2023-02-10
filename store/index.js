export const state = () => ({
    isActiveCreateModal: false,
    contacts: [],
});

export const getters = {
    statusCreateModal(state) {
        return state.isActiveCreateModal;
    },

    contacts(state) {
        return state.contacts;
    },
};

export const mutations = {
    changeStatusCreateModal(state) {
        state.isActiveCreateModal = !state.isActiveCreateModal;
    },
    setContacts(state, contacts) {
        state.contacts = contacts;
    },
};

export const actions = {
    onChangeStatusCreateModal({ commit }) {
        commit('changeStatusCreateModal');
    },

    async getContacts({ commit }) {
        const contacts = await this.$axios.$get('contacts');
        commit('setContacts', contacts);
    },
};
