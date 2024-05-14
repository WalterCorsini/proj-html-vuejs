<script>
export default {
    data() {
        return {
            active:0,
            listArray: [
                {
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
                    name: "Steps To Success",
                    title: "Where Learning Begins",
                    text: "Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt",
                    list: [
                        "prima cosa",
                        "seconda cosa",
                        "terza cosa",
                        "dddd",
                    ],
                },
                {
                    name: "Knowledge Transfer",
                    title: "titolo",
                    text: "un sacco di parole a caso senza senso",
                    list: ["prima cosa", "seconda cosa", "terza cosa"],
                },
            ],
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="curElem, index in listArray" class="row">
        <div class="col-3">
            <span @click.stop="active=index" :class="active===index ? 'clickItem' : ''">{{ curElem.name }}</span>
        </div>
        <div v-if="active===index" class="col-9 info">
            {{ curElem.text }}
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    position: relative;
    margin-bottom: 10px;
}
span {
    border: 1px solid rgb(209, 209, 209);
    display: block;
    padding: 15px;
    transition:0.5s;
    font-size: 12px;
    font-weight: 500;
    color: rgb(146, 146, 146);;
    &:hover{
        transition: 1s;
        color: #31A2D6;
        border-left: 8px solid #31A2D6;
    }
}
.clickItem{
    color: #31A2D6;
    border-left: 8px solid #31A2D6;
}
.info{
    border: 1px solid black;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
}
</style>