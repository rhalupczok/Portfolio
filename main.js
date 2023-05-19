window.onload = function () {
    header.init();
    menu.init();
    popup.init();
};

class Header {
    header = null;
    main = null;
    footer = null;
    goToWebBtn = null;
    homeBtn = null;

    init() {
        this.header = document.querySelector(".header");
        this.main = document.querySelector(".main");
        this.footer = document.querySelector("#footer");

        this.goToWebBtn = document.querySelector(".neon-button");
        this.homeBtn = document.querySelector(".homeBtn");

        this.goToWebBtn.addEventListener("click", this.blankHeader);
        this.homeBtn.addEventListener("click", this.displayHeader);
    }

    blankHeader = () => {
        if (this.header.classList.contains("hidden")) return;
        this.header.classList.add("hidden");
        this.main.classList.remove("hidden");
        this.footer.classList.remove("hidden");
        // this.header.style.display = "none";
    };

    displayHeader = () => {
        if (!this.header.classList.contains("hidden")) return;
        this.header.classList.remove("hidden");
        this.main.classList.add("hidden");
        this.footer.classList.add("hidden");
    };
}

class Menu {
    navMenu = null;
    menuBtn = null;
    aboutMe = null;
    myWork = null;
    contact = null;
    cv = null;
    myWorkBtn = null;

    init() {
        this.navMenu = document.querySelector(".nav-menu");
        this.menuBtn = document.getElementById("menuBtn");
        this.aboutMe = document.getElementById("about");
        this.myWork = document.getElementById("my-work");
        this.myWorkBtn = document.getElementById("my-work-btn");
        this.cv = document.getElementById("cv");
        this.contact = document.getElementById("contact");
        this.navMenu.addEventListener("click", (e) => this.scrollTo(e));
        this.myWorkBtn.addEventListener("click", (e) => this.scrollTo(e));
        menuBtn.addEventListener("click", this.openMenu);
    }

    openMenu = () => {
        if (this.navMenu.className === "nav-menu") {
            this.navMenu.className += " responsive";
        } else {
            this.navMenu.className = "nav-menu";
        }
    };

    scrollTo = (e) => {
        this.navMenu.className = "nav-menu";
        if (e.target.id === "about-me-nav")
            this.aboutMe.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        if (e.target.id === "my-work-nav" || e.target.id === "my-work-btn")
            this.myWork.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        if (e.target.id === "cv-nav")
            this.cv.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        if (e.target.id === "contact-nav")
            this.contact.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
    };
}

class Popup {
    closePopupBG = document.getElementById("close-popup-bg");
    myJob = document.getElementById("my-job-popup");
    myHobbies = document.getElementById("my-hobbies-popup");
    cyberGame = document.getElementById("cyber-game-popup");
    snake = document.getElementById("snake-popup");
    organiser = document.getElementById("organiser-popup");
    weather = document.getElementById("weather-popup");
    portfolio = document.getElementById("portfolio-popup");
    otherProjects = document.getElementById("other-projects-popup");

    currentPopup = this.underConstruction;
    currentPopupNum = 0;

    popup = document.getElementById("popup");

    popupPictures = document.querySelector(".popup-pictures");
    popupIMG = document.querySelector(".popup-img");
    popupOuter = document.querySelector(".popup-outer");
    popupInner = document.querySelector(".popup-inner");
    popupArrowLeft = document.getElementById("popup-arrow-left");
    popupArrowRight = document.getElementById("popup-arrow-right");

    popupBtns = Array.from(document.querySelectorAll(".open-popup-btn"));

    init() {
        this.closePopups();
        document.addEventListener("keydown", (e) => this.keyDown(e));
        this.closePopupBG.addEventListener("click", () => this.closePopups());
        this.popupBtns.forEach((btn) =>
            btn.addEventListener("click", (e) => this.openPopup(e))
        );
        this.popupArrowLeft.addEventListener("click", this.previousPopup);
        this.popupArrowRight.addEventListener("click", this.nextPopup);
    }

    createPopups = () => {
        for (let i = 0; i < Object.keys(this.currentPopup).length; i++) {
            let popupPictures = document.createElement("div");
            popupPictures.setAttribute("number", i);
            i == 0
                ? popupPictures.classList.add(
                      "popup-pictures",
                      "hide-popup",
                      "show-popup"
                  )
                : popupPictures.classList.add("popup-pictures", "hide-popup");
            let popupIMG = document.createElement("img");
            popupIMG.src = this.currentPopup[i].img;
            popupIMG.classList.add("popup-img");
            popupPictures.appendChild(popupIMG);

            let popupOuter = document.createElement("div");
            i == 0
                ? popupOuter.classList.add(
                      "popup-outer",
                      "hide-popup",
                      "show-popup"
                  )
                : popupOuter.classList.add("popup-outer", "hide-popup");
            popupOuter.setAttribute("number", i);
            let popupInner = document.createElement("div");
            popupInner.classList.add("popup-inner");
            popupInner.innerHTML = this.currentPopup[i].text;
            popupOuter.appendChild(popupInner);

            this.popup.appendChild(popupPictures);
            this.popup.appendChild(popupOuter);
        }
    };

