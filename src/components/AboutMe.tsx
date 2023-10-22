import React, { ReactElement, useState } from "react";
import "../styles/partials/aboutMe.scss";
import { characters } from "../data/charactersData";
import { languages } from "../data/languagesData";
import HobbiesCarousel from "../components/HobbiesCarousel";
import { setPopupProps } from "../data/interfaces";

const AboutMe: React.FC<setPopupProps> = ({ setPopupHandle }) => {
    const [displayHobbies, setDisplayHobbies] = useState<boolean>(false);
    const toggleHobbies: () => void = () => {
        setDisplayHobbies((prevstate) => !prevstate);
    };

    const characterElements: ReactElement[] = characters.map((character) => (
        <div key={character.name}>
            <img
                src={require(`../images/aboutMe/${character.imgSrc}`)}
                alt={character.alt}
                className="characters-img"
            />
            <p>{character.name}</p>
        </div>
    ));

    const languageElements: ReactElement[] = languages.map((language) => (
        <div
            key={language.name}
            className={
                language.inprogress
                    ? "langs-container in-progress"
                    : "langs-container"
            }
        >
            <img
                src={require(`../images/languages/${language.imgSrc}`)}
                alt={language.alt}
                className="langs-img"
            />
            {language.name}
        </div>
    ));

    return (
        <div id="about" className="main-section">
            <div className="nav-menu--margin"></div>
            <h1>About me</h1>
            <div className="description">
                <div className="profile-img-characters-container">
                    <div className="profile-img">
                        <img
                            src={require(`../images/aboutMe/profile_picture.png`)}
                            alt="profile"
                        />
                    </div>
                    <div className="characters">{characterElements}</div>
                </div>
                <p>
                    Hi! My name is
                    <span className="txt-highlight--no-hover"> Radoslaw</span>.
                    I live in the Silesian Voivodeship in Poland. I graduated
                    from the Silesian University of Technology, and for the past
                    7 years, I have been working as a{" "}
                    <span
                        id="my-job-popup-btn"
                        className="txt-highlight open-popup-btn"
                        onClick={() => setPopupHandle("myJob", true)}
                    >
                        Robotics Programmer.
                    </span>
                </p>
                <p>
                    Currently, most of my time is spent broadening my knowledge
                    of Front-End Development. I am learning how to create
                    responsive websites and applications. In the beginning, I
                    started with Python. Next, I went through HTML, CSS, and
                    JavaScript courses, as well as various documentations. I
                    also got acquainted with SASS and Bootstrap. After that, I
                    delved into React and TypeScript. It has opened my eyes to
                    how clean and composable the code can be. Curently I've
                    started expand my knowledge towards Node.js/Express.js and
                    REST API. All the projects I work on are stored using GIT
                    commands.
                    <br /> Let check some examples of{" "}
                    <span
                        id="my-work-btn"
                        className="txt-highlight scroll-to"
                        onClick={() => {
                            const target: HTMLElement | null =
                                document.getElementById("my-work");
                            if (target)
                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    inline: "nearest",
                                });
                        }}
                    >
                        my work
                    </span>
                    .
                </p>
                <p>
                    I am aware that I am at the beginning, and there is a lot of
                    hard work ahead of me, but I am determined and 100% focused
                    on this type of job. Various challenges requiring logical
                    thinking have always been within my scope of interest.
                    Solving programming tasks makes me satisfied, and I really
                    enjoy it. Give me a chance, and I promise I will do my best
                    not to let you down.
                </p>
                <p>
                    A bit more about me →{" "}
                    <span
                        id="my-hobbies-popup-btn"
                        className="txt-highlight"
                        onClick={() => setDisplayHobbies(true)}
                    >
                        my hobbies
                    </span>
                    .
                </p>
            </div>
            <h2>Technologies I've Studied</h2>
            <div className="langs">{languageElements}</div>
            {displayHobbies && (
                <HobbiesCarousel toggleHobbiesHandle={toggleHobbies} />
            )}
        </div>
    );
};
export default AboutMe;
