import React, { useEffect, useRef, useState } from "react";
import "../styles/partials/intro.scss";
import { scrollTo } from "../data/helperfunc";

const Intro: React.FC = () => {
    const useAnimationFrame = (callback: (deltaTime: number) => void) => {
        const requestRef = useRef<number | null>(null);
        const previousTimeRef = useRef<number | undefined>(undefined);

        const animate = (time: number) => {
            if (previousTimeRef.current !== undefined) {
                const deltaTime = (time - previousTimeRef.current) / 40;
                callback(deltaTime);
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        useEffect(() => {
            requestRef.current = requestAnimationFrame(animate);
            return () => {
                if (requestRef.current) {
                    cancelAnimationFrame(requestRef.current);
                }
            };
        }, []);
    };

    const [style, setStyle] = useState({
        cards: { transform: `rotateY(0deg)` },
        picture: { transform: `rotateY(0deg)` },
    });
    const rotationAngleRef = useRef(0);

    const animateCallback = (deltaTime: number) => {
        rotationAngleRef.current += deltaTime;
        setStyle({
            cards: { transform: `rotateY(${rotationAngleRef.current}deg)` },
            picture: { transform: `rotateY(${-rotationAngleRef.current}deg)` },
        });
    };

    useEffect(() => {
        const neonBtn: Element | null = document.querySelector(".neon-button");
        setTimeout(() => {
            neonBtn?.classList.add("focus");
        }, 1000);
        setTimeout(() => {
            neonBtn?.classList.remove("focus");
        }, 5000);
    }, []);

    useAnimationFrame(animateCallback);

    return (
        <div id="intro" className="intro-bg">
            <div className="intro">
                <div style={style.cards} className="intro-carousel">
                    <img
                        style={style.picture}
                        src={require("../images/intro/intro-my-picture.png")}
                        alt="Profile"
                        className="intro-picture"
                    />
                    <div className="intro-picture-gradient"></div>
                    <div className={`intro-carousel-item it1`}>
                        <div className="intro-carousel-item-content">
                            <h1>
                                <p className="header-text-typing">
                                    Welcome on my portfolio page
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div className={`intro-carousel-item it2`}>
                        <div className="intro-carousel-item-content">
                            <h1>
                                <p>
                                    <span className="header-text-typing">
                                        My name is{" "}
                                    </span>
                                    <span className="txt-highlight header-text-typing">
                                        Radosław Halupczok
                                    </span>
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div className={`intro-carousel-item it3`}>
                        <div className="intro-carousel-item-content">
                            <h1>
                                <p className="header-text-typing">
                                    Front-End Developer Candidate
                                </p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <button className="neon-button" onClick={() => scrollTo("about")}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>⇩
            </button>
        </div>
    );
};

export default Intro;
