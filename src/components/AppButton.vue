<script>
export default {
    props: {
        title: String,
    }
}
</script>

<template>

    <button class="mb-1">
        <a class="fw-bold" @click.prevent href="">
            {{ title }}
        </a>
    </button>
    
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

button {
    background-color: $primary-color;
    padding: 20px 40px;
    text-align: center;
    transition: 1s;
    border: 0;

    &:hover {
        background-color: $dark-primary;
    }

    a {
        text-decoration: none;
        font-family: sans-serif;
        color: $white;
    }
}
</style>