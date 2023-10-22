import React from "react";
import "./styles/global.scss";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Intro from "./components/Intro";

const App: React.FC = () => {
    const [popup, setPopup] = React.useState<{
        content: string;
        isShow: boolean;
    }>({ content: "", isShow: false });

    const setPopupHandle = (content: string, show: boolean) => {
        setPopup({ content: content, isShow: show });
    };

    return (
        <div>
            <Intro />
            <NavMenu />
            <AboutMe setPopupHandle={setPopupHandle} />
            <MyWork setPopupHandle={setPopupHandle} />
            <CV />
            <Contact />
            <Footer />
            {popup.isShow && (
                <Popup setPopupHandle={setPopupHandle} popupContent={popup} />
            )}
        </div>
    );
};

export default App;
