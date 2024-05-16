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
}
</script>

<template>

    <div class="container p-5">
        
        <!-- tabella -->
        <table class="table table-bordered w-100 text-center">
            <!-- thead -->
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
            <!-- /thead -->

            <!-- tbody -->
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
            <!-- tbody -->

        </table>
        <!-- tabella -->

    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.cell-elem {
    width: calc(100% / 4);
}

td {
    color: $grey;
}

th {
    border-top: 3px solid $lightgrey;
}

th.professional {
    border-top: 3px solid $primary-color;

}

.text-blue {
    color: $primary-color;
}

.btn-info {
    color: $white;
    background-color: $primary-color;

    &:hover {
        background-color: $dark-primary;
    }
}

.btn-outline-info {
    color: $grey;
    border-color: $primary-color;

    &:hover {
        background-color: $dark-primary;
        color: $white;
    }
}

.bg-lightblue {
    background-color: $lightgrey;
}
</style>