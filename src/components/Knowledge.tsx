import { ReactElement } from "react";
import componentStyle from "../styles/partials/knowledge.module.scss";
import { languages } from "../data/languagesData";

const Knowledge: React.FC = () => {
    const languageElements: ReactElement[] = languages.map((language) => (
        <figure key={language.name} className={componentStyle.skill__picture}>
            <i className={`${language.icon} fa-4x`}></i>
            <p>{language.name}</p>
        </figure>
    ));

    return (
        <section id="knowledge" className={componentStyle.skills}>
            <header className={componentStyle.skills__header}>
                <h1>SKILLS</h1>
            </header>
            <section className={componentStyle.skills__container}>
                <article className={componentStyle.skill}>
                    <h3 className={componentStyle.skill__header}>
                        HTML - CSS - JS
                    </h3>
                    <section className={componentStyle.skill__pictures}>
                        {languageElements.slice(0, 4)}
                    </section>
                    <ul className={componentStyle.skill__list}>
                        <li>Sematic elements</li>
                        <li>SASS and BEM for organized styling</li>
                        <li>Responsive design</li>
                        <li>clean, readable, and understandable code</li>
                    </ul>
                </article>
                <article className={componentStyle.skill}>
                    <h3 className={componentStyle.skill__header}>
                        React - TypeScript
                    </h3>
                    <section className={componentStyle.skill__pictures}>
                        {languageElements.slice(4, 7)}
                    </section>
                    <ul className={componentStyle.skill__list}>
                        <li>React Router</li>
                        <li>Class&Functional Components</li>
                        <li>Hooks</li>
                    </ul>
                </article>
                <article className={componentStyle.skill}>
                    <h3 className={componentStyle.skill__header}>
                        Node.js - MongoDB
                    </h3>
                    <section className={componentStyle.skill__pictures}>
                        {languageElements.slice(7, 10)}
                    </section>
                    <ul className={componentStyle.skill__list}>
                        <li>Express.js</li>
                        <li>RESTful APIs</li>
                        <li>noSQL database</li>
                        <li>Axios</li>
                    </ul>
                </article>
                <article className={componentStyle.skill}>
                    <h3 className={componentStyle.skill__header}>
                        Json Web Token
                    </h3>
                    <section className={componentStyle.skill__pictures}>
                        {languageElements.slice(10, 12)}
                    </section>
                    <ul className={componentStyle.skill__list}>
                        <li>Authentication</li>
                        <li>Refresh token rotation</li>
                        <li>React interceptors</li>
                        <li>Password hashing</li>
                    </ul>
                </article>
                <article className={componentStyle.skill}>
                    <h3 className={componentStyle.skill__header}>
                        Version Control System GIT
                    </h3>
                    <section className={componentStyle.skill__pictures}>
                        {languageElements.slice(12)}
                    </section>
                    {/* <ul className={componentStyle.skill__list}>
                        <li>authentication</li>
                    </ul> */}
                </article>
            </section>
        </section>
    );
};
export default Knowledge;
