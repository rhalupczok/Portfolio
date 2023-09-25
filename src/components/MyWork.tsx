import React from "react";
import { myWorkData } from "../data/myworkData";
import { myWorkInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";

interface Props {
    setPopupHandle: (content: string, show: boolean) => void;
}

const MyWork: React.FC<Props> = ({ setPopupHandle }) => {
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
            <div className="project-buttons">
                {myWorkElement.isOpen && (
                    <a
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn">
                            {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                        </button>
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
