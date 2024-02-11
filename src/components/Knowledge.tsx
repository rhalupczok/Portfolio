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
            <article className={componentStyle.skill}>
                <section className={componentStyle.skill__pictures}>
                    {languageElements.slice(0, 4)}
                </section>
                <section className={componentStyle.skill__description}>
                    <h3 className={componentStyle.skill__header}>Basics</h3>
                    <p className={componentStyle.skill__paragraph}>
                        At very begining I went through{" "}
                        <b>HTML, CSS (SCSS), and JavaScript</b> courses, as well
                        as various documentations.
                        <br />
                        It has equipped me with the skills necessary to create
                        well-structured, visually engaging, and interactive web
                        applications.
                        <br />I am familiar with popular libraries such as{" "}
                        <b>Bootstrap</b> for responsive and mobile-first design.
                    </p>
                </section>
            </article>

            <article className={componentStyle.skill}>
                <section className={componentStyle.skill__pictures}>
                    {languageElements.slice(4, 7)}
                </section>
                <section className={componentStyle.skill__description}>
                    <h3 className={componentStyle.skill__header}>
                        React framework + TypeScript
                    </h3>
                    <p className={componentStyle.skill__paragraph}>
                        I have delved into advanced web development by mastering{" "}
                        <b>React, React Router</b>, and <b>TypeScript</b>. With
                        React, I can efficiently build dynamic and reusable user
                        interfaces, using components for modular design.
                        <br />
                        With each small project I am focused on extending my
                        knowlegde f.ex use <b>useContext</b> module for passing
                        the state throught all components without using props by
                        each level.
                    </p>
                </section>
            </article>

            <article className={componentStyle.skill}>
                <section className={componentStyle.skill__pictures}>
                    {languageElements.slice(7, 11)}
                </section>
                <section className={componentStyle.skill__description}>
                    <h3 className={componentStyle.skill__header}>
                        Node.js-Express.js MongoDB Docker
                    </h3>
                    <p className={componentStyle.skill__paragraph}>
                        I've expanded my knowlegde in server-side development
                        with the integration of <b>Node.js</b> and{" "}
                        <b>Express.js</b>, complemented by <b>MongoDB</b>
                        <br />
                        I've successfully developed server-side logic,{" "}
                        <b>RESTful APIs</b>, and <b>database interactions</b>.
                        To connect the FrontEnd, I delved into <b>AXIOS</b> and
                        for deployment - into <b>Docker</b>.
                        <br /> This diverse skill set allows me to adapt to
                        various project requirements, delivering scalable and
                        responsive server-side applications.
                    </p>
                </section>
            </article>

            <article className={componentStyle.skill}>
                <section className={componentStyle.skill__pictures}>
                    {languageElements.slice(11, 13)}
                </section>
                <section className={componentStyle.skill__description}>
                    <h3 className={componentStyle.skill__header}>
                        Json Web Token
                    </h3>
                    <p className={componentStyle.skill__paragraph}>
                        I adeptly implement secure authentication and
                        authorization using <b>JSON Web Tokens (JWT)</b> in
                        React frontend and Express.js backend. In the frontend,
                        I employ JWTs for user authentication, securely storing{" "}
                        <b>access tokens</b> and managing sessions with{" "}
                        <b>refresh tokens</b>.
                        <br />
                        To enhance security, I use <b>Bcrypt</b> for secure{" "}
                        <b>password hashing</b>, ensuring robust protection of
                        user credentials.
                        <br />
                        <br />
                        On the backend, I integrate JWT into Express.js
                        middleware for request validation, permitting access
                        only to authenticated and authorized users.
                        Additionally, I leverage <b>
                            React interceptors
                        </b> for <b>refresh token rotation</b>, providing a
                        seamless and secure approach to managing user sessions.
                    </p>
                </section>
            </article>

            <article className={componentStyle.skill}>
                <section className={componentStyle.skill__pictures}>
                    {languageElements.slice(13, 14)}
                </section>
                <section className={componentStyle.skill__description}>
                    <h3 className={componentStyle.skill__header}>
                        Version Control System GIT
                    </h3>
                    <p className={componentStyle.skill__paragraph}>
                        With all projects I am working on I am using <b>Git</b>,
                        a version control system that enables efficient
                        collaboration and tracking of code changes.
                    </p>
                </section>
            </article>
        </section>
    );
};
export default Knowledge;
