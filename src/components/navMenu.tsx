import React, { ReactElement, useEffect, useState } from "react";
import "../styles/partials/navMenu.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

const openMenu: () => void = () => {
    const navMenu: HTMLElement | null = document.querySelector(".nav-menu");
    if (navMenu) navMenu.classList.toggle("responsive");
};

const NavMenu: React.FC = () => {
    const [dayMode, setDayMode] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty(
            `--bg_color_black`,
            `${dayMode ? `#aad1f8` : `#222831`}`
        );
        root.style.setProperty(
            `--bg_color_grey`,
            `${dayMode ? `#e1feff` : `#393e46`}`
        );

        root.style.setProperty(
            `--fonts_color`,
            `${dayMode ? `black` : `#eeeeee`}`
        );

        root.style.setProperty(
            `--highlight_color`,
            `${dayMode ? `black` : `#64ffff`}`
        );
        root.style.setProperty(
            `--background-image`,
            `${
                dayMode
                    ? `url("../../images/intro/intro-background-day.jpg")`
                    : `url("../../images/intro/intro-background-dark.jpg")`
            }`
        );
    }, [dayMode]);

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
                <div
                    className="nav-border--themeBtn"
                    onClick={() => setDayMode(!dayMode)}
                >
                    <span>NightMode</span>
                    <img
                        src={require(`../images/navMenu/${
                            dayMode ? `toggle-off.svg` : `toggle-on.svg`
                        }`)}
                        alt={"nightmode"}
                        className="themeBtn-img"
                    />
                </div>
            </div>
            <nav className="nav-menu">{navMenuElements}</nav>
        </div>
    );
};

export default NavMenu;
