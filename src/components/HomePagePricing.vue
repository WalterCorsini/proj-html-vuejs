<script>
export default{
    data(){
        return{
            arrayTitolo:[
                {
                        img:"",
                        nome:"un titolo solamente",
                        prezzo:"",
                },
                {
                        img:"1",
                        nome:"Standard",
                        prezzo:"$12",
                },
                {
                        img:"2",
                        nome:"Professional",
                        prezzo:"$59",
                },
                {
                        img:"3",
                        nome:"Advanced",
                        prezzo:"$88",
                },    
            ],
            arrayTabella:[
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
                {
                    nome:"prova",
                    standard:"2",
                    professional:"3",
                    advanced:"5",
                },
            ]
        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-8/${elem}.jpg`, import.meta.url).href;
        }, 
    }
}
</script>

<template>
<div class="container d-flex">
    <!-- inserisci sfondo -->

    <!-- titolo tabella -->
    <div class="table d-flex flex-column align-items-center justify-content-center" v-for="curTitle in arrayTitolo">
        <span>{{ curTitle.img }}</span>
        <span>{{ curTitle.nome }}</span>
        <span>{{ curTitle.prezzo }}</span>
    </div>
    <!-- /titolo tabella -->

    <!-- tabella -->
    <div class="table" v-for="curElem in arrayTabella">
        <span>curElem</span>
    </div>
    <!-- /tabella -->


</div>
</template>

<style lang="scss" scoped>
.table{
    width: calc(100% / 4);
    border: 1px solid black;
}
</style>