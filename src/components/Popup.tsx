import { useEffect, FC } from "react";
import componentStyle from "../styles/partials/popup.module.scss";
import { popupDataInterface } from "../data/interfaces";
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

const Popup: FC<{
    content: popupDataInterface[] | null;
    close: (content: popupDataInterface[] | null) => void;
}> = (props) => {
    useEffect(() => {
        const body = document.querySelector("body");
        body?.classList.add(componentStyle.stopScrolling);
        return () => {
            body?.classList.remove(componentStyle.stopScrolling);
        };
    }, []);

    const targetPopupContent: popupDataInterface[] | null = props.content;

    const swipeLeft = () => {
        const popups = document.querySelectorAll(
            `.${componentStyle.carouselItem}`
        );
        popups.forEach((el) => {
            const position: number = parseInt(
                el.getAttribute("data-pos") as string
            );
            let newPosition: number = position + 1;
            el.setAttribute("data-pos", String(newPosition));
        });
    };

    const swipeRight = () => {
        const popups = document.querySelectorAll(
            `.${componentStyle.carouselItem}`
        );
        popups.forEach((el) => {
            const position: number = parseInt(
                el.getAttribute("data-pos") as string
            );
            let newPosition: number = position - 1;
            el.setAttribute("data-pos", String(newPosition));
        });
    };

    const popupCards = targetPopupContent?.map((card, index) => (
        <div
            className={`${componentStyle.popupCard} ${componentStyle.carouselItem}`}
            data-pos={index}
            key={index}
        >
            <header className={componentStyle.popupCardHeader}>HEADER</header>
            <div className={componentStyle.popupCardContent}>
                <img
                    className={componentStyle.popupCardImg}
                    src={require(`../${card.img}`)}
                    alt="popup"
                    onClick={(e) => fullScreenIMG(e.target)}
                />
                <div className={componentStyle.popupCardDescription}>
                    {
                        //creating separate paragrapfs
                        card.text.map((el, elIndex) => (
                            <p
                                className={componentStyle.popupCardDescriptionP}
                                key={elIndex}
                            >
                                {el}
                            </p>
                        ))
                        //-------------------------------------------------------------------------------
                    }
                    {
                        //add link if exists in data
                        card.href && (
                            <a
                                href={card.href.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`${componentStyle.txtHighlight} ${componentStyle.popupCardDescriptionP}`}
                                key={card.href.link}
                            >
                                <span>{card.href.desc}</span>
                            </a>
                        )
                    }
                </div>
            </div>
            <button
                className={componentStyle.popupNavClose}
                onClick={() => props.close(null)}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
            {index !== 0 && (
                <button
                    className={componentStyle.popupNavPrev}
                    onClick={swipeLeft}
                >
                    <i className="fa-solid fa-caret-left"></i>
                </button>
            )}
            {index + 1 < targetPopupContent.length && (
                <button
                    className={componentStyle.popupNavNext}
                    onClick={swipeRight}
                >
                    <i className="fa-solid fa-caret-right"></i>
                </button>
            )}
        </div>
    ));

    return (
        <section className={componentStyle.popup}>
            {popupCards}
            {fullScreenJSX}
        </section>
    );
};

export default Popup;
