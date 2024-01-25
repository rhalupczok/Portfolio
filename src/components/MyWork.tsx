import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import componentStyle from "../styles/partials/myWork.module.scss";
import { myWorkData } from "../data/myworkData";
import { myWorkInterface } from "../data/interfaces";
import { languages } from "../data/languagesData";
import usePopup from "../Hooks/usePopup";

const MyWork: FC = () => {
    const { setPopup } = usePopup();
    const addHover = (e: Element) => {
        e.classList.add(componentStyle.projectButtonsHover); //adding class which set opactity to 1
        e.childNodes.forEach((child) => {
            //display btns - upscale all childnodes bo remove a class "scaled-down"
            if (child instanceof Element) {
                child.classList.remove(componentStyle.scaledDown);
            }
        });
    };

    const removeHover = () => {
        const hoverElements = document.querySelectorAll(
            `.${componentStyle.projectButtonsHover}`
        );
        hoverElements?.forEach((el) => {
            el.classList.remove(componentStyle.projectButtonsHover);
            if (el instanceof Element) {
                el.childNodes.forEach((child) => {
                    if (child instanceof Element) {
                        child.classList.add(componentStyle.scaledDown);
                    }
                });
            }
        });
    };

    const mouseEvent = (e: MouseEvent) => {
        if (e.target instanceof Element) addHover(e.target);
    };

    const myWorkElements = myWorkData.map((myWorkElement: myWorkInterface) => (
        <div key={myWorkElement.name} className={componentStyle.project}>
            <div className={componentStyle.usedTechnologies}>
                {myWorkElement.technologies.map((lang) => {
                    const launguageData = languages.find(
                        (el) => el.name === lang
                    );
                    return launguageData ? (
                        <i className={`${launguageData.icon}`}></i>
                    ) : null;
                })}
            </div>
            <img
                src={require(`../images/myWork/${myWorkElement.imgSrc}`)}
                alt={`${myWorkElement.name} img`}
                className={componentStyle.projectImg}
            />
            <div
                className={componentStyle.projectButtons}
                onMouseEnter={(e) => {
                    mouseEvent(e);
                }}
                onMouseLeave={removeHover}
            >
                {myWorkElement.href && (
                    <a
                        className={`${componentStyle.btn} ${componentStyle.scaledDown}`}
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                    </a>
                )}
                {!myWorkElement.noLearnMore && (
                    <button
                        className={`${componentStyle.btn} ${componentStyle.scaledDown}`}
                        onClick={() =>
                            setPopup((prevState) => ({
                                ...prevState,
                                content: myWorkElement.name,
                                isShow: true,
                            }))
                        }
                    >
                        Learn more
                    </button>
                )}
            </div>
            <p className={componentStyle.projectDesc}>{myWorkElement.name}</p>
        </div>
    ));

    const myWorkTenzi = myWorkElements.shift();

    return (
        <section id="my-work" className={componentStyle.mainSection}>
            <div className={componentStyle.navMenuMargin}></div>
            <h1>My Work</h1>
            <div className={componentStyle.tenziGameContainer}>
                <div>
                    <p>{myWorkTenzi}</p>
                </div>
                <div>
                    <h3>TENZI GAME</h3>
                    <p>
                        From a programming perspective, the Tenzi Game stands as
                        my most advanced project built using the{" "}
                        <b>React framework</b>.
                        <div className={componentStyle.tenziBtns}>
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
                                    Application details
                                    <img
                                        src={require(`../images/myWork/click_on.png`)}
                                        alt="clickon"
                                    ></img>
                                </button>
                            </Link>
                        </div>
                        On the back-end, I employed <b>Node.js</b> along with
                        the <b>Express</b> framework. <br /> The project contain
                        a complete user registration and authentication process,
                        employing <b>JSON Web Tokens</b>. This includes{" "}
                        <b>refresh token rotation</b> and password hashing using{" "}
                        <b>bcrypt</b> for enhanced security. <br /> The server
                        connects to a <b>MongoDB</b> database where user data
                        such as names, hashed passwords, and best scores are
                        stored using a <b>Mongoose model</b>.
                    </p>
                </div>
            </div>

            <div className={componentStyle.othersProjectsContainer}>
                <h3>ANOTHER WORK</h3>
                <p>
                    Another project builed on various stage of my studying
                    progress.
                </p>
                <div
                    id="projects-container"
                    className={componentStyle.projectsContainer}
                >
                    {myWorkElements}
                </div>
            </div>
        </section>
    );
};

export default MyWork;
