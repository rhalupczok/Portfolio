import React from "react";

const CV: React.FC = () => {
    return (
        <div id="cv" className="main-section">
            <h1>CV</h1>
            <div className="CV--content">
                <a
                    href="https://drive.google.com/file/d/1j3Nb6ZBMn09JIoSLr_Jsx1gyWW-ALqRd/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={require(`../images/CV-Radoslaw_Halupczok_eng.png`)}
                        alt="CV"
                        className="CV--img"
                    />
                </a>
            </div>
        </div>
    );
};

export default CV;
