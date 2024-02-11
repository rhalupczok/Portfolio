import { ReactElement, FC, useState, useEffect } from "react";
import componentStyle from "../styles/partials/navMenu.module.scss";
import { navMenuData } from "../data/navMenuData";
import { scrollTo } from "../data/helperfunc";

const NavMenu: FC = () => {
    const [activeElement, setActiveElement] = useState<string | null>(null);

    const handleScroll = () => {
        const threshold = 50;

        // Check which section is currently in the viewport
        navMenuData.forEach((menuElement) => {
            const targetElement = document.getElementById(menuElement.target);
            const rect = targetElement?.getBoundingClientRect();
            if (
                (rect &&
                    rect.top - threshold <= 0 &&
                    rect.bottom >= threshold) ||
                (rect &&
                    rect.height <= window.innerHeight &&
                    rect.bottom - threshold <= window.innerHeight)
            ) {
                setActiveElement(menuElement.id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //mapping by navmenu data to print elements
    const navMenuElements: ReactElement[] = navMenuData.map((menuElement) => (
        <span
            key={menuElement.id}
            id={menuElement.id}
            onClick={() => {
                scrollTo(menuElement.target); //func to scroll the target element
            }}
            className={`${componentStyle.navmenu__item} ${
                menuElement.id === activeElement
                    ? componentStyle.navmenu__item_active
                    : ""
            }`}
        >
            <span className={componentStyle.navmenu__name}>
                {menuElement.name}
            </span>
            <i
                className={`${menuElement.icon} ${componentStyle.navmenu__icon}`}
            ></i>
        </span>
    ));

    return <nav className={componentStyle.navmenu}>{navMenuElements}</nav>;
};

export default NavMenu;
