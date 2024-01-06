import { ReactElement, FC, useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import componentStyle from "../styles/partials/navMenu.module.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

const openMenu: () => void = () => {
    const navMenu: HTMLElement | null = document.querySelector(
        `.${componentStyle.navMenu}`
    );
    if (navMenu && window.innerWidth < 800)
        navMenu.classList.toggle(componentStyle.responsive);
};

const NavMenu: FC = () => {
    const [activeElement, setActiveElement] = useState<string | null>(null);

    const handleScroll = () => {
        const threshold = 50;
        // Check which section is currently in the viewport
        navMenuData.forEach((menuElement) => {
            const targetElement = document.getElementById(menuElement.target);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                if (rect.top - threshold <= 0 && rect.bottom >= threshold) {
                    setActiveElement(menuElement.id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navMenuElements: ReactElement[] = navMenuData.map((menuElement) => (
        <span
            key={menuElement.id}
            id={menuElement.id}
            onClick={() => {
                scrollTo(menuElement.target);
                openMenu();
            }}
            className={
                menuElement.id === activeElement ? componentStyle.active : ""
            }
        >
            {menuElement.name}
        </span>
    ));

    return (
        <div>
            <div className={componentStyle.navBorder}>
                <span
                    className={componentStyle.navBorderMenuBtn}
                    onClick={openMenu}
                >
                    MENU
                </span>
                <ThemeToggle />
            </div>
            <nav className={componentStyle.navMenu}>{navMenuElements}</nav>
        </div>
    );
};

export default NavMenu;
