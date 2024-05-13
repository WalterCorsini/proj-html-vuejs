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
    background-color: blue;
    padding: 10px 20px;
    margin-bottom: 10px;
    text-align: center;
    transition: 1s;

    &:hover {
        transform: scale(1.1);
        border-radius: 20px;
        transition: 1s;
    }

    a {
        color: white;
    }
}
</style>