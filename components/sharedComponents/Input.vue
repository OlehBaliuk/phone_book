<template>
    <div>
        <input
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            :type="type"
            :placeholder="placeholder"
            class="input"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',

    props: {
        value: String,
        type: String,
        placeholder: String,
    },
};
</script>

<style lang="scss" scoped>
.input {
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    outline: 0;
    background-color: #f5f5f5;
    border-color: #bdbdbd;
    opacity: 1;
}
</style>