    previousPopup = () => {
        if (this.currentPopupNum > 0) {
            let current = document.querySelectorAll(
                `div[number="${this.currentPopupNum}"]`
            );
            current.forEach((el) => el.classList.remove("show-popup"));
            console.log(current);
            this.currentPopupNum--;
            let next = document.querySelectorAll(
                `div[number="${this.currentPopupNum}"]`
            );
            next.forEach((el) => el.classList.add("show-popup"));
        }
        if (this.currentPopupNum != Object.keys(this.currentPopup).length - 1)
            this.popupArrowRight.classList.remove("no-hover");
        if (this.currentPopupNum === 0)
            this.popupArrowLeft.classList.add("no-hover");
    };

    nextPopup = () => {
        if (this.currentPopupNum < Object.keys(this.currentPopup).length - 1) {
            let current = document.querySelectorAll(
                `div[number="${this.currentPopupNum}"]`
            );
            current.forEach((el) => el.classList.remove("show-popup"));
            console.log(current);
            this.currentPopupNum++;
            let next = document.querySelectorAll(
                `div[number="${this.currentPopupNum}"]`
            );
            next.forEach((el) => el.classList.add("show-popup"));
        }
        if (this.currentPopupNum === Object.keys(this.currentPopup).length - 1)
            this.popupArrowRight.classList.add("no-hover");
        if (this.currentPopupNum != 0)
            this.popupArrowLeft.classList.remove("no-hover");
    };

    // popupContent = () => {
    //     console.log(this.currentPopupNum);
    //     this.popupIMG.src = this.currentPopup[this.currentPopupNum].img;
    //     this.popupInner.innerHTML =
    //         this.currentPopup[this.currentPopupNum].text;
    // };

    openPopup(e) {
        this.currentPopup = this.underConstruction;
        this.currentPopupNum = 0;
        this.closePopupBG.classList.add("show-popup");
        // this.popupPictures.classList.add("show-popup");
        // this.popupOuter.classList.add("show-popup");
        switch (e.target.id) {
            case "my-job-popup-btn":
                this.currentPopup = this.myJob;
                break;
            //     case "my-hobbies-popup-btn":
            //         this.myHobbies.classList.add("show-popup");
            //         break;
            case "cyber-game-popup-btn":
                this.currentPopup = this.cyberGame;
                break;
            case "snake-popup-btn":
                this.currentPopup = this.snake;
                break;
            case "organiser-popup-btn":
                this.currentPopup = this.pocketOrganiser;
                break;
            case "weather-popup-btn":
                this.currentPopup = this.weather;
                break;
            case "portfolio-popup-btn":
                this.currentPopup = this.portfolio;
                break;
            //     case "other-projects-popup-btn":
            //         this.otherProjects.classList.add("show-popup");
            //         break;
        }
        if (this.currentPopup[1]) {
            this.popupArrowLeft.classList.add("no-hover");
            this.popupArrowRight.classList.remove("no-hover");
            this.popupArrowLeft.classList.add("show-popup");
            this.popupArrowRight.classList.add("show-popup");
        }

        this.createPopups();
    }

    closePopups() {
        this.popup.replaceChildren();
        document.querySelectorAll(".show-popup").forEach((el) => {
            el.classList.remove("show-popup");
        });
        if (innerWidth <= 768) menu.navMenu.className = "nav-menu";
    }
    keyDown(e) {
        if (e.keyCode === 27) {
            this.closePopups();
            if (innerWidth <= 768) menu.navMenu.className = "nav-menu";
        }
    }

    underConstruction = {
        0: {
            img: "images/popup-in-build-1.png",
            text: `<p>
                    <br>
                    Sorry, content of this popup has been not finished yet.
                    <br><br>
                    </p>`,
        },
    };
    myJob = {
        0: {
            img: "images/my-job-1.jpg",
            text: `<p>
                        We implement automation and robotics projects for the big automotive brands such as Audi, BMW, VW, Tesla etc.
                        The scope of work is from project and planning, throuht offline simulation which is virtual building whole production lines, till build up the whole line in reality on factory plant. It is very big, time consuming and complicated process with many difficult steps which we always have to face to. </br></br>
                        At the beginning of my Automotive adventure I had a simple tasks like fulfilling documentations or checking simple robots movements. With increasing experience I became a project leader   and   manage a whole project scope. </br></br>
                        Why do I want to change it? Because I fill that I will not develop myself anymore in this branch of industry. I am looking for new opportunities and challenges.
                    </p>`,
        },
    };

