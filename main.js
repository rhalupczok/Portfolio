window.onload = function(){
    header.init();
    menu.init();
}

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
        this.homeBtn.addEventListener("click", this.displayHeader)
    };

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
    }
}

class Menu {
    navMenu = null;
    menuBtn = null;
    aboutMe = null;
    myWork = null;
    contact = null;

    init(){
        this.navMenu = document.querySelector(".nav-menu")
        this.menuBtn = document.getElementById("menuBtn");
        this.aboutMe = document.getElementById("about");
        this.myWork = document.getElementById("my-work");
        this.contact = document.getElementById("contact");

        this.navMenu.addEventListener("click", this.scrollTo);
        menuBtn.addEventListener("click", this.openMenu);
        
    };

    openMenu = () => {
        if(this.navMenu.className === "nav-menu"){
            this.navMenu.className += " responsive";
        }else{
            this.navMenu.className = "nav-menu";
        }
    }

    scrollTo = (e) => {
        if (e.target.id === "about-me-nav") this.aboutMe.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (e.target.id === "my-work-nav") this.myWork.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if (e.target.id === "contact-nav") this.contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    }



    };

const menu = new Menu();
const header = new Header();