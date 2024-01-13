import { useEffect, useRef, useState, FC } from "react";
import componentStyle from "../styles/partials/intro.module.scss";
import { scrollTo } from "../data/helperfunc";

const Intro: FC = () => {
    const [playCarousel, setPlayCarousel] = useState<boolean>(false); // Add play state
    const [scrollOpacity, setScrollOpacity] = useState<number>(1);
    const [isCursorOverBtn, setIsCursorOverBtn] = useState(false);

    const downBtnArrStyle = {
        transform: isCursorOverBtn ? "rotateZ(90deg)" : "rotateZ(0deg)",
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = 800;
        const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
        setScrollOpacity(opacity);
        if (scrollPosition > maxScroll) setPlayCarousel(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const introStyle = {
        opacity: scrollOpacity,
        transform: `scale(${scrollOpacity}) translateY(${
            (1 - scrollOpacity) * 600
        }px)`,
    };

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
            if (playCarousel) {
                // Only start animation if playCarousel is true
                requestRef.current = requestAnimationFrame(animate);
            }
            return () => {
                if (requestRef.current) {
                    cancelAnimationFrame(requestRef.current);
                }
            };
        }, [playCarousel]); // Add playCarousel to dependencies
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

    useAnimationFrame(animateCallback);

    const toggleCarousel = () => {
        setPlayCarousel(!playCarousel); // Toggle playCarousel state
    };

    return (
        <div id="intro" className={componentStyle.introBg}>
            <div className={componentStyle.intro} style={introStyle}>
                <div
                    style={playCarousel ? style.cards : undefined}
                    className={componentStyle.introCarousel}
                >
                    <img
                        style={playCarousel ? style.picture : undefined}
                        src={require("../images/intro/intro-my-picture.png")}
                        alt="Profile"
                        className={componentStyle.introPicture}
                    />
                    <div className={componentStyle.introPictureGradient}></div>
                    <div
                        className={
                            playCarousel
                                ? `${componentStyle.introCarouselItem} ${componentStyle.it1} ${componentStyle.carousel}`
                                : `${componentStyle.introCarouselItem} ${componentStyle.it1}`
                        }
                    >
                        <div
                            className={componentStyle.introCarouselItemContent}
                        >
                            <h1>
                                <p>Welcome on my portfolio page</p>
                            </h1>
                        </div>
                    </div>
                    <div
                        className={
                            playCarousel
                                ? `${componentStyle.introCarouselItem} ${componentStyle.it2} ${componentStyle.carousel}`
                                : `${componentStyle.introCarouselItem} ${componentStyle.it2}`
                        }
                    >
                        <div
                            className={componentStyle.introCarouselItemContent}
                        >
                            <h1>
                                <p>
                                    <span>HELLO I'm </span>
                                    <span
                                        className={
                                            componentStyle.txtHighlightNoHover
                                        }
                                    >
                                        Radosław Halupczok
                                    </span>
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div
                        className={
                            playCarousel
                                ? `${componentStyle.introCarouselItem} ${componentStyle.it3} ${componentStyle.carousel}`
                                : `${componentStyle.introCarouselItem} ${componentStyle.it3}`
                        }
                    >
                        <div
                            className={componentStyle.introCarouselItemContent}
                        >
                            <h1>
                                <p>
                                    FrontEnd
                                    <br /> FullStack Developer Candidate
                                </p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={`${componentStyle.btn} ${componentStyle.carouselBtn}`}
                onClick={() => toggleCarousel()} // Add a function to toggle carousel play
            >
                {playCarousel ? (
                    <i className="fa-solid fa-stop"></i>
                ) : (
                    <i className="fa-solid fa-play"></i>
                )}
                {/* Toggle button label */}
            </button>
            <button
                className={`${componentStyle.downBtn} ${componentStyle.btn}`}
                onClick={() => {
                    scrollTo("about");
                }}
                onMouseEnter={() => setIsCursorOverBtn(true)}
                onMouseLeave={() => setIsCursorOverBtn(false)}
            >
                View my work{" "}
                <div
                    className={componentStyle.downBtnArr}
                    style={downBtnArrStyle}
                >
                    <i className="fa-solid fa-xl fa-right-long"></i>
                </div>
            </button>
        </div>
    );
};

export default Intro;