    cyberGame = {
        0: {
            img: "images/popup-cyber-game-0.jpg",
            text: `<p>
            The game was created inspired by standard Air Hockey game which you can find in many touristic places. <br><br>
            Code rep: 
            <a
            href="https://github.com/rhalupczok/Cyber_Game"
            target="_blank"
            class="txt-highlight"
            ><span>GITHUB REPO</span></a>  
        </p>`,
        },
        1: {
            img: "images/popup-cyber-game-1.png",
            text: `<p>
            Control player by mouse or touchpad on mobile devices            
        </p>`,
        },
        2: {
            img: "images/popup-cyber-game-2.png",
            text: `<p>
            The phisics of hitting the ball was created based on real phisics laws, taken into acount all movement vectors and masses of ball/players.<br>
            <a
            href="https://github.com/rhalupczok/Cyber_Game/blob/gh-pages/main.js#L344"
            target="_blank"
            class="txt-highlight"
            ><span>Physics JS Code</span></a>               
        </p>`,
        },
        3: {
            img: "images/popup-cyber-game-3.png",
            text: `<p>
            AI Player logic try to save the goal and score<br>
            <a
            href="https://github.com/rhalupczok/Cyber_Game/blob/gh-pages/main.js#L400"
            target="_blank"
            class="txt-highlight"
            ><span>AI Player JS Code</span></a>                     
        </p>`,
        },
    };

    pocketOrganiser = {
        0: {
            img: "images/popup-pocket-organiser-0.png",
            text: `<p>
            Simple app with task or shopping list <br><br>
            Code rep: 
            <a
            href="https://github.com/rhalupczok/pocket_organiser"
            target="_blank"
            class="txt-highlight"
            ><span>GITHUB REPO</span></a>            
        </p>`,
        },
        1: {
            img: "images/popup-pocket-organiser-1.png",
            text: `<p>
            Entry the task or item on prepared form. <br><br>You can set deadline for tasks and amount or shop for items.
        </p>`,
        },
        2: {
            img: "images/popup-pocket-organiser-2.png",
            text: `<p>
            You can dynamically switch the language by click on the flag in left bottom corner.
        </p>`,
        },
        3: {
            img: "images/popup-pocket-organiser-3.png",
            text: `<p>
            You can filter the item list by the shop name. <br><br> The filter window is moveable.
        </p>`,
        },
        4: {
            img: "images/popup-pocket-organiser-4.png",
            text: `<p>
            The data are kept in local storage.<br>
            <a
            href="https://github.com/rhalupczok/pocket_organiser/blob/gh-pages/main.js#LL421C1-L421C1"
            target="_blank"
            class="txt-highlight"
            ><span>Local storage JS Code</span></a>    
        </p>`,
        },
    };

    snake = {
        0: {
            img: "images/popup-snake-0.png",
            text: `<p>
                The game was created inspired by memories of iconic phone Nokia 3310.<br></p>
                <p>
                Code rep: 
                <a
                href="https://github.com/rhalupczok/Snake"
                target="_blank"
                class="txt-highlight"
                ><span>GITHUB REPO</span></a>            
            </p>`,
        },
        1: {
            img: "images/popup-snake-1.png",
            text: `<p>
                Level define the Snake speed and amount of points for each food.
            </p>`,
        },
        2: {
            img: "images/popup-snake-2.png",
            text: `<p>
                3 way of control:<br>
                - Keyboard arrows<br>
                - Wirtual keyboard on screen<br>
                - By touching the game area - Snake will follow the touch<br>
            </p>`,
        },
    };

    weather = {
        0: {
            img: "images/popup-weather-0.png",
            text: `<p>
                Simple weather application based on data delivered in API format<br></p>
                <p>
                Code rep: 
                <a
                href="https://github.com/rhalupczok/WeatherApp"
                target="_blank"
                class="txt-highlight"
                ><span>GITHUB REPO</span></a>            
            </p>`,
        },
        1: {
            img: "images/popup-weather-1.png",
            text: `<p>
            You can check the weather by your current location or write the city name. <br>
            Just click in any day on the bottom to check the forecast weather details.
            </p>`,
        },
        2: {
            img: "images/popup-weather-2.png",
            text: `<p>
            Just click on the city name to open the map in new tab.
            </p>`,
        },
    };
    portfolio = {
        0: {
            img: "images/my-work-portfolio.png",
            text: `<p>
                The portfolio page was created using SCSS superset </p>
                <p>
                For more details you can look at github repositorium.</p>
                <p>
                Code rep: 
                <a
                href="https://github.com/rhalupczok/Portfolio"
                target="_blank"
                class="txt-highlight"
                ><span>GITHUB REPO</span></a>            
            </p>`,
        },
    };
}

const menu = new Menu();
const header = new Header();
const popup = new Popup();
