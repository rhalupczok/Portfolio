window.onload = function () {
    header.init();
    menu.init();
    popup.init();
    effects.init();
};

class Header {
    constructor() {}
    header = document.querySelector(".header");
    introBg = document.getElementById("intro-bg");
    goToWebBtn = document.querySelector(".neon-button");
    soundBtn = document.getElementById("sound-btn");
    skipBtn = document.getElementById("finish-animation");
    repeatBtn = document.getElementById("repeat-btn");
    introCarousel = document.querySelector(".intro-carousel");
    introCarouselItems = Array.from(
        document.querySelectorAll(".intro-carousel-item")
    );

    introPicture = document.querySelector(".intro-picture");
    headerTxt = Array.from(document.querySelectorAll(".header-text-typing"));
    headerTxtStorage = [
        "Welcome on my portfolio page",
        "My name is",
        "Radosław Halupczok",
        "Front-End Developer Candidate",
    ];

    introStep;
    introStatus = false;

    init() {
        this.soundBtn.addEventListener("click", () =>
            effects.audioSwitch(this.soundBtn)
        );
        this.goToWebBtn.addEventListener("mouseover", this.hoverEffect);
        this.goToWebBtn.addEventListener("click", this.blankHeader);
        this.initIntro();
    }

    hoverEffect = () => {
        this.goToWebBtn.classList.add("focus");
        setTimeout(() => {
            this.goToWebBtn.classList.remove("focus");
            // this.goToWebBtn.style.background = "#2195f375";
        }, 3000);
    };

    repeatIntro = () => {
        effects.carouselOff = true;
        this.introStatus = true;
        this.introSequence();
    };

    skipIntro = () => {
        effects.typingAnimationFlag = false;
        this.introStep = 4;
    };

    initIntro = () => {
        this.introBg.classList.toggle("hidden");
        this.introStatus = true;
        this.introStep = 0;
        this.introSequence();
    };

    introSequence = () => {
        effects.typingAnimationFlag
            ? (effects.carouselPaused = true)
            : (effects.carouselPaused = false);
        if (this.introStep == 0 && !effects.carouselStatus) {
            this.skipBtn.addEventListener("click", this.skipIntro);
            this.skipBtn.style.opacity = "1";
            this.repeatBtn.removeEventListener("click", this.repeatIntro);
            this.repeatBtn.style.opacity = "0.2";

            this.introCarousel.style.transform = `rotateY(0deg)`;
            this.introPicture.style.transform = `rotateY(0deg)`;
            this.headerTxt.forEach((el, index) => {
                el.textContent = "";
            });
            effects.rotationAngle = 0;
            effects.rotationSpeed = 40;
            effects.typingAnimationFlag = true;
            effects.carouselPaused = true;
            effects.carouselOff = false;
            effects.carouselRotation(this.introCarousel, this.introPicture);
            effects.textTyping(this.headerTxtStorage[0], this.headerTxt[0]);
            this.introStep++;
        }
        if (this.introStep == 1 && effects.rotationAngle > 118) {
            effects.carouselPaused = true;
            effects.typingAnimationFlag = true;
            effects.textTyping(this.headerTxtStorage[1], this.headerTxt[1]);
            this.introStep++;
        }
        if (this.introStep == 2 && effects.typingAnimationFlag == false) {
            effects.carouselPaused = true;
            effects.typingAnimationFlag = true;
            effects.textTyping(this.headerTxtStorage[2], this.headerTxt[2]);
            this.introStep++;
        }
        if (this.introStep == 3 && effects.rotationAngle > 238) {
            effects.typingAnimationFlag = true;
            effects.textTyping(this.headerTxtStorage[3], this.headerTxt[3]);
            effects.rotationSpeed = 30;
            this.introStep++;
        }
        if (this.introStep == 4 && effects.typingAnimationFlag == false) {
            this.hoverEffect();
            this.headerTxt.forEach((el, index) => {
                el.textContent = this.headerTxtStorage[index];
            });

            this.skipBtn.removeEventListener("click", this.skipIntro);
            this.skipBtn.style.opacity = "0.2";
            this.repeatBtn.addEventListener("click", this.repeatIntro);
            this.repeatBtn.style.opacity = "1";

            effects.rotationSpeed = 30;
            this.introStatus = false;
            this.introStep = 0;
        }

        if (this.introStatus) {
            setTimeout(() => this.introSequence(), 100);
        } else this.introStatus = false;
    };

    blankHeader = () => {
        this.header.classList.toggle("hidden");
        if (!main.mainIntroFinished) main.mainIntro();
        if (this.sound) this.audioSound();
    };
}

