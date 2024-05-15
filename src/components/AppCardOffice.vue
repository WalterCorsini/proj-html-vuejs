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
        <h6 class="title-font py-3">{{ office.city }}</h6>
        <div>
            <ul class="ms_contacts">
                <li class="py-2">
                    <i class="fa-solid fa-phone"></i>
                    <span class="mx-3">{{ office.number }}</span>
                </li>
                <li class="py-2">
                    <i class="fa-regular fa-comment"></i>
                    <span class="mx-3">{{ office.email }}</span>
                </li>
                <li class="py-2">
                    <i class="fa-solid fa-building"></i>
                    <span class="mx-3">{{ office.address }}</span>
                </li>
            </ul>
        </div>

        <hr v-if="index < propCard.length - 1" class="w-75">
    </div>

</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.ms_contacts {
    color: #999999;
    font-size: 12px;
}
</style>