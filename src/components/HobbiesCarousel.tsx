import { ReactElement, useEffect, useRef, useState, FC } from "react";
import componentStyle from "../styles/partials/hobbiesCarousel.module.scss";
import { myHobbiesData } from "../data/myHobbiesData";
import { myhobbiesProps } from "../data/interfaces";

const HobbiesCarousel: FC<myhobbiesProps> = (props) => {
    const handleScroll = (e: Event) => {
        const wheelEvent = e as WheelEvent;
        const delta = wheelEvent.deltaY / 10;
        rotationAngleRef.current += delta;
    };
    useEffect(() => {
        window.addEventListener("mousewheel", (e) => handleScroll(e));
        const body = document.querySelector("body");
        if (body) body.classList.add(componentStyle.stopScrolling);
        return () => {
            window.removeEventListener("mousewheel", (e) => handleScroll(e));
            if (body) body.classList.remove(componentStyle.stopScrolling);
        };
    }, []);

    const myHobbiesElements: ReactElement[] = myHobbiesData.map((hobby) => (
        <div
            key={hobby.name}
            className={`${componentStyle.hobbiesCarouselItem} carouselEffect`}
        >
            <img
                src={require(`../images/hobby/${hobby.imgSrc}`)}
                alt="hobby"
                className={componentStyle.hobbyImg}
            />
            <p>{hobby.name}</p>
        </div>
    ));

    //carousel content:
    const items: Element[] = Array.from(
        document.querySelectorAll(`.carouselEffect`)
    );

    //start effect - each hobby element comes-in separately
    items.forEach((el, index) => {
        setTimeout(() => {
            el.setAttribute("data-pos", String(index));
        }, index * 500);
    });

    //animationframe:
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

    //animationframe callback content:
    const [style, setStyle] = useState({
        transform: `rotateY(0deg)`,
    });
    const rotationAngleRef = useRef(0);

    const animateCallback = (deltaTime: number) => {
        rotationAngleRef.current += deltaTime;
        setStyle({ transform: `rotateY(${rotationAngleRef.current}deg)` });
    };

    useAnimationFrame(animateCallback);

    return (
        <section className={componentStyle.popupBg}>
            <section className={componentStyle.hobbiesPopup}>
                <article
                    style={style}
                    className={componentStyle.hobbiesCarousel}
                >
                    {myHobbiesElements}
                </article>
            </section>
            <button
                className={componentStyle.popupNavClose}
                onClick={() => props.toggleHobbiesHandle()}
            >
                x
            </button>
        </section>
    );
};

export default HobbiesCarousel;
