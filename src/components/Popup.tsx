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

    const popupCards = targetContent.map((card, index) => (
        <div
            className={`${componentStyle.popupCard} ${componentStyle.carouselItem}`}
            data-pos={index}
            key={index}
        >
            <header className={componentStyle.popupCardHeader}>
                {targetPopupContent?.name}
                <button
                    className={componentStyle.popupNavClose}
                    onClick={() =>
                        setPopup({ content: popup.content, isShow: false })
                    }
                >
                    x
                </button>
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
        </div>
    ));

    const swipeLeft = () => {
        const popups = document.querySelectorAll(
            `.${componentStyle.carouselItem}`
        );
        if (popups[0].getAttribute("data-pos") === "0") return; //first element - cannot swipe left
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
        if (popups[popups.length - 1].getAttribute("data-pos") === "0") {
            return;
        } // last element - cannot swipe right
        popups.forEach((el) => {
            const position: number = parseInt(
                el.getAttribute("data-pos") as string
            );
            let newPosition: number = position - 1;
            el.setAttribute("data-pos", String(newPosition));
        });
    };

    return (
        <div className={componentStyle.popupBg}>
            {popupCards}
            {popupCards.length > 1 && (
                <div className={componentStyle.popupNav}>
                    <button
                        className={componentStyle.popupNavPrev}
                        onClick={swipeLeft}
                    >
                        &#8810;
                    </button>
                    <button
                        className={componentStyle.popupNavNext}
                        onClick={swipeRight}
                    >
                        &#8811;
                    </button>
                </div>
            )}
            <div
                id="fullScreenIMG"
                className={componentStyle.fullScreenImg}
                onClick={(e) => {
                    fullScreenIMG(e.target);
                }}
            ></div>
        </div>
    );
};

export default Popup;
