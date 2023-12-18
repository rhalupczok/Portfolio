import { ReactElement } from "react";
import componentStyle from "../styles/partials/knowledge.module.scss";
import { languages } from "../data/languagesData";

const Knowledge: React.FC = () => {
    const languageElements: ReactElement[] = languages.map((language) => (
        <div
            key={language.name}
            className={
                language.inprogress
                    ? `${componentStyle.langsContainer}, ${componentStyle.inProgress}`
                    : componentStyle.langsContainer
            }
        >
            <img
                src={require(`../images/languages/${language.imgSrc}`)}
                alt={language.alt}
                className={componentStyle.langsImg}
            />
            <p>{language.name}</p>
        </div>
    ));

    return (
        <div id="knowledge" className={componentStyle.mainSection}>
            <div className={componentStyle.navMenuMargin}></div>
            <h1>Technologies I've Studied</h1>
            <section className={componentStyle.technologyBlock}>
                <div className={componentStyle.technologyBlockLangs}>
                    {languageElements.slice(0, 4)}
                </div>
                <div className={componentStyle.technologyBlockDescription}>
                    <h3>Basics</h3>
                    <p>
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
                </div>
            </section>

            <section className={componentStyle.technologyBlock}>
                <div className={componentStyle.technologyBlockLangs}>
                    {languageElements.slice(4, 7)}
                </div>
                <div className={componentStyle.technologyBlockDescription}>
                    <h3>React framework + TypeScript</h3>
                    <p>
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
                </div>
            </section>
            <section className={componentStyle.technologyBlock}>
                <div className={componentStyle.technologyBlockLangs}>
                    {languageElements.slice(8, 12)}
                </div>
                <div className={componentStyle.technologyBlockDescription}>
                    <h3>NODE.JS-EXPRESS MONGODB mySQL</h3>
                    <p>
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
                </div>
            </section>
            <section className={componentStyle.technologyBlock}>
                <div className={componentStyle.technologyBlockLangs}>
                    {languageElements.slice(13, 15)}
                </div>
                <div className={componentStyle.technologyBlockDescription}>
                    <h3>JSON WEB TOKEN</h3>
                    <p>
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
                </div>
            </section>
            <section className={componentStyle.technologyBlock}>
                <div className={componentStyle.technologyBlockLangs}>
                    {languageElements.slice(15, 16)}
                </div>
                <div className={componentStyle.technologyBlockDescription}>
                    <h3>Version Control System GIT</h3>
                    <p>
                        With all projects I am working on I am using <b>Git</b>,
                        a version control system that enables efficient
                        collaboration and tracking of code changes.
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Knowledge;
