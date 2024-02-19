import { FC, ReactElement } from "react";
import componentStyle from "../styles/partials/tenziDescription.module.scss";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { diagramData, cardsData } from "../data/tenziDescData";
import { diagramDataInterface, cardDataInterface } from "../data/interfaces";

import { fullScreenIMG } from "../data/helperfunc";
const fullScreenJSX = (
    <section id="fullScreenIMG" className={componentStyle.fullScreenImg}>
        <button
            className={componentStyle.popupNavClose}
            onClick={(e) => {
                fullScreenIMG(e.target);
            }}
        >
            <i className="fa-solid fa-xmark"></i>
        </button>
    </section>
);

const TenziDescription: FC = () => {
    const navigate = useNavigate();

    const diagrams: ReactElement[] = diagramData.map(
        (diagram: diagramDataInterface) => (
            <article className={componentStyle.diagram}>
                <header className={componentStyle.diagram__header}>
                    <h1>{diagram.name}</h1>
                </header>
                <p className={componentStyle.diagram__paragraph}>
                    {diagram.description}
                </p>
                <img
                    className={componentStyle.diagram__picture}
                    src={require(`../images/tenziDescription${diagram.src}`)}
                    alt={diagram.name}
                    onClick={(e) => fullScreenIMG(e.target)}
                />
            </article>
        )
    );

    const cards: ReactElement[] = cardsData.map(
        (cardsData: cardDataInterface) => (
            <figure className={componentStyle.card}>
                <a
                    className={componentStyle.card__content}
                    href={cardsData.link}
                    target="_blank"
                    rel="noreferrer"
                    key={cardsData.name}
                >
                    <i
                        className={`${componentStyle.card__icon} fa-brands fa-github`}
                    ></i>
                    <p className={componentStyle.card__description}>
                        {cardsData.name}
                    </p>
                </a>
            </figure>
        )
    );

    return (
        <section className={componentStyle.mainSection}>
            <nav className={componentStyle.navbar}>
                <span
                    className={componentStyle.navbar__backBtn}
                    onClick={() => navigate(-1)}
                >
                    {`<< `}BACK
                </span>
                <h4 className={componentStyle.navbar__header}>TENZI GAME</h4>
            </nav>
            {diagrams}
            <h1>Github links</h1>
            <section className={componentStyle.cardsContainer}>{cards}</section>
            <ScrollRestoration />
            {fullScreenJSX}
        </section>
    );
};
export default TenziDescription;
