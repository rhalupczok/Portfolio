import React, { ReactElement, useEffect, useRef, useState } from "react";
import { myHobbiesData } from "../data/myHobbiesData";

interface Props {
    setDisplayHandle: (componentName: string) => void;
}

const HobbiesCarousel: React.FC<Props> = ({ setDisplayHandle }) => {
    const myHobbiesElements: ReactElement[] = myHobbiesData.map((hobby) => (
        <div key={hobby.name} className="hobbies-carousel-item">
            <img
                src={require(`../images/${hobby.imgSrc}`)}
                alt="hobby"
                className="hobby-img"
            />
            <p>{hobby.name}</p>
        </div>
    ));

    //carousel content:
    const items: Element[] = Array.from(
        document.querySelectorAll(".hobbies-carousel-item")
    );

    //start effect - each hobby element comes-in separately
    items.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add(`it${index + 1}`);
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
        <div className="popupBg">
            <div className="hobbies-popup">
                <div style={style} className="hobbies-carousel">
                    {myHobbiesElements}
                </div>
            </div>
            <button
                className="popup--nav--close"
                onClick={() => setDisplayHandle("")}
            >
                x
            </button>
        </div>
    );
};

export default HobbiesCarousel;
