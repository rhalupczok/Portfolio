import { ReactElement } from "react";
import "../styles/partials/knowledge.scss";
import { languages } from "../data/languagesData";
import usePopup from "../Hooks/usePopup";

const Knowledge: React.FC = () => {
    const { setPopup } = usePopup();

    const languageElements: ReactElement[] = languages.map((language) => (
        <div
            key={language.name}
            className={
                language.inprogress
                    ? "langs-container in-progress"
                    : "langs-container"
            }
        >
            <img
                src={require(`../images/languages/${language.imgSrc}`)}
                alt={language.alt}
                className="langs-img"
            />
            <p>{language.name}</p>
        </div>
    ));

    return (
        <div id="knowledge" className="main-section">
            <div className="nav-menu--margin"></div>
            <h1>Technologies I've Studied</h1>
            <section className="technology-block">
                <div className="technology-block--langs langs">
                    {languageElements.slice(0, 4)}
                </div>
                <div className="technology-block--description">
                    <h3>Basics</h3>
                    <p>
                        At very begining I went through HTML, CSS, and
                        JavaScript courses, as well as various documentations.
                        <br />
                        It has equipped me with the skills necessary to create
                        well-structured, visually engaging, and interactive web
                        applications.
                        <br />I am familiar with popular libraries such as
                        Bootstrap for responsive and mobile-first design.
                    </p>
                </div>
            </section>

            <section className="technology-block">
                <div className="technology-block--langs langs">
                    {languageElements.slice(4, 7)}
                </div>
                <div className="technology-block--description">
                    <h3>React framework + TypeScript</h3>
                    <p>
                        I have delved into advanced web development by mastering
                        React, React Router, and TypeScript. With React, I can
                        efficiently build dynamic and reusable user interfaces,
                        leveraging components for modular design. React Router
                        enhances navigation, enabling seamless transitions
                        between components and improving the overall user
                        experience.
                        <br />
                        With each small project I am focused on extending my
                        knowlegde f.ex use useContext module for passing the
                        state throught all components without using props by
                        each level.
                    </p>
                </div>
            </section>
            <section className="technology-block">
                <div className="technology-block--langs langs">
                    {languageElements.slice(8, 12)}
                </div>
                <div className="technology-block--description">
                    <h3>Back end side - NODE.JS-EXPRESS.JS MONGODB mySQL</h3>
                    <p>
                        I've expanded my expertise in server-side development
                        with the integration of Node.js and Express.js,
                        complemented by MongoDB, Mongoose, and MySQL for robust
                        data management.
                        <br />
                        Applying this comprehensive stack, I've successfully
                        developed server-side logic, RESTful APIs, and database
                        interactions. My experience encompasses the flexibility
                        of NoSQL databases like MongoDB, the schema enforcement
                        of Mongoose, and the relational structure of MySQL. This
                        diverse skill set allows me to adapt to various project
                        requirements, delivering scalable and responsive
                        server-side applications.
                    </p>
                </div>
            </section>
            <section className="technology-block">
                <div className="technology-block--langs langs">
                    {languageElements.slice(13, 15)}
                </div>
                <div className="technology-block--description">
                    <h3>JSON WEB TOKEN</h3>
                    <p>
                        I adeptly implement secure authentication and
                        authorization using JSON Web Tokens (JWT) in React
                        frontend and Express.js backend. In the frontend, I
                        employ JWTs for user authentication, securely storing
                        access tokens and managing sessions with refresh tokens.
                        <br />
                        To enhance security, I use bcrypt for secure password
                        hashing, ensuring robust protection of user credentials.
                        <br />
                        <br />
                        On the backend, I integrate JWT into Express.js
                        middleware for request validation, permitting access
                        only to authenticated and authorized users.
                        Additionally, I leverage React interceptors for refresh
                        token rotation, providing a seamless and secure approach
                        <br />
                        <br />
                        to managing user sessions. This combined approach of
                        JWT, bcrypt, and React interceptors establishes a
                        comprehensive authentication system, ensuring both the
                        protection of sensitive information and a smooth user
                        experience on both the frontend and backend.
                    </p>
                </div>
            </section>
            <section className="technology-block">
                <div className="technology-block--langs langs">
                    {languageElements.slice(15, 16)}
                </div>
                <div className="technology-block--description">
                    <h3>Version Control System GIT</h3>
                    <p>
                        With all projects I am working on I am using Git, a
                        version control system that enables efficient
                        collaboration and tracking of code changes.
                    </p>
                </div>
            </section>
        </div>
    );
};
export default Knowledge;
