import { ReactElement, FC } from "react";
import componentStyle from "../styles/partials/contact.module.scss";
import { contact } from "../data/contactData";

const Contact: FC = () => {
    const contactElements: ReactElement[] = contact.map((contact) => (
        <figure className={componentStyle.card}>
            <a
                className={componentStyle.card__content}
                href={contact.link}
                target={contact?.target}
                key={contact.name}
            >
                <i
                    className={`${componentStyle.card__icon} ${contact.icon}`}
                ></i>
                <p className={componentStyle.card__description}>
                    {contact.name}
                </p>
            </a>
        </figure>
    ));
    return (
        <section id="contact" className={componentStyle.contact}>
            <header className={componentStyle.contact__header}>
                <h1>Contact</h1>
            </header>
            <section className={componentStyle.contact__cardsContainer}>
                {contactElements}
            </section>
        </section>
    );
};

export default Contact;
