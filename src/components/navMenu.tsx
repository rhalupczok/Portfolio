import React, { ReactElement } from "react";
import "../styles/partials/navMenu.scss";
import { navMenuInterface, navMenuProps } from "../data/interfaces";

const NavMenu: React.FC<navMenuProps> = ({ setDisplayHandle }) => {
    const navMenu: navMenuInterface[] = [
        { name: "INTRO", id: "intro--menu", target: "intro" },
        { name: "ABOUT ME", id: "about--menu", target: "about" },
        { name: "MY WORK", id: "my-work--menu", target: "my-work" },
        { name: "CV", id: "cv--menu", target: "cv" },
        { name: "CONTACT", id: "contact--menu", target: "contact" },
    ];
    const navMenuElements: ReactElement[] = navMenu.map((menuElement) => (
        <span
            key={menuElement.id}
            id={menuElement.id}
            onClick={
                menuElement.target === "intro"
                    ? () => setDisplayHandle(menuElement.target)
                    : () => scrollTo(menuElement.target)
            }
        >
            {menuElement.name}
        </span>
    ));

    const openMenu: () => void = () => {
        const navMenu: HTMLElement | null = document.querySelector(".nav-menu");
        if (navMenu) navMenu.classList.toggle("responsive");
    };

    const scrollTo: (el: string) => void = (el) => {
        const element: HTMLElement | null = document.getElementById(`${el}`);
        if (element)
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
    };

    return (
        <div>
            <div className="nav-border">
                <span className="nav-border--menuBtn" onClick={openMenu}>
                    MENU
                </span>
            </div>
            <nav className="nav-menu">{navMenuElements}</nav>
        </div>
    );
};

export default NavMenu;
