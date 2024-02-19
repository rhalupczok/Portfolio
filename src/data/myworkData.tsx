import { myWorkInterface } from "./interfaces";

export const myWorkData: myWorkInterface[] = [
    {
        name: "Tenzi Game",
        imgSrc: "my-work-tenzi.png",
        isPlay: true,
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
        // href: "https://rhalupczok.github.io/Portfolio/", //link to app
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
                img: "popup-portfolio-0.png",
                text: [
                    "The page was created with React (React router), TypeScript and SCSS superset technologies",
                    "In accordance with composable idea - components, content, TypeScript interfaces and Style are kept in separate files and the page is builded mapping by them",
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Portfolio/tree/master",
                        desc: "Complete repositorium on GITHUB",
                    },
                ],
            },
            {
                img: "popup-portfolio-1.png",
                text: [
                    "Created accordingly with responsive web design.",
                    "MQ Berakpoints, tools like Flexbox and Grid, considered touchscreens",
                ],
            },
            {
                img: "popup-portfolio-2.png",
                text: ["Dynamic themes"],
            },
            {
                img: "popup-portfolio-3.png",
                text: [
                    "All effects like intro, hobby carousel, popups were coded by myself without using any external libraries",
                ],
                // href: [
                //     {
                //         link: "https://github.com/rhalupczok/Portfolio/blob/239f457b61b763062dab44e839da56d6778c92b6/src/components/HobbiesCarousel.tsx#L1",
                //         desc: "Part of code - hobby carousel popup",
                //     },
                // ],
            },
            {
                img: "popup-portfolio-4.png",
                text: [
                    "Data such as pop-ups or my work content is stored within a distinct container component and integrated into the website through universal methods, enhancing its flexibility and simplifying the process of expanding it.",
                ],
            },
        ],
    },
    {
        name: "Weather app",
        imgSrc: "my-work-weather_app.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Weather-Application/",
        technologies: ["HTML", "JAVASCRIPT", "CSS", "REACT", "TYPESCRIPT"],
        popupData: [
            {
                img: "popup-weather-0.png",
                text: [
                    `Simple weather application fetching the API weather data`,
                    `Created using React and Typescript`,
                ],
                href: [
                    {
                        link: "https://rhalupczok.github.io/Weather-Application/",
                        desc: "OPEN",
                    },
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/tree/master/src",
                        desc: "Complete repositorium on GITHUB",
                    },
                ],
            },
            {
                img: "popup-weather-1.png",
                text: [
                    `The city is set using GPS data (by default) or can be input by user`,
                    `All data is catching using react components / props etc.`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/blob/2e50486dffb906bcf42c5bcc7691cd6c65f139b0/src/App.tsx#L70",
                        desc: "Part of code - getting GPS coordinates",
                    },
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/blob/2e50486dffb906bcf42c5bcc7691cd6c65f139b0/src/App.tsx#L44",
                        desc: "Part of code - setting weather data by GPS data",
                    },
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/blob/2e50486dffb906bcf42c5bcc7691cd6c65f139b0/src/components/Header.tsx#L10",
                        desc: "Part of code - getting the city name",
                    },
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/blob/2e50486dffb906bcf42c5bcc7691cd6c65f139b0/src/App.tsx#L21",
                        desc: "Part of code - setting weather data by city name",
                    },
                ],
            },
            {
                img: "popup-weather-2.png",
                text: [
                    "Added sun walk effect.",
                    "The sun is going from the sunrise to sunset symbol taken into account the time of sunrise/sunset from fetched data and current time",
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Weather-Application/blob/44e7837cc951be6553c356640cc62815244dae4c/src/components/CurrentWeather.tsx#L11",
                        desc: "Part of code - sunwalk effect",
                    },
                ],
            },
        ],
    },
    {
        name: "Air Hockey",
        imgSrc: "my-work-airhockey.jpg",
        isPlay: true,
        href: "https://rhalupczok.github.io/Air-Hockey/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "popup-airhockey-0.jpg",
                text: [
                    `The game was created inspired by standard Air Hockey game which you can find in many touristic places.`,
                    `At the begining I saw a simple pong game and decided to connect the pong game idea with phisics of colliding circle objects`,
                    `It is one on my first projects made directly after I met first JavaScript possibilities. Using classes, expressions. The canvas size adjusting to screen dimension and whole layout depends on size of screen and the type of device (f.eg. touchpad is displayed when mobile phone.)`,
                ],
                href: [
                    {
                        link: "https://rhalupczok.github.io/Air-Hockey/",
                        desc: "PLAY",
                    },
                    {
                        link: "https://github.com/rhalupczok/Air-Hockey",
                        desc: "Complete repositorium on GITHUB",
                    },
                ],
            },
            {
                img: "popup-airhockey-1.png",
                text: [
                    `Player can be control by mouse or touchpad on mobile devices`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Air-Hockey/blob/46bebdb416639659070b656af910f70b3b4b4566/main.js#L596",
                        desc: "Part of code - control",
                    },
                ],
            },
            {
                img: "popup-airhockey-2.png",
                text: [
                    `
                The phisics of hitting the ball was created based on real phisics laws, taken into acount all movement vectors and masses of ball/players.`,
                    `There is also taken into account the table friction to add more reality`,
                    `When the time is up, the friction is increased like in real AirHockey game`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Air-Hockey/blob/46bebdb416639659070b656af910f70b3b4b4566/main.js#L343",
                        desc: "Part of code - phisics",
                    },
                ],
            },
            {
                img: "popup-airhockey-3.png",
                text: [
                    `There is added simple AI Player logic - Tries to save the goal and score`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Air-Hockey/blob/46bebdb416639659070b656af910f70b3b4b4566/main.js#L402",
                        desc: "Part of code - AI",
                    },
                ],
            },
        ],
    },
    {
        name: "Pocket organiser",
        imgSrc: "my-work-pocket_organiser.png",
        isPlay: false,
        href: "https://rhalupczok.github.io/Pocket-Organiser/",
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "popup-pocket-organiser-0.png",
                text: [`Simple app for task or shopping list`],
                href: [
                    {
                        link: "https://rhalupczok.github.io/Pocket-Organiser/",
                        desc: "OPEN",
                    },
                    {
                        link: "https://github.com/rhalupczok/Pocket-Organiser",
                        desc: "Complete repositorium on GITHUB",
                    },
                ],
            },
            {
                img: "popup-pocket-organiser-1.png",
                text: [
                    `Entry the task or item on prepared form`,
                    `As option set deadline for tasks and amount/shop for items`,
                ],
            },
            {
                img: "popup-pocket-organiser-2.png",
                text: [
                    `Language can be directly switched by onClick on the flag`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Pocket-Organiser/blob/8e018d4cb854b6eede0b46bfc7f11cfa7b25ebb4/main.js#L440C9-L440C9",
                        desc: "Part of code - Langue selection",
                    },
                ],
            },
            {
                img: "popup-pocket-organiser-3.png",
                text: [
                    `The items can be filter by shop name`,
                    `Popup window is free moveable`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Pocket-Organiser/blob/8e018d4cb854b6eede0b46bfc7f11cfa7b25ebb4/main.js#L358",
                        desc: "Part of code - filter",
                    },
                    {
                        link: "https://github.com/rhalupczok/Pocket-Organiser/blob/8e018d4cb854b6eede0b46bfc7f11cfa7b25ebb4/main.js#L504",
                        desc: "Part of code - move window",
                    },
                ],
            },
            {
                img: "popup-pocket-organiser-4.png",
                text: [`The data are kept in local storage`],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Pocket-Organiser/blob/8e018d4cb854b6eede0b46bfc7f11cfa7b25ebb4/main.js#L413",
                        desc: "Part of code - storage",
                    },
                ],
            },
            {
                img: "popup-pocket-organiser-5.png",
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
        technologies: ["HTML", "JAVASCRIPT", "CSS"],
        popupData: [
            {
                img: "popup-snake-0.png",
                text: [
                    `The game was created inspired by memories of iconic phone Nokia 3310.`,
                ],
                href: [
                    {
                        link: "https://rhalupczok.github.io/Snake/",
                        desc: "PLAY",
                    },
                    {
                        link: "https://github.com/rhalupczok/Snake",
                        desc: "Complete repositorium on GITHUB",
                    },
                ],
            },
            {
                img: "popup-snake-1.png",
                text: [
                    `Level define the Snake speed and amount of points for each food.`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Snake/blob/dbebc3df3e0f3719ef8787b385b00096c9a845ec/snake.js#L230",
                        desc: "Part of code - level selection",
                    },
                ],
            },
            {
                img: "popup-snake-2.png",
                text: [
                    `3 way of control:`,
                    `-Keyboard arrows`,
                    `-Wirtual keyboard`,
                    `-By touching the game area - Snake will follow the touch`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Snake/blob/dbebc3df3e0f3719ef8787b385b00096c9a845ec/snake.js#L260",
                        desc: "Part of code - control",
                    },
                ],
            },
            {
                img: "popup-snake-3.png",
                text: [
                    `The dimensions of canvas depends on screen size and visibility of virtual arrows.`,
                ],
                href: [
                    {
                        link: "https://github.com/rhalupczok/Snake/blob/dbebc3df3e0f3719ef8787b385b00096c9a845ec/snake.js#L350",
                        desc: "Part of code - resize canvas",
                    },
                ],
            },
        ],
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
