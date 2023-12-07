import { FC, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FullScreenImage from "./FullScreenImage";
import componentStyle from "../styles/partials/tenziDescription.module.scss";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { findAllNeighboringImages } from "../data/helperfunc";

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
                <img
                    src={require(`../images/tenziDescription/head_1.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
                <img
                    src={require(`../images/tenziDescription/head_2.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
                <img
                    src={require(`../images/tenziDescription/head_3.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
                <img
                    src={require(`../images/tenziDescription/head_4.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
                <img
                    src={require(`../images/tenziDescription/head_5.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
                <img
                    src={require(`../images/tenziDescription/head_6.png`)}
                    alt="code"
                    onClick={(e) =>
                        setFullScreenIMGArr(findAllNeighboringImages(e))
                    }
                />
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
            <h2>Front End</h2>
            <section className={componentStyle.branchSection}>
                <div className={componentStyle.techSection}>
                    <h4>React router</h4>
                    <p>
                        The application was developed using the{" "}
                        <b>React framework</b> and it features such as{" "}
                        <b>React Routes</b>, including functionalities like{" "}
                        <b>Route, Navigation, Outlet</b>, and <b>links</b>.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/reactrouter.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/reactrouter_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>TypeScript</h4>
                    <p>
                        <b>TypeScript</b> to leverage enhanced type safety and
                        advanced functionality, including <b>interfaces</b> and
                        other features.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/typescript_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/typescript_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>useContext</h4>
                    <p>
                        Employ the <b>useContext</b> hook to access state across
                        components, eliminating the need to pass it through each
                        individual component
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/useContext_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/useContext_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Registration - REGEX</h4>
                    <p>
                        To match character combinations in strings used{" "}
                        <b>Regular expressions</b>
                        <br />
                        Form can be send only when all conditions are met.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/register_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/register_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Authentication</h4>
                    <p>
                        Access to the database, saving, and retrieval of top
                        scores are exclusive privileges granted to registered
                        users. Authentication is achieved through the
                        implementation of the <b>JSON Web Token (JWT)</b>{" "}
                        method. The Login component utilizes <b>JWT decoding</b>
                        , extracting user credentials from the payload passed by
                        the <b>accessToken</b> upon successful login.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/authentication_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/authentication_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Usefull hooks</h4>
                    <p>
                        The useInput hook enhances the user's experience with
                        the application. Even after an accidental page refresh,
                        the "input" field remembers the entered text, and the
                        cursor is automatically placed in that field, allowing
                        the user to continue typing the name without starting
                        from the beginning.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/inputhook_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/inputhook_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>AXIOS</h4>
                    <p>
                        The frontend communicates with the server using{" "}
                        <b>Axios</b> (a promise-based HTTP Client for node.js).
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/axios_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/axios_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
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
                <div className={componentStyle.techSection}>
                    <h4>Registration</h4>
                    <p>
                        Retrieve the username and password, and check for any
                        potential name conflicts. If there are no conflicts,
                        proceed to hash the password using <b>Bcrypt</b> and
                        store the user attributes in the database.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/back_register_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/back_register_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Autenthication</h4>
                    <p>
                        If user data is correct, the controller uses <b>JWT</b>{" "}
                        technology to respond with the <b>accessToken</b> to the
                        client and stores the <b>refreshToken</b> in HTTP
                        secured cookies.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/back_auth_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/back_auth_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Autenthication middleware - routes</h4>
                    <p>
                        Each request requiring user authentication goes through
                        the <b>JWT Verify</b> middleware, which checks the user{" "}
                        <b>accessToken</b> present in the request request
                        header. If the token is absent, or if it is
                        invalid/expired, the middleware denies the request.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/back_jwt_verify_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/back_jwt_verify_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Mongo Data Base</h4>
                    <p>
                        UserData, including credentials and best scores, is
                        stored in a <b>Mongo database</b> within a collection
                        created using the <b>Mongoose Schema Model</b>.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/back_mongo_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/back_mongo_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
            </section>
            <section className={componentStyle.globalDiagram}>
                <h2>REFRESH TOKEN ROTATION</h2>
                <p>
                    Each request demanding user authentication contains an{" "}
                    <b>AccessToken</b> in the header, obtained after a
                    successful login. If the AccessToken expires, the server
                    responds with "Access Forbidden." At this point, a
                    background request loop initiates the{" "}
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
                <div className={componentStyle.techSection}>
                    <h4>Refresh Logic</h4>
                    <p>
                        <b>The RefreshToken controller</b> clears the old token
                        from cookies and the database, providing the user with a
                        new set of tokens (AccessToken in the response and
                        Refresh Token to cookies). <br /> As a safety measure,
                        it checks if the token is compromised. If it is, all
                        tokens associated with the "hacked user" are securely
                        cleared for enhanced security.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/jwt_back_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/jwt_back_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Cookies</h4>
                    <p>
                        The Refresh Token is stored in HTTP Secure cookies,
                        inaccessible at the JavaScript level. These cookies
                        remain valid with each client-server communication, and
                        the application logic use them as needed.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/jwt_cookies_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/jwt_cookies_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>React interceptors</h4>
                    <p>
                        Every client request requiring credentials is dispatched
                        by the <b>useAxiosPrivate</b> function through{" "}
                        <b>React interceptors</b>. The initial request includes
                        the AccessToken in the header. In the event that the
                        token is absent or has expired, and the server responds
                        with a "Forbidden" status, the function initiates the
                        refreshToken procedure. If a new AccessToken is
                        successfully obtained, the function resends the original
                        request without requiring user intervention. The
                        on-the-fly modification of requests is facilitated by
                        React interceptors.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/jwt_react_interceptors_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/jwt_react_interceptors_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
                <div className={componentStyle.techSection}>
                    <h4>Persistlogin</h4>
                    <p>
                        The <b>persistLogin</b> functionality is tied to the
                        chosen option at login. Initially, it checks the
                        localStorage to determine if the user desires to
                        maintain the login session. By utilizing the refresh
                        controller, a new set of tokens is obtained. <br />
                        This approach prevents the need for re-login after each
                        page refresh. <br />
                        The session remains valid for the duration specified by
                        the refresh token cookies.
                    </p>
                    <div className={componentStyle.techSectionIMG}>
                        <img
                            src={require(`../images/tenziDescription/persistLogin_1.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                        <img
                            src={require(`../images/tenziDescription/persistLogin_2.png`)}
                            alt="code"
                            onClick={(e) =>
                                setFullScreenIMGArr(findAllNeighboringImages(e))
                            }
                        />
                    </div>
                </div>
            </section>
            <ScrollRestoration />
        </div>
    );
};
export default TenziDescription;
