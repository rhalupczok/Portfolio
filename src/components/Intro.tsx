import { useEffect, useRef, useState, FC } from "react";
import componentStyle from "../styles/partials/intro.module.scss";
import { scrollTo } from "../data/helperfunc";

const Intro: FC = () => {
    const [playCarousel, setPlayCarousel] = useState<boolean>(false); // Add play state
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

    useEffect(() => {
        const neonBtn: Element[] | null = Array.from(
            document.querySelectorAll(".neonButton")
        );
        setTimeout(() => {
            neonBtn?.forEach((el) => el.classList.add("focus"));
        }, 500);
        setTimeout(() => {
            neonBtn?.forEach((el) => el.classList.remove("focus"));
        }, 3000);
    }, []);

    useAnimationFrame(animateCallback);

    const toggleCarousel = () => {
        setPlayCarousel(!playCarousel); // Toggle playCarousel state
    };

    return (
        <div id="intro" className={componentStyle.introBg}>
            <div className={componentStyle.intro}>
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
                                    <span>My name is </span>
                                    <span
                                        className={componentStyle.txtHighlight}
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
                                <p>Full Stack Developer Candidate</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={`${componentStyle.btn} ${componentStyle.carouselBtn}`}
                onClick={() => toggleCarousel()} // Add a function to toggle carousel play
            >
                {playCarousel ? "STOP" : "Carousel"} {/* Toggle button label */}
            </button>
            <button
                className={`${componentStyle.downBtn} ${componentStyle.btn}`}
                onClick={() => {
                    setPlayCarousel(false);
                    scrollTo("about");
                }}
            >
                ⇩
            </button>
        </div>
    );
};

export default Intro;
