import { ReactElement, FC } from "react";
import ThemeToggle from "./ThemeToggle";
import componentStyle from "../styles/partials/navMenu.module.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

const openMenu: () => void = () => {
    const navMenu: HTMLElement | null = document.querySelector(
        `.${componentStyle.navMenu}`
    );
    if (navMenu) navMenu.classList.toggle(componentStyle.responsive);
};

const NavMenu: FC = () => {
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
