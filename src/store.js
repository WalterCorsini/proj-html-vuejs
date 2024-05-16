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
    ],
    usersCount:168,
    eventsCount:348,
    active:0,
    changeActive(value) {
        clearInterval(this.stopInterval);
        this.stopInterval = setInterval(() => {
        if (value === "P" || value=== "PL") {
            if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        } else {
            if (this.active >= 1) {
                this.active--;
            } else {
                this.active = 2;
            }
        }
    }, 2000)
    },
    changeActiveFlash(value){
        clearInterval(this.stopInterval);
        if (value === "P" || value=== "PL") {
            if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        } else {
            if (this.active >= 1) {
                this.active--;
            } else {
                this.active = 2;
            }
        }
        this.changeActive(value,this.active);
    },
})