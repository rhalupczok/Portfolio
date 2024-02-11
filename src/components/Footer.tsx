import React from "react";
import componentStyle from "../styles/partials/footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={componentStyle.footer}>
            <p className={componentStyle.footer__paragraph}>
                Radoslaw Halupczok{" "}
                <span className={componentStyle.footer__paragraph_highlight}>
                    © 2024
                </span>
            </p>
        </footer>
    );
};

export default Footer;
