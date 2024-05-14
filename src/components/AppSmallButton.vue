<script>
export default {
    props: {
        title: String,
    }
}
</script>

<template>
    <div>
        <a @click.prevent href="">
            {{ title }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: #40C4FF;
    font-size: 10px;
    text-align: center;
    transition: 1s;

    &:hover {
        background-color: #00aeff;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        font-family: sans-serif;
        color: white;
    }
}
</style>