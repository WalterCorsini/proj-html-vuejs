<script>
export default {
    props: {
        title: String,
    }
}
</script>

<template>
    <div class="mb-1">
        <a class="fw-bold" @click.prevent href="">
            {{ title }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

div {
    background-color: $primary-color;
    padding: 20px 40px;
    text-align: center;
    transition: 1s;

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