import React, { ReactElement } from "react";
import "../styles/partials/navMenu.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

const openMenu: () => void = () => {
    const navMenu: HTMLElement | null = document.querySelector(".nav-menu");
    if (navMenu) navMenu.classList.toggle("responsive");
};

const NavMenu: React.FC = () => {
    const navMenuElements: ReactElement[] = navMenuData.map((menuElement) => (
        <span
            key={menuElement.id}
            id={menuElement.id}
            onClick={() => {
                scrollTo(menuElement.target);
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
