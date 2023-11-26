import { useContext } from "react";
import PopupContext from "../context/PopupContext";

const usePopup = () => {
    return useContext(PopupContext);
};

export default usePopup;
