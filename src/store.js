import {reactive} from "vue";

export const store = reactive ({
    arrayPeople: [
        {
            img: "../assets/img/home-page/sezione-5/_1.png",
            name: "Joan Collins",
            role: "student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "../assets/img/home-page/sezione-5/_2.png",
            name: "virginia Foster",
            role: "Student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "../assets/img/home-page/sezione-5/_3.png",
            name: "Molly Simone",
            role: "Teacher",
            text: "tante parole scritte a caso come se avessero un senso"
        },
    ],
    aboutPageQuotesArray: [
        {
            img: "../assets/img/about-page/quotes-img/quoteimg-1.jpg",
            name: "Jonathan Gibsone",
            role: "Teaching Assistant",
            text: "Un elefante si dondolava sopra un filo di una ragnatela",
        },
        {
            img: "../assets/img/about-page/quotes-img/quoteimg-2.jpg",
            name: "Brooke Austin",
            role: "Teaching Assistant",
            text: "e ritenendo la cosa interessante",
        },
        {
            img: "../assets/img/about-page/quotes-img/quoteimg-3.jpg",
            name: "Rachel Collins",
            role: "Student",
            text: "andarono a chiamare un altro elefante"
        },
    ]

})