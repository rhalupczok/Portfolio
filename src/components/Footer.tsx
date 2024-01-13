import React from "react";
import componentStyle from "../styles/partials/footer.module.scss";

const Footer: React.FC = () => {
    return (
        <div>
            <footer className={componentStyle.footer}>
                <p>
                    Radoslaw Halupczok <span>© 2024</span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
