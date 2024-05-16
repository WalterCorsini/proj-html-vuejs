<script>
export default {
    data() {
        return {
            hide: false,
        }
    },
    created() {
        this.hideText()
    },
    methods: {
        hideText: function () {
            setTimeout(() => {
                this.hide = true;
            }, 5000);
        }
    }
}
</script>

<template>
    <section class="position-fixed">
        <div class="shadow text-white mb-3 p-3 fw-semibold ms_bg d-flex align-items-center" :class="{'transition': hide}">
            <i class="fa-solid fa-circle-notch fs-5"></i>
            <span class="px-3">RELATED</span>
        </div>
        <div class="shadow p-3 fw-semibold bg-white d-flex align-items-center" :class="{'transition': hide}">
            <i class="fa-solid fa-cart-shopping fs-5 ms_color"></i>
            <span class="px-3">BUY NOW</span>
        </div>
    </section>

</template>

<style scoped lang="scss">
section {
    bottom: 100px;
    right: 0;
    font-size: 9px;
    letter-spacing: .11em;

    .ms_color {
        color: #ef2853;
    }

    .ms_bg {
        background-color: #ef2853;
    }

    .transition {
        transform: translateX(90px);
        transition: transform 0.5s ease;
    }
}
</style>