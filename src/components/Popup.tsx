import { useEffect, FC } from "react";
import componentStyle from "../styles/partials/popup.module.scss";
import { popupDataInterface } from "../data/interfaces";
import { popupData } from "../data/PopupData";
import usePopup from "../Hooks/usePopup";
import { fullScreenIMG } from "../data/helperfunc";

const Popup: FC = () => {
    const { popup, setPopup } = usePopup();
    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.classList.add(componentStyle.stopScrolling);
        return () => {
            if (body) body.classList.remove(componentStyle.stopScrolling);
        };
    }, []);

    const targetPopupContent: popupDataInterface | undefined = popupData.find(
        ({ name }) => name === popup.content
    ); // finding content for popup in popupData based on content name passed by props

    let targetContent;
    if (
        targetPopupContent === undefined ||
        targetPopupContent.isFinished === false
    ) {
        targetContent = popupData[0].content;
    } else {
        targetContent = targetPopupContent.content;
    }

    // first condition: if the name passed by props in not matching to any object in popupdata then targetContent is undefined. In that case object targetContent get the content of "underConstruction" popup. Second condition: If the content of popup is not finished (marked property in data) then targetContent is "underConstruction" too.

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

    const popupCards = targetContent.map((card, index) => (
        <div
            className={`${componentStyle.popupCard} ${componentStyle.carouselItem}`}
            data-pos={index}
            key={index}
        >
            <header className={componentStyle.popupCardHeader}>
                {targetPopupContent?.name}
            </header>
            <div className={componentStyle.popupCardContent}>
                <img
                    className={componentStyle.popupCardImg}
                    src={require(`../images/popup/${card.img}`)}
                    alt="popup"
                    onClick={(e) => fullScreenIMG(e.target)}
                />
                <div className={componentStyle.popupCardDescription}>
                    {
                        //creating separate paragrapf for each content element in text array in popupdata
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
                        //adding link if exists in data
                        card.href &&
                            card.href.map((href) => (
                                <a
                                    href={href.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${componentStyle.txtHighlight} ${componentStyle.popupCardDescriptionP}`}
                                    key={href.link}
                                >
                                    <span>{href.desc}</span>
                                </a>
                            ))
                    }
                </div>
            </div>
            <button
                className={componentStyle.popupNavClose}
                onClick={() =>
                    setPopup({ content: popup.content, isShow: false })
                }
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
            {index + 1 < targetContent.length && (
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
        <div className={componentStyle.popupBg}>
            {popupCards}
            <div id="fullScreenIMG" className={componentStyle.fullScreenImg}>
                <button
                    className={componentStyle.popupNavClose}
                    onClick={(e) => {
                        fullScreenIMG(e.target);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

export default Popup;
