import React from "react";
import componentStyle from "../styles/partials/CV.module.scss";

const CV: React.FC = () => {
    return (
        <section id="cv" className={componentStyle.cv}>
            <header className={componentStyle.cv__header}>
                <h1>CV</h1>
            </header>
            <figure className={componentStyle.card}>
                <a
                    className={componentStyle.card__content}
                    href="https://drive.google.com/file/d/1SbrPWtqw2_H5UrPctwIUUvNgaqiiBsVe/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className={`${componentStyle.card__icon} fa-solid fa-file`}
                    ></i>
                    <p className={componentStyle.card__description}>
                        Radosław Halupczok
                    </p>
                </a>
            </figure>
        </section>
    );
};

export default CV;
