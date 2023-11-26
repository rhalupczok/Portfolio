import React from "react";
import "../styles/partials/myWork.scss";
import { myWorkData } from "../data/myworkData";
import { myWorkInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";
import usePopup from "../Hooks/usePopup";

const MyWork: React.FC = () => {
    const { setPopup } = usePopup();
    const addHover = (e: Element) => {
        e.classList.add("project-buttons--hover"); //adding class which set opactity to 1
        e.childNodes.forEach((child) => {
            //display btns - upscale all childnodes bo remove a class "scaled-down"
            if (child instanceof Element) {
                child.classList.remove("scaled-down");
            }
        });
    };

    const removeHover = () => {
        const hoverElements = document.querySelectorAll(
            ".project-buttons--hover"
        );
        hoverElements.forEach((el) => {
            el.classList.remove("project-buttons--hover");
            if (el instanceof Element) {
                el.childNodes.forEach((child) => {
                    if (child instanceof Element) {
                        child.classList.add("scaled-down");
                    }
                });
            }
        });
    };

    const mouseEvent = (e: React.MouseEvent) => {
        if (e.target instanceof Element) addHover(e.target);
    };

    const myWorkElements = myWorkData.map((myWorkElement: myWorkInterface) => (
        <div key={myWorkElement.name} className="project">
            <div className="used-technologies">
                {myWorkElement.technologies.map((lang) => {
                    const launguageData = languages.find(
                        (el) => el.name === lang
                    );
                    return launguageData ? (
                        <img
                            key={lang}
                            className="used-technologies--img"
                            src={require(`../images/languages/${launguageData.imgSrc}`)}
                            title={`${lang}`}
                            alt={launguageData.imgSrc}
                        />
                    ) : null;
                })}
            </div>
            <img
                src={require(`../images/myWork/${myWorkElement.imgSrc}`)}
                alt={`${myWorkElement.description} img`}
                className="project-img"
            />
            <div
                className="project-buttons"
                onMouseEnter={(e) => {
                    mouseEvent(e);
                }}
                onMouseLeave={removeHover}
            >
                {myWorkElement.isOpen && (
                    <a
                        className="btn scaled-down"
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                    </a>
                )}
                <button
                    className="btn scaled-down"
                    onClick={() => {
                        setPopup({ content: myWorkElement.name, isShow: true });
                    }}
                >
                    Learn more
                </button>
            </div>
            <p className="project-desc">{myWorkElement.description}</p>
        </div>
    ));

    return (
        <div id="my-work" className="main-section">
            <div className="nav-menu--margin"></div>
            <h1>My Work</h1>
            <div className="tenzi-game-container">
                <div>{myWorkElements[1]}</div>
                <div>
                    <h3>TENZI GAME</h3>
                    <p>
                        Tenzi is a app based on simply family game. The goal is
                        to set all dice the same in the shortest possible time.
                    </p>
                    <p>
                        From programming point of view it is my most advanced
                        project buit in react framework, using react routing.
                        <br /> <br />
                        Back-end side created in node.js using express
                        framework. <br /> <br />
                        There is complete user registration and auteuthication
                        process according to JSON WEB TOKENS including refresh
                        token rotation and hashing by bcrypt. <br /> <br />
                        Server is connected to Mongo DataBase where are kept
                        user data like name, hashed password and best scores
                        based on mongoose model.
                        <br /> <br /> Click the button below to get detailed
                        information about application
                    </p>
                    <div className="tenzi-btns">
                        <button className="btn">PLAY</button>
                        <button className="btn">Full description</button>
                    </div>
                </div>
            </div>

            <div className="others-projects-container">
                <h3>ANOTHER WORK</h3>
                <p>
                    My another project builed on various stage of my studying
                    progress.
                </p>
                <div id="projects-container">{myWorkElements}</div>
            </div>
        </div>
    );
};

export default MyWork;
