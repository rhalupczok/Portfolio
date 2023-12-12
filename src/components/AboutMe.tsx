import { ReactElement, useState, FC } from "react";
import componentStyle from "../styles/partials/aboutMe.module.scss";
import { characters } from "../data/charactersData";
import HobbiesCarousel from "../components/HobbiesCarousel";
import usePopup from "../Hooks/usePopup";

const AboutMe: FC = () => {
    const { setPopup } = usePopup();
    const [displayHobbies, setDisplayHobbies] = useState<boolean>(false);
    const toggleHobbies: () => void = () => {
        setDisplayHobbies((prevstate) => !prevstate);
    };

    const characterElements: ReactElement[] = characters.map((character) => (
        <div key={character.name}>
            <img
                src={require(`../images/aboutMe/${character.imgSrc}`)}
                alt={character.alt}
                className="characters-img"
            />
            <p>{character.name}</p>
        </div>
    ));

    return (
        <div id="about" className={componentStyle.mainSection}>
            <div className={componentStyle.navMenuMargin}></div>
            <h1>About me</h1>
            <div className={componentStyle.description}>
                <div className={componentStyle.profileImgContainer}>
                    <div className={componentStyle.profileImg}>
                        <img
                            src={require(`../images/aboutMe/profile_picture.png`)}
                            alt="profile"
                        />
                    </div>
                    <div className={componentStyle.characters}>
                        {characterElements}
                    </div>
                </div>
                <p>
                    Hi! My name is
                    <span className={componentStyle.txtHighlightNoHover}>
                        {" "}
                        Radoslaw
                    </span>
                    . I reside in the Silesian Voivodeship in Poland. I
                    graduated from the Silesian University of Technology and
                    over the past 7 years, I have been working as a{" "}
                    <span
                        id="my-job-popup-btn"
                        className={componentStyle.txtHighlight}
                        onClick={() =>
                            setPopup((prevState) => ({
                                ...prevState,
                                content: "myJob",
                                isShow: true,
                            }))
                        }
                    >
                        Robotics Programmer.
                    </span>
                </p>
                <p>
                    I have always enjoyed programming and various challenges
                    requiring logical thinking have always been within my scope
                    of interest.
                </p>
                <p>
                    Currently, most of my time is dedicated to expanding my
                    programming knowledge, as I prepare to transition into a
                    role that aligns more closely with my passion.
                </p>
                <p>
                    I am excited about the opportunity to contribute my skills
                    and promise to bring my best to the table.
                </p>
                <p>
                    {" "}
                    Your consideration is greatly appreciated, and I look
                    forward to the possibility of working with you
                </p>
                <p>
                    Short look on →{" "}
                    <span
                        id="my-hobbies-popup-btn"
                        className={componentStyle.txtHighlight}
                        onClick={() => setDisplayHobbies(true)}
                    >
                        my hobbies
                    </span>
                    .
                </p>
            </div>
            {displayHobbies && (
                <HobbiesCarousel toggleHobbiesHandle={toggleHobbies} />
            )}
        </div>
    );
};
export default AboutMe;
