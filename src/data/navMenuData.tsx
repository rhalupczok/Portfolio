import { navMenuInterface } from "../data/interfaces";

export const navMenuData: navMenuInterface[] = [
    {
        name: "INTRO",
        id: "intro--menu",
        target: "intro",
        icon: "fa-solid fa-user",
    },
    {
        name: "ABOUT ME",
        id: "about--menu",
        target: "about",
        icon: "fa-regular fa-handshake",
    },
    {
        name: "SKILLS",
        id: "knowledge--menu",
        target: "knowledge",
        icon: "fa-solid fa-laptop-code",
    },
    {
        name: "MY WORK",
        id: "my-work--menu",
        target: "my-work",
        icon: "fa-regular fa-folder-open",
    },
    {
        name: "CV",
        id: "cv--menu",
        target: "cv",
        icon: "fa-solid fa-address-card",
    },
    {
        name: "CONTACT",
        id: "contact--menu",
        target: "contact",
        icon: "fa-solid fa-envelope",
    },
];
