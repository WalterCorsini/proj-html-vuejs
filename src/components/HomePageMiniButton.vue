<script>
export default {
    props: {
        price: String,
        color: String,
    }
}
</script>

<template>
    <div class="mb-1 d-flex justify-content-center align-items-center"
        :style="{'background-color' : `${color}`}">
        <a class="fw-bold" @click.prevent href="">
            {{ price }}
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

    a {
        text-decoration: none;
        font-family: sans-serif;
        color: $white;
        font-size: 8px;
    }
}
</style>