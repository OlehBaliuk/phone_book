export const state = () => ({
    isActiveCreateModal: false,
    contacts: [],
    isEditContact: false,
    isCreateContact: false,
});

export const getters = {
    modalStatus(state) {
        return state.isActiveCreateModal;
    },

    contacts(state) {
        return state.contacts;
    },

    editContactStatus(state) {
        return state.isEditContact;
    },

    createContactStatus(state) {
        return state.isCreateContact;
    },
};

export const mutations = {
    changeStatusCreateModal(state) {
        state.isActiveCreateModal = !state.isActiveCreateModal;
    },

    setContacts(state, contacts) {
        state.contacts = contacts;
    },

    showEditContactForm(state) {
        state.isEditContact = true;
    },

    showCreateContactForm(state) {
        state.isCreateContact = true;
    },

    hideModalForm(state) {
        state.isCreateContact = false;
        state.isEditContact = false;
    },
};

export const actions = {
    onChangeStatusModal({ commit }) {
        commit('changeStatusCreateModal');
    },

    async getContacts({ commit }) {
        try {
            const contacts = await this.$axios.$get('contacts');
            commit('setContacts', contacts);
        } catch (error) {
            console.log(error);
        }
    },
};
