import React from "react";
import { myWorkData } from "../data/myworkData";
import { myWorkInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";

interface Props {
    setPopupHandle: (content: string, show: boolean) => void;
}

const MyWork: React.FC<Props> = ({ setPopupHandle }) => {
    const touchEvent = (e: React.TouchEvent) => {
        //prevent click the button on touchscreens before they are shown
        if (e.target instanceof Element) {
            if (e.target.classList.contains("btn")) {
                if (
                    e.target.parentElement?.classList.contains(
                        "project-buttons--hover"
                    )
                ) {
                    e.target.parentElement?.classList.toggle(
                        "project-buttons--hover"
                    );
                } else {
                    e.preventDefault();
                    e.target.parentElement?.classList.toggle(
                        "project-buttons--hover"
                    );
                }
            } else {
                e.preventDefault();
                e.target.classList.toggle("project-buttons--hover");
            }
        }
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
                            src={require(`../images/${launguageData.imgSrc}`)}
                            alt={launguageData.imgSrc}
                        />
                    ) : null;
                })}
            </div>
            <img
                src={require(`../images/${myWorkElement.imgSrc}`)}
                alt={`${myWorkElement.description} img`}
                className="project-img"
            />
            <div
                className="project-buttons"
                onTouchEnd={(e) => {
                    touchEvent(e);
                }}
            >
                {myWorkElement.isOpen && (
                    <a
                        className="btn"
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                    </a>
                )}
                <button
                    className="btn open-popup-btn"
                    onClick={() => {
                        setPopupHandle(myWorkElement.name, true);
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
            <h1>My Work</h1>
            <div id="projects-container">{myWorkElements}</div>
        </div>
    );
};

export default MyWork;
