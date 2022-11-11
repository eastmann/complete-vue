<template>
    <button
        :style="{ background, color }"
        :disabled="disabled"
    >
        Button
    </button>
</template>

<script>
export default {
    props: {
        background: {
            type: String
        },
        color: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
    button {
        margin-top: 10px;
        padding: 10px 40px;

        font-size: 16px;

        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
    }

    button:hover {
        filter: brightness(125%);
    }
</style>
