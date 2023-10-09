import React from "react";
import { myWorkData } from "../data/myworkData";
import { myWorkInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";

interface Props {
    setPopupHandle: (content: string, show: boolean) => void;
}

const MyWork: React.FC<Props> = ({ setPopupHandle }) => {
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

    // const touchEvent = (e: React.TouchEvent) => {
    //     removeHover();
    //     //prevent click the button on touchscreens before they are shown
    //     if (e.target instanceof Element) addHover(e.target);
    // };

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
                // onTouchEnd={(e) => {
                //     touchEvent(e);
                // }}
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