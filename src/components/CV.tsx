import React from "react";
import "../styles/partials/CV.scss";

const CV: React.FC = () => {
    return (
        <div id="cv" className="main-section">
            <h1>CV</h1>
            <div className="CV--content">
                <a
                    href="https://drive.google.com/file/d/1SbrPWtqw2_H5UrPctwIUUvNgaqiiBsVe/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={require(`../images/cv/CV-Radoslaw_Halupczok_eng.png`)}
                        alt="CV"
                        className="CV--img"
                    />
                </a>
            </div>
        </div>
    );
};

export default CV;
