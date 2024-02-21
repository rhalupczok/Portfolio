import { myWorkInterface } from "./interfaces";

export const myWorkData: myWorkInterface[] = [
    {
        name: "Tenzi Game",
        imgSrc: "my-work-tenzi.png",
        isPlay: true,
        href: "https://rhalupczok.github.io/Tenzies/",
        repo: "https://github.com/rhalupczok/Portfolio/tree/master",
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
        // href: "https://rhalupczok.github.io/Portfolio/", //link to app
        repo: "https://github.com/rhalupczok/Portfolio/tree/master",
        technologies: [
            "HTML",
            "JAVASCRIPT",
            "SCSS",
            "REACT",
            "TYPESCRIPT",
            "GIT",
        ], //display tiles with used technologies [HTML, JAVASCRIPT, SCSS, REACT, TYPESCRIPT, NODE.JS, GIT]
        popupData: [
            {
                img: "images/myWork/popup-portfolio-0.png",
                text: [
                    "The page was created with React (React router), TypeScript and SCSS superset technologies",
                    "In accordance with composable idea - components, content, TypeScript interfaces and Style are kept in separate files and the page is builded mapping by them",
                ],
                href: {
                    link: "https://github.com/rhalupczok/Portfolio/tree/master",
                    desc: "Complete repositorium on GITHUB",
                },
            },
            {
                img: "images/myWork/popup-portfolio-1.png",
                text: [
                    "Created accordingly with responsive web design.",
                    "MQ Berakpoints, tools like Flexbox and Grid, considered touchscreens",
                ],
            },
            {
                img: "images/myWork/popup-portfolio-2.png",
                text: ["Dynamic themes"],
            },
            {
                img: "images/myWork/popup-portfolio-3.png",
                text: [
                    "All effects like intro, hobby carousel, popups were coded by myself without using any external libraries",
                ],
            },
        ],
    },
    {
        name: "Weather app",
        imgSrc: "my-work-weather_app.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Weather-Application/",
        repo: "https://github.com/rhalupczok/Weather-Application/tree/master",
        technologies: ["HTML", "JAVASCRIPT", "CSS", "REACT", "TYPESCRIPT"],
        popupData: [
            {
                img: "images/myWork/popup-weather-0.png",
                text: [
                    `Simple weather application fetching the API weather data`,
                    `Created using React and Typescript`,
                ],
            },
            {
                img: "images/myWork/popup-weather-1.png",
                text: [
                    `The city is set using GPS data (by default) or can be input by user`,
                ],
            },
            {
                img: "images/myWork/popup-weather-2.png",
                text: [
                    "Sun walk effect.",
                    "The sun is going from the sunrise to sunset symbol taken into account the time of sunrise/sunset from fetched data and current time",
                ],
            },
        ],
    },
    {
        name: "Air Hockey",
        imgSrc: "my-work-airhockey.jpg",
        isPlay: true,
        href: "https://rhalupczok.github.io/Air-Hockey/",
        repo: "https://github.com/rhalupczok/Air-Hockey",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "images/myWork/popup-airhockey-0.jpg",
                text: [
                    `The game was created inspired by standard Air Hockey game which you can find in many touristic places.`,
                    `At the begining I saw a simple pong game and decided to connect the pong game idea with phisics of colliding circle objects`,
                    `It is one on my first projects made directly after I met first JavaScript possibilities. Using classes, expressions, RWD`,
                ],
            },
            {
                img: "images/myWork/popup-airhockey-1.png",
                text: [
                    `Player can be control by mouse or touchpad on mobile devices`,
                ],
            },
            {
                img: "images/myWork/popup-airhockey-2.png",
                text: [
                    `
                The phisics of hitting the ball was created based on real phisics laws, taken into acount all movement vectors and masses of ball/players.`,
                    `There is also taken into account the table friction to add more reality`,
                    `When the time is up, the friction is increased like in real AirHockey game`,
                ],
            },
            {
                img: "images/myWork/popup-airhockey-3.png",
                text: [
                    `There is added simple AI Player logic - Tries to save the goal and score`,
                ],
            },
        ],
    },
    {
        name: "Pocket organiser",
        imgSrc: "my-work-pocket_organiser.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Pocket-Organiser/",
        repo: "https://github.com/rhalupczok/Pocket-Organiser",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "images/myWork/popup-pocket-organiser-0.png",
                text: [`Simple app for task and shopping list`],
            },
            {
                img: "images/myWork/popup-pocket-organiser-1.png",
                text: [
                    `Entry the task or item on prepared form`,
                    `As option set deadline for tasks and amount/shop for items`,
                ],
            },
            {
                img: "images/myWork/popup-pocket-organiser-2.png",
                text: [
                    `Language can be directly switched by onClick on the flag`,
                ],
            },
            {
                img: "images/myWork/popup-pocket-organiser-3.png",
                text: [
                    `The items can be filter by shop name`,
                    `Popup window is free movable`,
                ],
            },
            {
                img: "images/myWork/popup-pocket-organiser-4.png",
                text: [`The data are kept in local storage`],
            },
            {
                img: "images/myWork/popup-pocket-organiser-5.png",
                text: [
                    `It is also one of my first project created in pure JS. The app was coded using classes`,
                ],
            },
        ],
    },
    {
        name: "Snake",
        imgSrc: "my-work-snake_game.png",
        isPlay: true,
        href: "https://rhalupczok.github.io/Snake/",
        repo: "https://github.com/rhalupczok/Snake",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "images/myWork/popup-snake-0.png",
                text: [
                    `The game was created inspired by memories of iconic phone Nokia 3310.`,
                ],
            },
            {
                img: "images/myWork/popup-snake-1.png",
                text: [
                    `3 way of control:`,
                    `-Keyboard arrows`,
                    `-Wirtual keyboard`,
                    `-By touching the game area - Snake will follow the touch`,
                ],
            },
            {
                img: "images/myWork/popup-snake-2.png",
                text: [
                    `RWD - The dimensions of canvas depends on screen size and visibility of virtual arrows.`,
                ],
            },
        ],
    },
];
