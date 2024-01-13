import { useEffect, FC, useState } from "react";
import componentStyle from "../styles/partials/fullScreenImage.module.scss";
// import usePopup from "../Hooks/usePopup";

interface Props {
    allImages: HTMLImageElement[];
    clickedIndex: number;
    closeFullScreenIMGHandle: () => void;
}

const FullScreenImage: FC<Props> = ({
    allImages,
    clickedIndex,
    closeFullScreenIMGHandle,
}) => {
    const [index, setIndex] = useState(clickedIndex);
    useEffect(() => {
        const body = document.querySelector("body");
        body?.classList.add(componentStyle.stopScrolling);
        return () => {
            body?.classList.remove(componentStyle.stopScrolling);
        };
    }, []);

    const swipeLeft = () => {
        if (index > 0) setIndex(index - 1);
    };
    const swipeRight = () => {
        if (index < allImages.length - 1) setIndex(index + 1);
    };

    return (
        <div className={componentStyle.popupBg}>
            <div className={componentStyle.imgGallery}>
                <img
                    src={allImages[index]?.src}
                    alt="full screen gallery item"
                ></img>
                <div className={componentStyle.popupNav}>
                    {index > 0 && (
                        <button
                            className={componentStyle.popupNavPrev}
                            onClick={swipeLeft}
                        >
                            <i className="fa-solid fa-caret-left"></i>
                        </button>
                    )}
                    {index < allImages.length - 1 && (
                        <button
                            className={componentStyle.popupNavNext}
                            onClick={swipeRight}
                        >
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                    )}
                    <button
                        className={componentStyle.popupNavClose}
                        onClick={closeFullScreenIMGHandle}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullScreenImage;
