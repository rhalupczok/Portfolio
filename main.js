window.onload = function () {
    header.init();
    menu.init();
    popup.init();
};

class Header {
    header = null;
    main = null;
    // footer = null;
    goToWebBtn = null;
    homeBtn = null;
    soundBtn = null;
    repeatBtn = null;
    finishBtn = null;
    sound = false;
    // htmlBody = null;

    init() {
        textType.textTyping();
        this.header = document.querySelector(".header");
        this.main = document.querySelector(".main");
        // this.footer = document.querySelector("#footer");
        // this.htmlBody = document.querySelectorAll(".if-header");

        this.soundBtn = document.getElementById("sound-btn");
        this.finishBtn = document.getElementById("finish-animation");
        this.repeatBtn = document.getElementById("repeat-btn");

        this.goToWebBtn = document.querySelector(".neon-button");
        this.homeBtn = document.querySelector(".homeBtn");

        this.repeatBtn.addEventListener("click", textType.textTyping);
        this.finishBtn.addEventListener("click", () => {
            textType.animationIsRunning = false;
        });
        this.soundBtn.addEventListener("click", this.audioSound);
        this.goToWebBtn.addEventListener("mouseover", this.hoverEffect);
        this.goToWebBtn.addEventListener("click", this.blankHeader);
        this.homeBtn.addEventListener("click", this.blankHeader);
    }

    audioSound = () => {
        this.sound = !this.sound;
        this.sound
            ? (this.soundBtn.src = "images/header-audio-on.png")
            : (this.soundBtn.src = "images/header-audio-off.png");
    };
    hoverEffect = () => {
        this.goToWebBtn.classList.add("focus");
        setTimeout(() => {
            this.goToWebBtn.classList.remove("focus");
            // this.goToWebBtn.style.background = "#2195f375";
        }, 3000);
    };

