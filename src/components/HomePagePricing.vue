<script>
export default {
    data() {
        return {
            arrayTitolo: [
                {
                    img: "",
                    nome: "un titolo solamente",
                    prezzo: "",
                },
                {
                    img: "1",
                    nome: "Standard",
                    prezzo: "$12",
                },
                {
                    img: "2",
                    nome: "Professional",
                    prezzo: "$59",
                },
                {
                    img: "3",
                    nome: "Advanced",
                    prezzo: "$88",
                },
            ],
        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-8/${elem}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <!-- /tabella -->
    <div class="container">
        <table class="table table-bordered w-100 text-center">
            <thead>
                <tr>
                    <th class="cell-elem p-4" scope="col">Save Up to 40% by paying weekly</th>
                    <th class="bg-lightblue" scope="col">
                        <div class="d-flex flex-column align-items-center">
                        <img src="../assets/img/home-page/sezione-9/1.png" alt="">
                        <span>Standard</span>
                        <span>$12</span>
                        </div>
                    </th>
                    <th class="professional bg-lightblue" scope="col">
                        <div class="d-flex flex-column align-items-center">
                        <img src="../assets/img/home-page/sezione-9/2.png" alt="">
                        <span>Professional</span>
                        <span>$59</span>
                        </div>
                    </th>
                    <th class="bg-lightblue" scope="col">
                        <div class="d-flex flex-column align-items-center">
                        <img src="../assets/img/home-page/sezione-9/3.png" alt="">
                        <span>Advanced</span>
                        <span>$88</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">Number of Courses</td>
                    <td>2</td>
                    <td>4</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td scope="row">Time</td>
                    <td>15 Days</td>
                    <td>30 Days</td>
                    <td>30 Days</td>
                </tr>
                <tr>
                    <td scope="row">Web Designin</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row">Human-Centered-Design</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row">Basic Marketing</td>
                    <td>&cross;</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row">Python for Everybody</td>
                    <td>&cross;</td>
                    <td class="text-blue">&check;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row">Android Developer</td>
                    <td>&cross;</td>
                    <td>&cross;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row">Business English</td>
                    <td>&cross;</td>
                    <td>&cross;</td>
                    <td class="text-blue">&check;</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td class="btn-">
                        <button type="button" class="btn btn-outline-info">GET IT NOW</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-info">GET IT NOW</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-info">GET IT NOW</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.cell-elem {
    width: calc(100% / 4);
}

li {
    height: 60px;
    padding: 10px;
    border: 1px solid black;
    text-align: center;
}
td{
    color: #808080;
}
th{
    border-top: 3px solid #D6F2FF;
}
th.professional{
    border-top: 3px solid  #17B7FE;
    
}

.container {
    display: flex;
    flex-direction: column;
}
.text-blue{
    color: #17B7FE;
}
.btn-info{
    color: white;
    background-color:#17B7FE;
    &:hover{
        background-color: #17a2dd;
    }    
}
.btn-outline-info{
    color: #808080;
    border-color: #17B7FE;
    &:hover{
        background-color:#17B7FE;
        color: white;
    }
}
.bg-lightblue{
    background-color:#F7FDFF;
}
</style>