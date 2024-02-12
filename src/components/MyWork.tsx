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
                        className={`${componentStyle.btn}`}
                        href={myWorkElement.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {myWorkElement.isPlay ? "PLAY" : "OPEN"}
                    </a>
                )}
                {!myWorkElement.noLearnMore && (
                    <button
                        className={`${componentStyle.btn}`}
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
            </p>
            <p className={componentStyle.project__name}>{myWorkElement.name}</p>

            <p className={componentStyle.project__usedTechnologies}>
                {myWorkElement.technologies.map((lang) => {
                    const launguageData = languages.find(
                        (el) => el.name === lang
                    );
                    return launguageData ? (
                        <i className={`${launguageData.icon}`}></i>
                    ) : null;
                })}
            </p>
        </figure>
    ));

    const myWorkTenzi = myWorkElements.shift();

    return (
        <section id="my-work" className={componentStyle.myWork}>
            <header className={componentStyle.myWork__header}>
                <h1>My Work</h1>
            </header>
            <article className={componentStyle.tenziGame}>
                {myWorkTenzi}
                <article>
                    <header className={componentStyle.tenziGame__header}>
                        <h3>TENZI GAME</h3>
                    </header>
                    <p className={componentStyle.tenziGame__paragraph}>
                        From a programming perspective, the Tenzi Game stands as
                        my most advanced project built using the{" "}
                        <b>React framework</b>.
                    </p>
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
                                Application details
                            </button>
                        </Link>{" "}
                    </p>
                    <p className={componentStyle.tenziGame__paragraph}>
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
                </article>
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
