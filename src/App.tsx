import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/AboutMe";
import Knowledge from "./components/Knowledge";
import MyWork from "./components/MyWork";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Intro from "./components/Intro";
import ThemeToggle from "./components/ThemeControls";
import TenziDescription from "./components/TenziDescription";

const App: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        {/* <Intro /> */}
                        <NavMenu />
                        <AboutMe />
                        <Knowledge />
                        <MyWork />
                        <CV />
                        <Contact />
                        <Footer />
                        <ThemeToggle />
                    </>
                }
            />
            <Route
                path="tenzidescription"
                element={
                    <>
                        <TenziDescription />
                        <Footer />
                        <ThemeToggle />
                    </>
                }
            />
        </Routes>
    );
};

export default App;
