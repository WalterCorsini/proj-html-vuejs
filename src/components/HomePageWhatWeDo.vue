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
    <div class="container mb-1">
        <div v-for="curElem, index in listArray" class="row">
            <!-- left-container -->
            <div @click.stop="active = index" class="col-3">
                <span class="d-block">
                    {{ curElem.name }}
                </span>
            </div>
            <!-- /left-container -->

            <!-- right-container -->
            <div v-if="active === index" class="col-9 info h-100 p-2">
                <h2 class="title-font">{{ curElem.title }}</h2>
                <p>{{ curElem.text }}</p>
                <div class="list d-flex align-items-end w-100">
                    <div class="list-item col-8">
                        <span v-for="curItem, index in curElem.list"><i class="fa-solid fa-check"></i> {{ curItem
                            }}</span>
                    </div>
                    <div class="col-4">
                        <img :src="getImage(curElem.img)" alt="">
                    </div>
                </div>
            </div>
            <!-- right-container -->

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.container {
    position: relative;

    span,
    p {
        font-size: 12px;
        font-weight: 500;
        color: $grey;
    }

    .col-3 span {
        border: 1px solid $lightgrey;
        padding: 15px;
        transition: 0.5s;
        font-size: 12px;
        font-weight: 500;
        color: $grey;

        &:hover {
            transition: 1s;
            color: $primary_color;
            border-left: 8px solid $primary_color;
        }
    }
    
    .info {
        position: absolute;
        top: 0;
        right: 0;
        
        span {
            display: block;
            margin: 10px;
            
            i {
                color: $primary-color;
            }
        }
        
        .list {
            height: 60%;
            position: relative;
            
            img {
                width: 80px;
            }
        }
        
    }
}
</style>