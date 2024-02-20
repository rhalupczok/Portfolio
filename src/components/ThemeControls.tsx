import { FC, useState, useEffect } from "react";
import componentStyle from "../styles/partials/ThemeControls.module.scss";

const ThemeToggle: FC = () => {
    const [themeMenu, setThemeMenu] = useState<boolean>(false);

    const [lightTheme, setLightTheme] = useState<boolean>(
        JSON.parse(localStorage.getItem("light-theme") || "false")
    );
    const [themeColor, setThemeColor] = useState<{
        highlight_color: string;
        highlight_color_darken: string;
    } | null>(JSON.parse(localStorage.getItem("color") || "null"));

    //Display menu
    const showThemeMenu: () => void = () => {
        setThemeMenu(!themeMenu);
    };

    //Get root variables
    const r = document.querySelector("#root") as HTMLElement;
    // const rs = getComputedStyle(r);

    const themeChange: () => void = () => {
        //Toggle light theme variables
        r.classList.toggle("main_darkTheme");
        r.classList.toggle("main_lightTheme");
        //Check if the theme is changed to light
        setLightTheme(!lightTheme);

        if (themeColor?.highlight_color === "rgb(0, 0, 0)") {
            r.style.setProperty("--highlight_color", "rgb(255, 255, 255)");
            r.style.setProperty(
                "--highlight_color_darken",
                "rgb(141, 141, 141)"
            );
            setThemeColor({
                highlight_color: "rgb(255, 255, 255)",
                highlight_color_darken: "rgb(141, 141, 141)",
            });
        }
        if (themeColor?.highlight_color === "rgb(255, 255, 255)") {
            r.style.setProperty("--highlight_color", "rgb(0, 0, 0)");
            r.style.setProperty(
                "--highlight_color_darken",
                "rgb(122, 122, 122)"
            );
            setThemeColor({
                highlight_color: "rgb(0, 0, 0)",
                highlight_color_darken: "rgb(122, 122, 122)",
            });
        }
    };

    const colorChange: (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => void = (e) => {
        const targetElement = e.target as HTMLLIElement;
        //Get computed style of clicked element
        const clickedElement = window.getComputedStyle(targetElement);
        //Get background color of clicked element
        const accentColor = clickedElement.backgroundColor;
        //Get color of clicked element
        const accentColorDarken = clickedElement.color;
        //Set accent variable to background color of clicked element
        r.style.setProperty("--highlight_color", accentColor);
        /*Set accent-darken variable to 
    background color of clicked element*/
        r.style.setProperty("--highlight_color_darken", accentColorDarken);
        //Add colors to themeColor object
        setThemeColor({
            highlight_color: accentColor,
            highlight_color_darken: accentColorDarken,
        });
    };

    useEffect(() => {
        //Add lightTheme to local storage
        localStorage.setItem("light-theme", JSON.stringify(lightTheme));
        //Set themeColor object to local storage
        localStorage.setItem("color", JSON.stringify(themeColor));
    }, [lightTheme, themeColor]);

    useEffect(() => {
        if (themeColor) {
            r.style.setProperty(
                "--highlight_color",
                themeColor.highlight_color
            );

            r.style.setProperty(
                "--highlight_color_darken",
                themeColor.highlight_color_darken
            );
        }

        if (lightTheme) {
            //Set light theme
            r.classList?.remove("main_darkTheme");
            r.classList?.add("main_lightTheme");
        }
    }, []);

    const colorListItems = [
        componentStyle.color1,
        componentStyle.color2,
        componentStyle.color3,
        componentStyle.color4,
        componentStyle.color5,
    ].map((color) => (
        <li
            key={color}
            className={`${componentStyle.color} ${color}
            }`}
            onClick={(e) => colorChange(e)}
        ></li>
    ));

    return (
        <main className="themeControl">
            <section
                className={`${componentStyle.themeControl__mainBackground}`}
            ></section>
            <section
                className={`${componentStyle.themeControl__gradientBackground}`}
            ></section>
            <ul
                className={`${
                    themeMenu
                        ? `${componentStyle.themeControls} ${componentStyle.themeOpen}`
                        : `${componentStyle.themeControls}`
                }`}
            >
                {colorListItems}
                <li className={componentStyle.darkMode} onClick={themeChange}>
                    <i
                        className={`fas  ${lightTheme ? "fa-sun" : "fa-moon"}`}
                    ></i>
                </li>
                <aside
                    className={componentStyle.themeBtn}
                    onClick={showThemeMenu}
                >
                    <i
                        className={`fas ${
                            themeMenu ? "fa-arrow-right" : "fa-arrow-left"
                        }`}
                    ></i>
                    <i className="fa-solid fa-palette"></i>
                </aside>
            </ul>
        </main>
    );
};
export default ThemeToggle;