    blankHeader = () => {
        this.header.classList.toggle("hidden");
        this.main.classList.toggle("hidden");
        if (!this.main.classList.contains("hidden")) {
            window.scrollTo(0, 0);
            textType.animationIsRunning = false;
            effects.init();
        }
        if (this.sound) this.audioSound();
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
        this.navMenu.classList.toggle("responsive");
        // if (this.navMenu.className === "nav-menu") {
        //     this.navMenu.className += " responsive";
        // } else {
        //     this.navMenu.className = "nav-menu";
        // }
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

class Effects {
    //--------section about
    characters = Array.from(document.getElementById("characters").children);
    profileIMG = document.getElementById("profile-img");
    profileIMGcontainer = document.getElementById("profile-img-container");

    init() {
        console.log(this.characters[0].children[0]);
        for (let i = 0; i < this.characters.length; i++) {
            setTimeout(() => {
                this.characters[i].style.transform = "none";
            }, 100 + i * 500);
        }
        setTimeout(() => {
            this.profileIMGcontainer.style.transform = "none";
        }, 4000);
        setTimeout(() => {
            this.profileIMG.style.opacity = "1";
        }, 5000);
        for (let i = 0; i < this.characters.length; i++) {
            setTimeout(() => {
                this.characters[i].children[0].classList.toggle(
                    "highlight-effect"
                );
            }, 6000 + i * 100);
            setTimeout(() => {
                this.characters[i].children[0].classList.toggle(
                    "highlight-effect"
                );
            }, 10000);
        }
    }
    //--------/section about
}

class Popup {
    constructor() {
        document.addEventListener("keydown", (e) => this.keyDown(e));
        this.closePopupBG.addEventListener("click", (e) => {
            if (
                e.target.id === "close-popup-bg" ||
                e.target.id === "popup-card"
            )
                this.closePopups();
        });
        this.popupBtns.forEach((btn) =>
            btn.addEventListener("click", (e) => this.openPopup(e))
        );
        this.myHobbiesBtn.addEventListener("click", () =>
            this.openHobbiesPopup()
        );
    }

    closePopupBG = document.getElementById("close-popup-bg");
    myJob = document.getElementById("my-job-popup");
    myHobbies = document.getElementById("my-hobbies-popup");
    myHobbiesBtn = document.getElementById("my-hobbies-popup-btn");
    cyberGame = document.getElementById("cyber-game-popup");
    snake = document.getElementById("snake-popup");
    organiser = document.getElementById("organiser-popup");
    weather = document.getElementById("weather-popup");
    portfolio = document.getElementById("portfolio-popup");
    otherProjects = document.getElementById("other-projects-popup");

    currentPopup = this.underConstruction;
    currentPopupNum = 0;

    popupPictures = document.querySelector(".popup-pictures");
    popupIMG = document.querySelector(".popup-img");
    popupOuter = document.querySelector(".popup-outer");
    popupInner = document.querySelector(".popup-inner");
    // popupArrowLeft = document.getElementById("popup-arrow-left");
    // popupArrowRight = document.getElementById("popup-arrow-right");

    popupBtns = Array.from(document.querySelectorAll(".open-popup-btn"));

    popupCard;

    swipeMemory = {
        x: [],
        y: [],
        match: "",
    };
    tolerance = 100;
    mouseMoveStarted = false;

    init() {
        this.closePopups();

        // this.popupArrowLeft.addEventListener("click", this.previousPopup);
        // this.popupArrowRight.addEventListener("click", this.nextPopup);
    }

    // createPopups = () => {
    //     for (let i = 0; i < Object.keys(this.currentPopup).length; i++) {
    //         let popup = document.createElement("div");
    //         popup.setAttribute("data-pos", i - 2);
    //         i == 0
    //             ? popup.classList.add(
    //                   "popup-card",
    //                   "carousel__item",
    //                   "hide-popup",
    //                   "show-popup"
    //               )
    //             : popup.classList.add("popup-card", "hide-popup");

    //         let popupPictures = document.createElement("div");
    //         popupPictures.classList.add("popup-pictures");

    //         let popupIMG = document.createElement("img");
    //         popupIMG.src = this.currentPopup[i].img;
    //         popupIMG.classList.add("popup-img");
    //         popupPictures.appendChild(popupIMG);

    //         let popupOuter = document.createElement("div");
    //         popupOuter.classList.add("popup-outer");
    //         let popupInner = document.createElement("div");
    //         popupInner.classList.add("popup-inner");
    //         popupInner.innerHTML = this.currentPopup[i].text;
    //         popupOuter.appendChild(popupInner);

    //         popup.appendChild(popupPictures);
    //         popup.appendChild(popupOuter);

    //         this.closePopupBG.appendChild(popup);
    //     }
    // };

    createPopups = () => {
        for (let i = 0; i < Object.keys(this.currentPopup).length; i++) {
            let popup = document.createElement("div");
            popup.id = "popup-card";
            popup.setAttribute("data-pos", i);
            i == 0
                ? popup.classList.add(
                      "popup-card",
                      "carousel__item",
                      "carousel__item_active"
                  )
                : popup.classList.add("popup-card", "carousel__item");

            i > 1
                ? popup.classList.add("right_popup")
                : popup.classList.remove("right_popup");
            i < -1
                ? popup.classList.add("left_popup")
                : popup.classList.remove("left_popup");

            let popupPictures = document.createElement("div");
            popupPictures.classList.add("popup-pictures");

            let popupIMG = document.createElement("img");
            popupIMG.src = this.currentPopup[i].img;
            popupIMG.classList.add("popup-img");
            popupPictures.appendChild(popupIMG);

            let popupOuter = document.createElement("div");
            popupOuter.classList.add("popup-outer");
            let popupInner = document.createElement("div");
            popupInner.classList.add("popup-inner");
            popupInner.innerHTML = this.currentPopup[i].text;
            popupOuter.appendChild(popupInner);

            popup.appendChild(popupPictures);
            popup.appendChild(popupOuter);

            this.closePopupBG.appendChild(popup);
        }
        this.carouselItems = document.querySelectorAll(".carousel__item");
        this.elems = Array.from(this.carouselItems);
        console.log(this.elems);
        this.elems.forEach((el) => {
            el.addEventListener("touchstart", (e) => this.touchStart(e), false);
            el.addEventListener("touchmove", (e) => this.touchMove(e), false);
            el.addEventListener("touchend", (e) => this.touchEnd(e), false);
            el.addEventListener("mousedown", (e) => this.mouseStart(e), false);
            el.addEventListener("mousemove", (e) => this.mouseMove(e), false);
            el.addEventListener("mouseup", (e) => this.mouseEnd(e), false);
        });

        // this.popupCard = document.querySelector(".carousel__item_active");
        // this.popupCard.addEventListener(
        //     "touchstart",
        //     (e) => this.touchStart(e),
        //     false
        // );
        // this.popupCard.addEventListener(
        //     "touchmove",
        //     (e) => this.touchMove(e),
        //     false
        // );
        // this.popupCard.addEventListener(
        //     "touchend",
        //     (e) => this.touchEnd(e),
        //     false
        // );
    };

    // previousPopup = () => {
    //     if (this.currentPopupNum > 0) {
    //         let current = document.querySelectorAll(
    //             `div[number="${this.currentPopupNum}"]`
    //         );
    //         current.forEach((el) => el.classList.remove("show-popup"));
    //         console.log(current);
    //         this.currentPopupNum--;
    //         let next = document.querySelectorAll(
    //             `div[number="${this.currentPopupNum}"]`
    //         );
    //         next.forEach((el) => el.classList.add("show-popup"));
    //     }
    //     if (this.currentPopupNum != Object.keys(this.currentPopup).length - 1)
    //         this.popupArrowRight.classList.remove("no-hover");
    //     if (this.currentPopupNum === 0)
    //         this.popupArrowLeft.classList.add("no-hover");
    // };

    // nextPopup = () => {
    //     if (this.currentPopupNum < Object.keys(this.currentPopup).length - 1) {
    //         let current = document.querySelectorAll(
    //             `div[number="${this.currentPopupNum}"]`
    //         );
    //         current.forEach((el) => el.classList.remove("show-popup"));
    //         console.log(current);
    //         this.currentPopupNum++;
    //         let next = document.querySelectorAll(
    //             `div[number="${this.currentPopupNum}"]`
    //         );
    //         next.forEach((el) => el.classList.add("show-popup"));
    //     }
    //     if (this.currentPopupNum === Object.keys(this.currentPopup).length - 1)
    //         this.popupArrowRight.classList.add("no-hover");
    //     if (this.currentPopupNum != 0)
    //         this.popupArrowLeft.classList.remove("no-hover");
    // };

    // popupContent = () => {
    //     console.log(this.currentPopupNum);
    //     this.popupIMG.src = this.currentPopup[this.currentPopupNum].img;
    //     this.popupInner.innerHTML =
    //         this.currentPopup[this.currentPopupNum].text;
    // };

    openHobbiesPopup = () => {
        this.myHobbies.classList.toggle("show-hobbies");
        this.closePopupBG.classList.add("show-popup");
        const items = Array.from(
            document.querySelectorAll(".hobbies-carousel-item")
        );
        items.forEach((el, index) => {
            setTimeout(() => {
                el.classList.toggle(`it${index + 1}`);
                console.log(el, index);
            }, index * 500);
        });
    };

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
        // if (this.currentPopup[1]) {
        //     this.popupArrowLeft.classList.add("no-hover");
        //     this.popupArrowRight.classList.remove("no-hover");
        //     this.popupArrowLeft.classList.add("show-popup");
        //     this.popupArrowRight.classList.add("show-popup");
        // }

        this.createPopups();
    }

    updatePosition = (newActivePos) => {
        if (newActivePos === "0") return;
        let leftCheckFlag = false;
        let rightCheckFlag = false;
        this.elems.forEach((el) => {
            let currentNum = parseInt(el.dataset.pos);
            if (currentNum >= this.elems.length - 1 && newActivePos === "-1")
                rightCheckFlag = true;
            if (currentNum <= -this.elems.length + 1 && newActivePos === "1")
                leftCheckFlag = true;
        });
        if (leftCheckFlag === true || rightCheckFlag === true) return;
        this.elems.forEach((el) => {
            let currentNum = parseInt(el.dataset.pos);
            if (currentNum == 0) el.classList.remove("carousel__item_active");
            newActivePos > 0
                ? (el.dataset.pos = currentNum - 1)
                : (el.dataset.pos = currentNum + 1);
            if (el.dataset.pos == 0) el.classList.add("carousel__item_active");
            el.dataset.pos > 1
                ? el.classList.add("right_popup")
                : el.classList.remove("right_popup");
            el.dataset.pos < -1
                ? el.classList.add("left_popup")
                : el.classList.remove("left_popup");
        });
        // this.popupCard = document.querySelector(".carousel__item_active");
        // this.popupCard.addEventListener(
        //     "touchstart",
        //     (e) => this.touchStart(e),
        //     false
        // );
        // this.popupCard.addEventListener(
        //     "touchmove",
        //     (e) => this.touchMove(e),
        //     false
        // );
        // this.popupCard.addEventListener(
        //     "touchend",
        //     (e) => this.touchEnd(e),
        //     false
        // );
    };

    closePopups() {
        this.closePopupBG.replaceChildren();
        if (this.myHobbies.classList.contains("show-hobbies")) {
            this.openHobbiesPopup();
        }
        document.querySelectorAll(".show-popup").forEach((el) => {
            el.classList.remove("show-popup");
        });
        if (innerWidth <= 768) menu.navMenu.className = "nav-menu";
    }

    //-------------------navigate

    keyDown(e) {
        if (e.keyCode === 27) {
            this.closePopups(e);
            if (innerWidth <= 768) menu.navMenu.className = "nav-menu";
        }

        if (e.keyCode === 37) this.updatePosition("-1"); // left
        if (e.keyCode === 39) this.updatePosition("1"); // right
    }

    // --------------------- swipe

    touchStart = (e) => {
        // e.preventDefault();
        for (let i = 0; i < e.touches.length; i++) {
            this.swipeMemory.x.push(e.touches[i].clientX);
            this.swipeMemory.y.push(e.touches[i].clientY);
        }
    };
    touchMove = (e) => {
        e.preventDefault();
        for (let i = 0; i < e.touches.length; i++) {
            this.swipeMemory.x.push(e.touches[i].clientX);
            this.swipeMemory.y.push(e.touches[i].clientY);
        }
    };

    touchEnd = () => {
        let xTravel =
            this.swipeMemory.x[this.swipeMemory.x.length - 1] -
            this.swipeMemory.x[0];
        let yTravel =
            this.swipeMemory.y[this.swipeMemory.y.length - 1] -
            this.swipeMemory.y[0];

        if (
            yTravel < this.tolerance &&
            yTravel > -this.tolerance &&
            xTravel < -this.tolerance
        ) {
            console.log("Swiped Left");
            this.updatePosition("1");
        }
        if (
            yTravel < this.tolerance &&
            yTravel > -this.tolerance &&
            xTravel > this.tolerance
        ) {
            console.log("Swiped Right");
            this.updatePosition("-1");
        }
        this.swipeMemory.x = [];
        this.swipeMemory.y = [];
        this.swipeMemory.match = xTravel = yTravel = "";
    };

    mouseStart = (e) => {
        // e.preventDefault();
        this.mouseMoveStarted = true;
        this.swipeMemory.x.push(e.clientX);
        this.swipeMemory.y.push(e.clientY);
    };
    mouseMove = (e) => {
        e.preventDefault();

        if (this.mouseMoveStarted) {
            this.swipeMemory.x.push(e.clientX);
            this.swipeMemory.y.push(e.clientY);
        }
    };

    mouseEnd = (e) => {
        let item = e.target.closest(".carousel__item");
        let xTravel =
            this.swipeMemory.x[this.swipeMemory.x.length - 1] -
            this.swipeMemory.x[0];
        let yTravel =
            this.swipeMemory.y[this.swipeMemory.y.length - 1] -
            this.swipeMemory.y[0];
        if (item.dataset.pos === "0") {
            if (
                yTravel < this.tolerance &&
                yTravel > -this.tolerance &&
                xTravel < -this.tolerance
            ) {
                console.log("Swiped Left");
                this.updatePosition("1");
            }
            if (
                yTravel < this.tolerance &&
                yTravel > -this.tolerance &&
                xTravel > this.tolerance
            ) {
                console.log("Swiped Right");
                this.updatePosition("-1");
            }
        } else {
            this.updatePosition(item.dataset.pos);
            console.log("dsfdsf");
        }

        this.swipeMemory.x = [];
        this.swipeMemory.y = [];
        this.swipeMemory.match = xTravel = yTravel = "";
        this.mouseMoveStarted = false;
    };

    // Swipe Up / Down / Left / Right
    // initialX = null;
    // initialY = null;

    // startTouch = (e) => {
    //     this.initialX = e.touches[0].clientX;
    //     this.initialY = e.touches[0].clientY;
    // };

    // moveTouch = (e) => {
    //     if (this.initialX === null) {
    //         return;
    //     }

    //     if (this.initialY === null) {
    //         return;
    //     }

    //     var currentX = e.touches[0].clientX;
    //     var currentY = e.touches[0].clientY;

    //     var diffX = this.initialX - currentX;
    //     var diffY = this.initialY - currentY;

    //     if (Math.abs(diffX) > Math.abs(diffY)) {
    //         // sliding horizontally
    //         if (diffX > 0) {
    //             // swiped left
    //             console.log("swiped left");
    //             this.updatePosition("1");
    //         } else {
    //             // swiped right
    //             console.log("swiped right");
    //             this.updatePosition("-1");
    //         }
    //     } else {
    //         // sliding vertically
    //         if (diffY > 0) {
    //             // swiped up
    //             console.log("swiped up");
    //         } else {
    //             // swiped down
    //             console.log("swiped down");
    //         }
    //     }

    //     this.initialX = null;
    //     this.initialY = null;

    //     e.preventDefault();
    // };
    // ----------------------/swipe

    //------------------ /navigate

    //-------------------content
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

class TextType {
    headerTxt = Array.from(
        document.querySelectorAll("#header-text-content .text-typing")
    );
    headerTxtStorage = [
        "Welcome on my portfolio page",
        "My name is",
        "Radosław Halupczok",
        "Front-End Developer Candidate",
    ];
    kayboardTypingAudio = document.getElementById("keyboard-typing-audio");
    animationIsRunning = false;
    i = 0;
    j = 0;
    k = 0;
    speed = 150;

    finishAnimation = () => {
        header.hoverEffect();
        this.i = 0;
        this.j = 0;
        this.kayboardTypingAudio.pause();
        this.kayboardTypingAudio.currentTime = 0;
        this.headerTxt.forEach((el) => {
            el.textContent = this.headerTxtStorage[this.i];
            this.i++;
        });
        this.i = 0;
        header.repeatBtn.style.visibility = "visible";
    };

    textTyping = () => {
        if (this.animationIsRunning) return;
        this.animationIsRunning = true;
        this.headerTxt.forEach((el) => (el.textContent = ""));
        this.blinkingCursor();
    };

    blinkingCursor = () => {
        if (this.k < 6 && this.animationIsRunning) {
            this.headerTxt[this.j].textContent === ""
                ? (this.headerTxt[this.j].textContent = "|")
                : (this.headerTxt[this.j].textContent = "");
            this.k++;
            setTimeout(() => this.blinkingCursor(), this.speed * 3);
        } else {
            this.k = 0;
            this.typeWriter();
        }
    };

    typeWriter = () => {
        header.sound
            ? this.kayboardTypingAudio.play()
            : this.kayboardTypingAudio.pause();
        if (this.j < this.headerTxtStorage.length && this.animationIsRunning) {
            if (this.i < this.headerTxtStorage[this.j].length) {
                this.headerTxt[this.j].textContent += this.headerTxtStorage[
                    this.j
                ].charAt(this.i);
                this.i++;
                setTimeout(() => this.typeWriter(), this.speed);
            }
        }
        if (this.j < this.headerTxtStorage.length && this.animationIsRunning) {
            if (this.i == this.headerTxtStorage[this.j].length) {
                this.i = 0;
                this.j++;
            }
        } else {
            this.animationIsRunning = false;
            this.finishAnimation();
        }
    };
}

const menu = new Menu();
const header = new Header();
const popup = new Popup();
const textType = new TextType();
const effects = new Effects();
