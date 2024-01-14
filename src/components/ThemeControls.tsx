import { FC, useState, useEffect } from "react";
import componentStyle from "../styles/partials/ThemeControls.module.scss";

const ThemeToggle: FC = () => {
    //Theme Controls
    //Theme object
    const [themeMenu, setThemeMenu] = useState<boolean>(false);
    const [lightTheme, setLightTheme] = useState<boolean>(
        JSON.parse(localStorage.getItem("theme") || "false")
    );
    //Theme color object

    const [themeColor, setThemeColor] = useState<{
        highlight_color: string;
        highlight_color_darken: string;
    } | null>(JSON.parse(localStorage.getItem("color") || "null"));

    //Toggle theme controls open on click
    const showThemeMenu: () => void = () => {
        setThemeMenu(!themeMenu);
    };

    //Get root variables
    const r = document.querySelector(":root") as HTMLElement;
    const rs = getComputedStyle(r);

    const themeChange: () => void = () => {
        //Toggle light theme variables
        document.body.classList.toggle("light-theme");
        //Check if the theme is changed to light
        document.body.classList.contains("light-theme")
            ? //Set lighTheme to true if it is
              setLightTheme(true)
            : //Set lighTheme to false it is not
              setLightTheme(false);
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
        localStorage.setItem("theme", JSON.stringify(lightTheme));
        //Set themeColor object to local storage
        localStorage.setItem("color", JSON.stringify(themeColor));
        if (lightTheme === true) {
            //Set light theme
            document.body.classList.add("light-theme");
        }
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
    }, []);

    return (
        <ul
            className={`${
                themeMenu
                    ? `${componentStyle.themeControls} ${componentStyle.themeOpen}`
                    : `${componentStyle.themeControls}`
            }`}
        >
            <li
                className={`${componentStyle.color} ${componentStyle.color1}`}
                onClick={(e) => colorChange(e)}
            ></li>
            <li
                className={`${componentStyle.color} ${componentStyle.color2}`}
                onClick={(e) => colorChange(e)}
            ></li>
            <li
                className={`${componentStyle.color} ${componentStyle.color3}`}
                onClick={(e) => colorChange(e)}
            ></li>
            <li
                className={`${componentStyle.color} ${componentStyle.color4}`}
                onClick={(e) => colorChange(e)}
            ></li>
            <li className={componentStyle.darkMode} onClick={themeChange}>
                <i className={`fas  ${lightTheme ? "fa-sun" : "fa-moon"}`}></i>
            </li>
            <div className={componentStyle.themeBtn} onClick={showThemeMenu}>
                <i
                    className={`fas ${
                        themeMenu ? "fa-arrow-right" : "fa-arrow-left"
                    }`}
                ></i>
                <i className="fa-solid fa-palette"></i>
            </div>
        </ul>
    );
};
export default ThemeToggle;
