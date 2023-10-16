import React, { ReactElement } from "react";
import "../styles/partials/navMenu.scss";
import { navMenuProps } from "../data/interfaces";
import { navMenuData } from "../data/navMenuData";

const openMenu: () => void = () => {
    const navMenu: HTMLElement | null = document.querySelector(".nav-menu");
    if (navMenu) navMenu.classList.toggle("responsive");
};

const scrollTo: (el: string) => void = (el) => {
    const element: HTMLElement | null = document.getElementById(`${el}`); //get target from navMenuData (it is )
    if (element)
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
};

const NavMenu: React.FC<navMenuProps> = ({ setDisplayHandle }) => {
    const navMenuElements: ReactElement[] = navMenuData.map((menuElement) => (
        <span
            key={menuElement.id}
            id={menuElement.id}
            onClick={() => {
                menuElement.target === "intro"
                    ? setDisplayHandle(menuElement.target)
                    : scrollTo(menuElement.target);
                openMenu();
            }}
        >
            {menuElement.name}
        </span>
    ));

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
