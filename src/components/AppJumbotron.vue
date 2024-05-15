<script>
export default {
    props: {
        propTitle: Object,
    },
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    routeName: "home"
                }
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="py-5">
                <h2 class="title-font">{{ propTitle.title }}</h2>
                <div>
                    <router-link :to="{ name: item.routeName }" v-for="item in menu" class="nav-link">
                        {{item.title}}
                    </router-link>
                    / {{ propTitle.title }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    background-image: url(../assets/img/contact_and_footer/contact-1.jpg);
    min-height: 300px;
    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}

.nav-link {
    text-decoration: none;
    display: inline;
}

</style>