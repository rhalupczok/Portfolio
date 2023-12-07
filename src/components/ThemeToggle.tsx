import { FC } from "react";
import componentStyle from "../styles/partials/ThemeToggle.module.scss";
import usePopup from "../Hooks/usePopup";

const ThemeToggle: FC = () => {
    const { dayMode, setDayMode } = usePopup();
    return (
        <div
            className={componentStyle.navBorderThemeBtn}
            onClick={() => setDayMode(!dayMode)}
        >
            <span>{dayMode ? `NightMode` : `DayMode`}</span>
            <img
                src={require(`../images/navMenu/${
                    dayMode ? `toggle-off.svg` : `toggle-on.svg`
                }`)}
                alt={"nightmode"}
                className={componentStyle.themeBtnImg}
            />
        </div>
    );
};
export default ThemeToggle;
