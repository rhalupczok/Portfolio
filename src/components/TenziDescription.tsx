import { FC, useState, ReactElement } from "react";
import parse from "html-react-parser";
import FullScreenImage from "./FullScreenImage";
import componentStyle from "../styles/partials/tenziDescription.module.scss";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { findAllNeighboringImages } from "../data/helperfunc";
import {
    appShotsIMG,
    frontEndSectionData,
    serverSectionData,
    JWTSectionData,
} from "../data/tenziDescData";
import { techSectionDataInterface } from "../data/interfaces";

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

    const techSectionArr: (
        techSectionData: techSectionDataInterface[]
    ) => ReactElement[] = (techSectionData) => {
        return techSectionData.map((element, index) => {
            return (
                <div
                    key={element.title}
                    className={`${componentStyle.techSection}`}
                >
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
    };

    return (
        <main className={componentStyle.mainSection}>
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
            </div>
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
                <div className={componentStyle.h1Wrapper}>
                    <h1>Application diagram</h1>
                </div>
                <p>Simplified diagram of the application's operation.</p>
                <img
                    src={require(`../images/tenziDescription/mainDiagram.png`)}
                    alt="Application flow diagram"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
            </div>
            <div className={componentStyle.h1Wrapper}>
                <h1>FrontEnd</h1>
            </div>
            <section className={`${componentStyle.branchSection}`}>
                {techSectionArr(frontEndSectionData)}
            </section>
            <section className={componentStyle.globalDiagram}>
                <div className={componentStyle.h1Wrapper}>
                    <h1>Server</h1>
                </div>
                <p>Simplified diagram of server's operation</p>
                <img
                    src={require(`../images/tenziDescription/serverDiagram.png`)}
                    alt="Application flow diagram"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
            </section>
            <section className={`${componentStyle.branchSection}`}>
                {techSectionArr(serverSectionData)}
            </section>
            <section className={componentStyle.globalDiagram}>
                <div className={componentStyle.h1Wrapper}>
                    <h1>REFRESH TOKEN ROTATION</h1>
                </div>
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
            <section className={`${componentStyle.branchSection}`}>
                {techSectionArr(JWTSectionData)}
            </section>
            <ScrollRestoration />
        </main>
    );
};
export default TenziDescription;
