<script>
export default {
    props: {
        propCard: Array,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div v-for="(office, index) in propCard">
        <h4>{{ office.city }}</h4>
        <div>
            <ul>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <span class="mx-3">{{ office.number }}</span>
                </li>
                <li>
                    <i class="fa-regular fa-comment"></i>
                    <span class="mx-3">{{ office.email }}</span>
                </li>
                <li>
                    <i class="fa-solid fa-building"></i>
                    <span class="mx-3">{{ office.address }}</span>
                </li>
            </ul>
        </div>

        <hr v-if="index < propCard.length - 1">
    </div>

</template>

<style scoped lang="scss">
ul {
    padding: 0;
}
</style>