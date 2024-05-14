<script>
export default {
    data() {
        return {
            active: 0,
            listArray: [
                {
                    img: "_1",
                    name: "What We Do",
                    title: "Learning Possibilities",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list:
                        ["We enrich lives through learning.",
                            "Maximizing potential through individual attention.",
                            "The trusted name for specialized training.",
                            "People teach. People learn. This is where they connect."
                        ],
                },
                {
                    img: "_2",
                    name: "Degree Program",
                    title: "Inspiring Minds",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "Maximizing potential through individual attention",
                        "People teach. People learn. This is where they connect",
                        "The trusted name for specialized training."
                    ],
                },
                {
                    img: "_3",
                    name: "Career Achievements",
                    title: "Investing in Knowledge",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "We enrich lives through learning.",
                        "Maximizing potential through individual attention.",
                        "The trusted name for specialized training.",
                        "People teach. People learn. This is where they connect.",
                    ],
                },
                {
                    img: "_4",
                    name: "Personal Management",
                    title: "Secure Your Future",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "Maximizing potential through individual attention.",
                        "We enrich lives through learning.",
                        "People teach. People learn. This is where they connect.",
                        "The trusted name for specialized training.",
                    ],
                },
                {
                    img: "_5",
                    name: "Steps To Success",
                    title: "Where Learning Begins",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "We enrich lives through learning.",
                        "Maximizing potential through individual attention.",
                        "The trusted name for specialized training.",
                        "People teach. People learn. This is where they connect.",
                    ],
                },
                {
                    img: "_6",
                    name: "Knowledge Transfer",
                    title: "Knowledge is Power",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "Maximizing potential through individual attention.",
                        "We enrich lives through learning.",
                        "People teach. People learn. This is where they connect.",
                        "The trusted name for specialized training."
                    ],
                },
            ],
        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-6/${elem}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="curElem, index in listArray" class="row">
            <div class="col-3">
                <span @click.stop="active = index" :class="active === index ? 'clickItem' : ''">{{ curElem.name
                    }}</span>
            </div>
            <div v-if="active === index" class="col-9 info">
                <h2>{{ curElem.title }}</h2>
                <p>{{ curElem.text }}</p>
                <div class="list d-flex align-items-end">
                    <div class="list-item col-8">
                        <span v-for="curItem, index in curElem.list"><i class="fa-solid fa-check"></i> {{ curItem
                            }}</span>
                    </div>
                    <div class="col-4">
                        <img :src="getImage(curElem.img)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    margin-bottom: 10px;
}

span,
p {
    font-size: 12px;
    font-weight: 500;
    color: rgb(146, 146, 146);
    ;
}

.col-3 span {
    border: 1px solid rgb(209, 209, 209);
    display: block;
    padding: 15px;
    transition: 0.5s;
    font-size: 12px;
    font-weight: 500;
    color: rgb(146, 146, 146);
    ;

    &:hover {
        transition: 1s;
        color: #31A2D6;
        border-left: 8px solid #31A2D6;
    }
}

.clickItem {
    color: #31A2D6;
    border-left: 8px solid #31A2D6;
}

.info {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    height: 100%;

    span {
        display: block;
        margin: 10px;

        i {
            color: #31A2D6;
        }
    }

    .list {
        width: 100%;
        height: 60%;
        position: relative;
        img {
            width: 80px;
        }
    }

}
</style>