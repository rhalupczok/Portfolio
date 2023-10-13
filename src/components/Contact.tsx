import React, { ReactElement } from "react";
import "../styles/partials/contact.scss";
import { contact } from "../data/contactData";

const Contact: React.FC = () => {
    const contactElements: ReactElement[] = contact.map((contact) => (
        <a href={contact.link} target={contact?.target} key={contact.name}>
            <img
                src={require(`../images/contact/${contact.imgSrc}`)}
                alt={contact.alt}
                className={contact.className}
            />
        </a>
    ));
    return (
        <div id="contact" className="contact main-section">
            <h1>Contact</h1>
            <div className="social">{contactElements}</div>
        </div>
    );
};

export default Contact;
