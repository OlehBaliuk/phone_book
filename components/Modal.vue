<template>
    <div :class="[getStatusModal ? 'modal active' : 'modal']">
        <div :class="[getStatusModal ? 'modal__content active' : 'modal__content']" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',

    data() {
        return {};
    },

    computed: {
        getStatusModal() {
            return this.$store.getters['modalStatus'];
        },
    },
};
</script>

<style lang="scss" scoped>
.modal {
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
}

.modal.active {
    opacity: 1;
    pointer-events: all;
}

.modal__content {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    width: 30%;
    min-height: 150px;
    transform: scale(0.5);
    transition: 0.4s all;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.modal__content.active {
    transform: scale(1);
}

.button {
    margin-top: 50px;
}
</style>
