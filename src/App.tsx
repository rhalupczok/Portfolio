import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/AboutMe";
import Knowledge from "./components/Knowledge";
import MyWork from "./components/MyWork";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Intro from "./components/Intro";
import ThemeToggle from "./components/ThemeControls";
import TenziDescription from "./components/TenziDescription";
import usePopup from "./Hooks/usePopup";

const App: React.FC = () => {
    const { popup } = usePopup();
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Intro />
                        <NavMenu />
                        <AboutMe />
                        <Knowledge />
                        <MyWork />
                        <CV />
                        <Contact />
                        <Footer />
                        {popup.isShow && <Popup />}
                        <ThemeToggle />
                    </>
                }
            />
            <Route
                path="tenzidescription"
                element={
                    <>
                        <TenziDescription /> <Footer />
                        <ThemeToggle />
                    </>
                }
            />
        </Routes>
    );
};

export default App;
