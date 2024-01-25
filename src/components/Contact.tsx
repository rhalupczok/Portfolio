import { ReactElement, FC } from "react";
import componentStyle from "../styles/partials/contact.module.scss";
import { contact } from "../data/contactData";

const Contact: FC = () => {
    const contactElements: ReactElement[] = contact.map((contact) => (
        <div className={componentStyle.card}>
            <div>
                <a
                    href={contact.link}
                    target={contact?.target}
                    key={contact.name}
                >
                    <i className={contact.icon}></i>
                </a>
                <p>{contact.name}</p>
            </div>
        </div>
    ));
    return (
        <section
            id="contact"
            className={`${componentStyle.contact}, ${componentStyle.mainSection}`}
        >
            <div className={componentStyle.navMenuMargin}></div>
            <h1>Contact</h1>
            <div className={componentStyle.cardsContainer}>
                {contactElements}
            </div>
        </section>
    );
};

export default Contact;
