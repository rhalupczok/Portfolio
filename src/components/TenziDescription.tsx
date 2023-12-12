import { FC, useState } from "react";
import parse from "html-react-parser";
import ThemeToggle from "./ThemeToggle";
import FullScreenImage from "./FullScreenImage";
import componentStyle from "../styles/partials/tenziDescription.module.scss";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { findAllNeighboringImages } from "../data/helperfunc";
import { appShotsIMG } from "../data/tenziDescData";
import { techSectionData } from "../data/tenziDescData";

const TenziDescription: FC = () => {
    const navigate = useNavigate();
    const [fullScreenIMGArr, setFullScreenIMGArr] = useState<{
        allImages: HTMLImageElement[];
        clickedIndex: number;
    }>({
        allImages: [],
        clickedIndex: 0,
    });

    const closeFullScreenIMG: () => void = () => {
        setFullScreenIMGArr({
            allImages: [],
            clickedIndex: 0,
        });
    };

    const appShots = appShotsIMG.map((img) => {
        return (
            <img
                src={require(`../images/tenziDescription/${img}`)}
                alt="code"
                onClick={(e) =>
                    setFullScreenIMGArr(findAllNeighboringImages(e))
                }
            />
        );
    });

    const techSectionArr = techSectionData.map((element) => {
        return (
            <div key={element.title} className={componentStyle.techSection}>
                <h4>{element.title}</h4>
                <p>{parse(element.description)}</p>
                <div className={componentStyle.techSectionIMG}>
                    {element.img.map((img) => {
                        return (
                            <img
                                src={require(`../images/tenziDescription/${img}`)}
                                alt="code"
                                onClick={(e) =>
                                    setFullScreenIMGArr(
                                        findAllNeighboringImages(e)
                                    )
                                }
                            />
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <div className={componentStyle.mainSection}>
            {fullScreenIMGArr.allImages[0] && (
                <FullScreenImage
                    allImages={fullScreenIMGArr.allImages}
                    clickedIndex={fullScreenIMGArr.clickedIndex}
                    closeFullScreenIMGHandle={closeFullScreenIMG}
                />
            )}

            <div className={componentStyle.header}>
                <span
                    className={componentStyle.backBtn}
                    onClick={() => navigate(-1)}
                >
                    {`<< `}BACK
                </span>
                <h5>TENZI GAME</h5>
                <ThemeToggle />
            </div>
            <div className={componentStyle.navMenuMargin}></div>

            <div className={componentStyle.appShotsContainer}>
                <p>
                    Tenzi is a app based on simply family game. The goal is to
                    set all dice the same in the shortest possible time.
                    <br />
                    <b>
                        <i>A few shots from app:</i>
                    </b>
                </p>
                {appShots}
            </div>
            <div className={componentStyle.globalDiagram}>
                <h2>Application diagram</h2>
                <p>Simplified diagram of the application's operation.</p>
                <img
                    src={require(`../images/tenziDescription/mainDiagram.png`)}
                    alt="Application flow diagram"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
            </div>
            <h2>FrontEnd</h2>
            <section className={componentStyle.branchSection}>
                {techSectionArr.slice(0, 7)}
            </section>
            <section className={componentStyle.globalDiagram}>
                <h2>Server</h2>
                <p>Simplified diagram of server's operation</p>
                <img
                    src={require(`../images/tenziDescription/serverDiagram.png`)}
                    alt="Application flow diagram"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
            </section>
            <section className={componentStyle.branchSection}>
                {techSectionArr.slice(7, 11)}
            </section>
            <section className={componentStyle.globalDiagram}>
                <h2>REFRESH TOKEN ROTATION</h2>
                <p>
                    Each request demanding user authentication contains an
                    <b>AccessToken</b> in the header, obtained after a
                    successful login. If the AccessToken expires, the server
                    responds with "Access Forbidden." At this point, a
                    background request loop initiates the
                    <b>Refresh Token Rotation</b> process. <br /> All operations
                    occur without user awareness.
                </p>
                <img
                    src={require(`../images/tenziDescription/refreshDiagram.png`)}
                    alt="Application flow diagram"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
            </section>
            <section className={componentStyle.branchSection}>
                {techSectionArr.slice(11, 15)}
            </section>
            <ScrollRestoration />
        </div>
    );
};
export default TenziDescription;
