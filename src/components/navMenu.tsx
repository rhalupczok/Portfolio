import { ReactElement, FC, useState, useEffect } from "react";

import componentStyle from "../styles/partials/navMenu.module.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

// const openMenu: () => void = () => {
//     const navMenu: HTMLElement | null = document.querySelector(
//         `.${componentStyle.navMenu}`
//     );
//     if (navMenu && window.innerWidth < 800)
//         navMenu.classList.toggle(componentStyle.responsive);
// };

const NavMenu: FC = () => {
    const [activeElement, setActiveElement] = useState<string | null>(null);

    const handleScroll = () => {
        const threshold = 50;
        // Check which section is currently in the viewport
        navMenuData.forEach((menuElement) => {
            const targetElement = document.getElementById(menuElement.target);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                if (
                    (rect.top - threshold <= 0 && rect.bottom >= threshold) ||
                    (rect.height <= window.innerHeight &&
                        rect.bottom - threshold <= window.innerHeight)
                ) {
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
                // openMenu();
            }}
            className={
                menuElement.id === activeElement ? componentStyle.active : ""
            }
        >
            <div className={componentStyle.fullName}>{menuElement.name}</div>

            <i className={`${menuElement.icon}`}></i>

            {/* {window.innerWidth > 700 ? (
                menuElement.name
            ) : (
                <i className={`${menuElement.icon}`}></i>
            )} */}
        </span>
    ));

    return (
        <div>
            <div className={componentStyle.navBorder}>
                <span
                    className={componentStyle.navBorderMenuBtn}
                    // onClick={openMenu}
                >
                    MENU
                </span>
            </div>
            <nav className={componentStyle.navMenu}>{navMenuElements}</nav>
        </div>
    );
};

export default NavMenu;
