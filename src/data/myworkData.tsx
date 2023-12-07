import { myWorkInterface } from "./interfaces";

export const myWorkData: myWorkInterface[] = [
    {
        name: "tenzi",
        imgSrc: "my-work-tenzi.png",
        description: "Tenzi Game",
        isPlay: true,
        isOpen: true,
        noLearnMore: true,
        href: "https://rhalupczok.github.io/Tenzies/",
        technologies: [
            "HTML",
            "JAVASCRIPT",
            "CSS",
            "REACT",
            "REACT-ROUTER",
            "TYPESCRIPT",
            "MONGODB",
            "SECURITY",
            "JSON WEB TOKEN",
            "BCRYPT",
        ],
    },
    {
        name: "portfolio", //name used in popup component
        imgSrc: "my-work-portfolio.png", //cover img
        description: "This portfolio page", //description displayed below img
        isPlay: false, //true if game
        isOpen: false, // true if application/game. If true remember to add link in next line! If false there is no OPEN/PLAY button
        href: "https://rhalupczok.github.io/Portfolio/", //link to app
        technologies: ["HTML", "JAVASCRIPT", "SCSS", "REACT", "TYPESCRIPT"], //display tiles with used technologies [HTML, JAVASCRIPT, SCSS, REACT, TYPESCRIPT, NODE.JS, GIT]
    },
    {
        name: "weather",
        imgSrc: "my-work-weather_app.png",
        description: "Weather app (API)",
        isPlay: false,
        isOpen: true,
        href: "https://rhalupczok.github.io/Weather-Application/",
        technologies: ["HTML", "JAVASCRIPT", "CSS", "REACT", "TYPESCRIPT"],
    },
    {
        name: "airhockey",
        imgSrc: "my-work-airhockey.jpg",
        description: "Air Hockey",
        isPlay: true,
        isOpen: true,
        href: "https://rhalupczok.github.io/Air-Hockey/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
    },
    {
        name: "pocketOrganiser",
        imgSrc: "my-work-pocket_organiser.png",
        description: "Pocket organiser",
        isPlay: false,
        isOpen: true,
        href: "https://rhalupczok.github.io/Pocket-Organiser/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
    },
    {
        name: "snake",
        imgSrc: "my-work-snake_game.png",
        description: "SNAKE",
        isPlay: true,
        isOpen: true,
        href: "https://rhalupczok.github.io/Snake/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
    },
    // {
    //     name: "other_projects",
    //     imgSrc: "my-work-others.png",
    //     description: "Small learning projects",
    //     isPlay: false,
    //     isOpen: false,
    //     href: "",
    //     technologies: ["HTML", "JAVASCRIPT", "CSS", "REACT"],
    // },
];
