import { FC, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import componentStyle from "../styles/partials/myWork.module.scss";
import { myWorkData } from "../data/myWorkData";
import { myWorkInterface, popupDataInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";

const MyWork: FC = () => {
    const [popupContent, setPopupContent] = useState<
        popupDataInterface[] | null
    >(null);

    const setPopupHandle = (content: popupDataInterface[] | null) => {
        setPopupContent(content || null);
    };

    const addHover = (e: Element) => {
        e.classList.add(componentStyle.project__buttonContainer_jsHover); //adding class which set opactity to 1
    };

    const removeHover = () => {
        const hoverElements = document.querySelectorAll(
            `.${componentStyle.project__buttonContainer_jsHover}`
        );
        hoverElements?.forEach((el) => {
            el.classList.remove(
                componentStyle.project__buttonContainer_jsHover
            );
        });
    };

    const mouseEvent = (e: MouseEvent) => {
        if (e.target instanceof Element) addHover(e.target);
    };

    //creating project figure
    const myWorkElements = myWorkData.map((myWorkElement: myWorkInterface) => (
        <figure key={myWorkElement.name} className={componentStyle.project}>
            <img
                src={require(`../images/myWork/${myWorkElement.imgSrc}`)}
                alt={`${myWorkElement.name} img`}
                className={componentStyle.project__picture}
            />
            <p
                className={componentStyle.project__buttonContainer}
                onMouseEnter={(e) => {
                    mouseEvent(e);
                }}
                onMouseLeave={removeHover}
            >
                {myWorkElement.href && (
                    <a
                        className={`${componentStyle.btn} ${componentStyle.project__btn}`}
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                    </a>
                )}
                {myWorkElement.popupData && (
                    <button
                        className={`${componentStyle.btn} ${componentStyle.project__btn}`}
                        onClick={() =>
                            setPopupHandle(myWorkElement.popupData || null)
                        }
                    >
                        Learn more
                    </button>
                )}
                <a
                    className={`${componentStyle.btn} ${componentStyle.project__btn}`}
                    href={myWorkElement.repo}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"></i> REPOSITORY
                </a>
            </p>
            <p className={componentStyle.project__name}>{myWorkElement.name}</p>

            <p className={componentStyle.project__usedTechnologies}>
                {myWorkElement.technologies.map((lang) => {
                    const launguageData = languages.find(
                        (el) => el.name === lang
                    );
                    return launguageData ? (
                        <i
                            key={launguageData.icon}
                            className={`${launguageData.icon}`}
                        ></i>
                    ) : null;
                })}
            </p>
        </figure>
    ));

    const myWorkTenzi = myWorkElements.shift();

    return (
        <section id="my-work" className={componentStyle.myWork}>
            {popupContent && (
                <Popup content={popupContent} close={setPopupHandle} />
            )}
            <header className={componentStyle.myWork__header}>
                <h1>My Work</h1>
            </header>
            <article className={componentStyle.tenziGame}>
                {myWorkTenzi}
                <section>
                    <header className={componentStyle.tenziGame__header}>
                        <h3>TENZI GAME</h3>
                    </header>
                    <p className={componentStyle.tenziGame__paragraph}>
                        Tenzi is a simple game to set all dice the same
                    </p>
                    <ul className={componentStyle.tenziGame__list}>
                        <li>
                            FrontEnd: React with TypeScript and SASS modules
                        </li>
                        <li>Backend: Express.js</li>
                        <li>Authentication: Complete process using JWT</li>
                        <li>Database: Stores and maintains best results</li>
                    </ul>
                    <p className={componentStyle.tenziGame__buttonsContainer}>
                        <a
                            className={`${componentStyle.btn}`}
                            href="https://rhalupczok.github.io/Tenzies"
                            target="_blank"
                            rel="noreferrer"
                        >
                            PLAY
                        </a>
                        <Link to="/tenzidescription">
                            <button className={componentStyle.btn}>
                                Details
                            </button>
                        </Link>
                    </p>
                </section>
            </article>
            <p className={componentStyle.myWork__description}>
                Another project builed on various stage of my studying progress.
            </p>
            <section className={componentStyle.myWork__projectsContainer}>
                {myWorkElements}
            </section>
        </section>
    );
};

export default MyWork;
