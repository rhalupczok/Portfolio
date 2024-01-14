import { myWorkInterface } from "./interfaces";

export const myWorkData: myWorkInterface[] = [
    {
        name: "Tenzi Game",
        imgSrc: "my-work-tenzi.png",
        isPlay: true,
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
        name: "Portfolio",
        imgSrc: "my-work-portfolio.png", //cover img
        isPlay: false, //true if game
        href: "https://rhalupczok.github.io/Portfolio/", //link to app
        technologies: [
            "HTML",
            "JAVASCRIPT",
            "SCSS",
            "REACT",
            "TYPESCRIPT",
            "GIT",
        ], //display tiles with used technologies [HTML, JAVASCRIPT, SCSS, REACT, TYPESCRIPT, NODE.JS, GIT]
    },
    {
        name: "Weather app",
        imgSrc: "my-work-weather_app.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Weather-Application/",
        technologies: ["HTML", "JAVASCRIPT", "CSS", "REACT", "TYPESCRIPT"],
    },
    {
        name: "Air Hockey",
        imgSrc: "my-work-airhockey.jpg",
        isPlay: true,
        href: "https://rhalupczok.github.io/Air-Hockey/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
    },
    {
        name: "Pocket organiser",
        imgSrc: "my-work-pocket_organiser.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Pocket-Organiser/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
    },
    {
        name: "Snake",
        imgSrc: "my-work-snake_game.png",
        isPlay: true,
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
