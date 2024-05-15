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
})