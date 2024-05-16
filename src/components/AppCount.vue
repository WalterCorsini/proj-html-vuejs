<script>
export default {
    props: {
        count: Number,
        text: String,
        color: String,
    },
    data() {
        return {
            viewCount: 0,
        }
    },
    created() {
        this.generateCount();
    },
    methods: {
        generateCount() {
            if (this.viewCount <= this.count && this.viewCount+12 <= this.count) {
                this.viewCount += 10;
                let nextCall = setTimeout(this.generateCount, 100);
            } else {
                let difference = this.count - this.viewCount;
                this.viewCount+= difference;
            }
        },
    }
}
</script>

<template>

    <div class="pb-3 d-flex justify-content-around">
        <div class="count">
            <div class="mt-5 d-flex flex-column">
                <a href="" :style="{'color' : `${color}`}">{{ viewCount }}</a>
                <span :style="{'color' : `${color}`}">{{ text }}</span>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.count div:first-child {
    font-family: serif;
    font-size: 36px;
    font-weight: 700;
    cursor: pointer;

    span {
        font-size: 12px;
    }

    a {
        text-decoration: none;
    }
}
</style>