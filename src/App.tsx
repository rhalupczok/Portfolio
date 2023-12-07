import { Routes, Route, ScrollRestoration } from "react-router-dom";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/AboutMe";
import Knowledge from "./components/Knowledge";
import MyWork from "./components/MyWork";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Intro from "./components/Intro";
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
                    </>
                }
            />
            <Route path="tenzidescription" element={<TenziDescription />} />
        </Routes>
    );
};

export default App;
