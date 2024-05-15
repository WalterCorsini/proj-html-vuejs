import {reactive} from "vue";

export const store = reactive ({
    arrayPeople: [
        {
            img: "_1",
            name: "Joan Collins",
            role: "student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "_2",
            name: "virginia Foster",
            role: "Student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "_3",
            name: "Molly Simone",
            role: "Teacher",
            text: "tante parole scritte a caso come se avessero un senso"
        },
    ],
    aboutPageQuotesArray: [
        {
            img: "../assets/about-page/quotes-img/quoteimg-1.jpg",
            name: "Jonathan Gibsone",
            role: "Teaching Assistant",
            text: "Un elefante si dondolava sopra un filo di una ragnatela",
        },
        {
            img: "../assets/about-page/quotes-img/quoteimg-2.jpg",
            name: "Brooke Austin",
            role: "Teaching Assistant",
            text: "e ritenendo la cosa interessante",
        },
        {
            img: "../assets/about-page/quotes-img/quoteimg-3.jpg",
            name: "Rachel Collins",
            role: "Student",
            text: "andarono a chiamare un altro elefante"
        },
    ]

})