class Menu {
    constructor() {}
    navMenu = document.querySelector(".nav-menu");
    introBtn = document.querySelector(".intro-btn");
    menuBtn = document.getElementById("menuBtn");
    aboutMe = document.getElementById("about");
    myWork = document.getElementById("my-work");
    myWorkBtn = document.getElementById("my-work-btn");
    cv = document.getElementById("cv");
    contact = document.getElementById("contact");

    init() {
        this.introBtn.addEventListener("click", header.blankHeader);
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
    constructor() {}
    //--------section about
    rotationAngle = 0;
    rotationSpeed = 20;
    carouselOff = true;
    carouselPaused = true;
    carouselStatus = false;

    hobbiesCarousel = document.querySelector(".hobbies-carousel");
    introCarousel = document.querySelector(".intro-carousel");

    init() {}

    //--------/section about

    // carousel rotation

    rotate = (dt, content, additionalContent = false) => {
        if (!this.carouselPaused) {
            this.rotationAngle += dt * this.rotationSpeed;
            this.rotationAngle > 360
                ? (this.rotationAngle = 0)
                : this.rotationAngle;
            content.style.transform = `rotateY(${this.rotationAngle}deg)`;
            if (additionalContent)
                additionalContent.style.transform = `rotateY(${-this
                    .rotationAngle}deg)`;
        }
    };

    carouselRotation = (content, additionalContent) => {
        let lastTime;
        const callback = (millis) => {
            this.carouselStatus = true;
            if (lastTime) {
                this.rotate(
                    (millis - lastTime) / 1000,
                    content,
                    additionalContent
                ); //calling the update finction with const time in sec
            }
            lastTime = millis;
            !this.carouselOff
                ? requestAnimationFrame(callback)
                : (this.carouselStatus = false);
        };
        callback();
    };

    //------------------------------sound
    sound = false;
    kayboardTypingAudio = document.getElementById("keyboard-typing-audio");

    audioSwitch = (soundBtn) => {
        this.sound = !this.sound;
        this.sound
            ? (soundBtn.src = "images/header-audio-on.png")
            : (soundBtn.src = "images/header-audio-off.png");
    };

    //------------------------------text typing

    typingAnimationFlag = false;
    i = 0;
    k = 0;
    speed = 100;

    textTyping = (txt, object) => {
        if (this.k < 4 && this.typingAnimationFlag) {
            object.textContent === ""
                ? (object.textContent = "|")
                : (object.textContent = "");
            this.k++;
            setTimeout(() => this.textTyping(txt, object), this.speed * 3);
        } else {
            this.sound
                ? this.kayboardTypingAudio.play()
                : this.kayboardTypingAudio.pause();
            if (this.i < txt.length && this.typingAnimationFlag) {
                object.textContent += txt.charAt(this.i);
                this.i++;
                setTimeout(() => this.textTyping(txt, object), this.speed);
            } else {
                this.i = 0;
                this.k = 0;
                this.kayboardTypingAudio.pause();
                this.kayboardTypingAudio.currentTime = 0;
                object.textContent = txt;
                this.typingAnimationFlag = false;
            }
        }
    };
}

class Main {
    constructor() {}
    main = document.querySelector(".main");
    characters = Array.from(document.getElementById("characters").children);
    profileIMG = document.getElementById("profile-img");
    profileIMGcontainer = document.getElementById("profile-img-container");
    mainIntroFinished = false;

    mainIntro = () => {
        for (let i = 0; i < this.characters.length; i++) {
            setTimeout(() => {
                this.characters[i].style.transform = "none";
            }, 2000 + i * 1000);
        }
        setTimeout(() => {
            this.profileIMG.style.opacity = "1";
        }, 100);
        for (let i = 0; i < this.characters.length; i++) {
            setTimeout(() => {
                this.characters[i].children[0].classList.toggle(
                    "highlight-effect"
                );
            }, 7000 + i * 200);
            setTimeout(() => {
                this.characters[i].children[0].classList.toggle(
                    "highlight-effect"
                );
            }, 10000);
        }
        this.mainIntroFinished = true;
    };
}

class Popup {
    constructor() {}

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
        this.myHobbiesBtn.addEventListener("click", () => {
            console.log(effects.animationFlag);
            effects.rotationAnimation(effects.hobbiesCarousel);
            this.openHobbiesPopup();
        });
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
        effects.animationFlag = false;
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

const header = new Header();
const menu = new Menu();
const main = new Main();
const popup = new Popup();
const effects = new Effects();
