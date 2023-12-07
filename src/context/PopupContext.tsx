import { createContext, useState, useEffect } from "react";
import { PopupContextProps, PopupDataProviderProps } from "../data/interfaces";

const PopupContext = createContext<PopupContextProps>({} as PopupContextProps);

const initialPopupState: {
    content: string;
    isShow: boolean;
} = { content: "", isShow: false };

export const PopupDataProvider: React.FC<PopupDataProviderProps> = ({
    children,
}) => {
    const [popup, setPopup] = useState(initialPopupState);
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

    return (
        <PopupContext.Provider value={{ popup, setPopup, dayMode, setDayMode }}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupContext;
