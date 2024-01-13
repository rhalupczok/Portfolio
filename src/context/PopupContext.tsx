import { createContext, useState } from "react";
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

    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupContext;
