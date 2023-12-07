import { ReactElement, FC } from "react";
import componentStyle from "../styles/partials/contact.module.scss";
import { contact } from "../data/contactData";

const Contact: FC = () => {
    const contactElements: ReactElement[] = contact.map((contact) => (
        <a href={contact.link} target={contact?.target} key={contact.name}>
            <img
                src={require(`../images/contact/${contact.imgSrc}`)}
                alt={contact.alt}
            />
        </a>
    ));
    return (
        <div
            id="contact"
            className={`${componentStyle.contact}, ${componentStyle.mainSection}`}
        >
            <h1>Contact</h1>
            <div className={componentStyle.social}>{contactElements}</div>
        </div>
    );
};

export default Contact;
