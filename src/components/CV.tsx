import React from "react";
import componentStyle from "../styles/partials/CV.module.scss";

const CV: React.FC = () => {
    return (
        <div id="cv" className={componentStyle.mainSection}>
            <h1>CV</h1>
            <div className={componentStyle.CVContent}>
                <a
                    href="https://drive.google.com/file/d/1SbrPWtqw2_H5UrPctwIUUvNgaqiiBsVe/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={require(`../images/cv/CV-icon.png`)}
                        alt="CV"
                        className="CVImg"
                    />
                </a>
            </div>
        </div>
    );
};

export default CV;
