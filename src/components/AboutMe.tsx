import React, { ReactElement } from "react";
import { characters } from "../data/charactersData";
import { languages } from "../data/languagesData";

interface Props {
    setPopupHandle: (content: string, show: boolean) => void;
    setDisplayHandle: (componentName: string) => void;
}
const AboutMe: React.FC<Props> = ({ setPopupHandle, setDisplayHandle }) => {
    const characterElements: ReactElement[] = characters.map((character) => (
        <div key={character.name}>
            <img
                src={require(`../images/${character.imgSrc}`)}
                alt={character.alt}
                className={character.className}
            />
            <p>{character.name}</p>
        </div>
    ));

    const languageElements: ReactElement[] = languages.map((language) => (
        <div key={language.name}>
            <img
                src={require(`../images/${language.imgSrc}`)}
                alt={language.alt}
                className={language.className}
            />
            {language.name}
        </div>
    ));

    return (
        <div id="about" className="main-section">
            <h1>About me</h1>
            <div className="characters">{characterElements}</div>
            <div className="description">
                <div id="profile-img-container">
                    <img
                        id="profile--img"
                        src={require(`../images/profile_picture.png`)}
                        alt="profile"
                    />
                </div>
                <p>
                    Hi! My name is
                    <span className="txt-highlight--no-hover"> Radoslaw</span>.
                    I live in Silesian Voivodeship in Poland. I graduated from
                    Silesian University of technology and after that for 7 years
                    I have been working as{" "}
                    <span
                        id="my-job-popup-btn"
                        className="txt-highlight open-popup-btn"
                        onClick={() => setPopupHandle("myJob", true)}
                    >
                        Robotics Programmer.
                    </span>
                </p>

                <p>
                    Currently most of my time I am spending on boardering my
                    knowleadge of Front-End Development. I am learning how to
                    create responsive websites and applications. At the begining
                    I started with python. Next I went throught Html, CSS and
                    JavaScript courses and varoius documentations. I meet also
                    the SASS, Node.js and Boostrap. After that I went thorught
                    React and TypeScript. It has open my eyed how clean and
                    composable the code can be. All projects I am working on are
                    stored using GIT commands.
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
                    I am aware that I am on the begining and there is a lot of
                    hard work in front of me but I am determined and 100%
                    oriented on this kind of job. <br />A various challenges
                    requiring logical thinking were always my scope of
                    interesting. Solving programming tasks makes me satisfied
                    and I very like it. Give me a chance and I promise I will do
                    my best to not let you down.
                </p>
                <p>
                    A bit more about me →{" "}
                    <span
                        id="my-hobbies-popup-btn"
                        className="txt-highlight"
                        onClick={() => setDisplayHandle("hobbiesCarousel")}
                    >
                        my hobbies
                    </span>
                    .
                </p>
            </div>
            <h2>Technologies I learned</h2>
            <div className="langs">{languageElements}</div>
        </div>
    );
};
export default AboutMe;
