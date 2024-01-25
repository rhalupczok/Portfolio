import React from "react";
import componentStyle from "../styles/partials/CV.module.scss";

const CV: React.FC = () => {
    return (
        <section id="cv" className={componentStyle.mainSection}>
            <div className={componentStyle.navMenuMargin}></div>
            <h1>CV</h1>
            <div className={componentStyle.cardsContainer}>
                <div className={componentStyle.card}>
                    <div>
                        <a
                            href="https://drive.google.com/file/d/1SbrPWtqw2_H5UrPctwIUUvNgaqiiBsVe/view?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-solid fa-file"></i>
                        </a>
                        <p>Radosław Halupczok</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CV;
