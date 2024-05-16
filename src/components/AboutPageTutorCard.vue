<script>

export default {
    props: {
        cardObj: Object
    },

    data() {
        return {

        }
    },

    methods: {
        getImgUrl(elem) {
            return new URL(`../assets/img/about-page/cvimg${elem}.jpg`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <div class="card mb-3 rounded-0 border-light-subtle" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImgUrl(cardObj.img)" class="img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ cardObj.name }}</h5>
                    <p class="card-text">{{ cardObj.role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    transition: box-shadow .3s;
    border: 1px solid #ccc;
    background: #fff;

}

.card:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
}

.col-md-4 {
    padding: 20px;

    img {
        border-radius: 50%;
    }
}

.col-md-8 {
    align-self: center;

    .card-text {
        color: grey;
    }

}
</style>