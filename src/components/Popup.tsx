import React, { useEffect } from "react";
import "../styles/partials/popup.scss";
import { popupDataInterface, popupProps } from "../data/interfaces";
import { popupData } from "../data/PopupData";

const Popup: React.FC<popupProps> = ({ setPopupHandle, popupContent }) => {
    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.classList.add("stop-scrolling");
        return () => {
            if (body) body.classList.remove("stop-scrolling");
        };
    }, []);

    const targetPopupContent: popupDataInterface | undefined = popupData.find(
        ({ name }) => name === popupContent.content
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
        <div className="popup-card carousel__item" data-pos={index} key={index}>
            <header className="popup-card--header">
                {targetPopupContent?.name}
                <button
                    className="popup--nav--close"
                    onClick={() => setPopupHandle(popupContent.content, false)}
                >
                    x
                </button>
            </header>
            <div className="popup-card--content">
                <img
                    className="popup-card--img"
                    src={require(`../images/popup/${card.img}`)}
                    alt="popup"
                    onClick={(e) => fullScreenIMG(e.target)}
                />
                <div className="popup-card--description">
                    {
                        //creating separate paragrapf for each content element in text array in popupdata
                        card.text.map((el, elIndex) => (
                            <p
                                className="popup-card--description--p"
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
                                    className="txt-highlight"
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
        const popups = document.querySelectorAll(".carousel__item");
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
        const popups = document.querySelectorAll(".carousel__item");
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

    const fullScreenIMG = (e: EventTarget) => {
        const fullScreen = document.querySelector(
            ".popup--full-screen-img"
        ) as HTMLElement;
        const target = e as HTMLElement;
        if (target.className === fullScreen.className) {
            fullScreen.style.display = "none";
        } else {
            const src = target.getAttribute("src");
            if (src) {
                if (fullScreen) {
                    fullScreen.style.backgroundImage = `url("${src}")`;
                    fullScreen.style.display = "block";
                }
            }
        }
    };

    return (
        <div className="popupBg">
            {popupCards}
            {popupCards.length > 1 && (
                <div className="popup--nav">
                    <button className="popup--nav--prev" onClick={swipeLeft}>
                        &#8810;
                    </button>
                    <button className="popup--nav--next" onClick={swipeRight}>
                        &#8811;
                    </button>
                </div>
            )}
            <div
                className="popup--full-screen-img"
                onClick={(e) => {
                    fullScreenIMG(e.target);
                }}
            ></div>
        </div>
    );
};

export default Popup;
