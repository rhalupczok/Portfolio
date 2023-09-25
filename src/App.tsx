import React from "react";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import HobbiesCarousel from "./components/HobbiesCarousel";
import Intro from "./components/Intro";

const App: React.FC = () => {
    const [popup, setPopup] = React.useState({ content: "", isShow: false });
    const [displayComponent, setDisplayComponent] = React.useState({
        componentName: "intro",
    });

    const setPopupHandle = (content: string, show: boolean) => {
        setPopup({ content: content, isShow: show });
    };

    const setDisplayHandle = (componentName: string) => {
        setDisplayComponent({
            componentName: componentName,
        });
    };

    return (
        <div>
            <NavMenu setDisplayHandle={setDisplayHandle} />
            <AboutMe
                setPopupHandle={setPopupHandle}
                setDisplayHandle={setDisplayHandle}
            />
            <MyWork setPopupHandle={setPopupHandle} />
            <CV />
            <Contact />
            <Footer />
            {popup.isShow ? (
                <Popup setPopupHandle={setPopupHandle} popupContent={popup} />
            ) : (
                <></>
            )}
            {displayComponent.componentName === "hobbiesCarousel" && (
                <HobbiesCarousel setDisplayHandle={setDisplayHandle} />
            )}
            {displayComponent.componentName === "intro" && (
                <Intro setDisplayHandle={setDisplayHandle} />
            )}
        </div>
    );
};

export default App;
