<script>
export default {
    props: {
        title: String,
        color: String,
    }
}
</script>

<template>
    <div class="mb-1 d-flex justify-content-center align-items-center"
     :style="{'background-color' : `${color}`}">
        <a class="fw-bold" @click.prevent href="">
            {{ title }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

div {
    width: 50px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    transition: 1s;

    &:hover {
    }

    a {
        text-decoration: none;
        font-family: sans-serif;
        color: $white;
        font-size: 8px;
    }
}
</style>