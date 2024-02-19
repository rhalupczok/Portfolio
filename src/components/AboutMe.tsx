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
        <figure key={character.name} className={componentStyle.character}>
            <i
                className={`${componentStyle.character__icon} ${character.icon} fa-2x`}
            ></i>
            <p className={`${componentStyle.character__name}`}>
                {character.name}
            </p>
        </figure>
    ));

    return (
        <section id="about" className={componentStyle.aboutMe}>
            <aside className={componentStyle.aboutMe__picCharContainer}>
                <img
                    src={require(`../images/aboutMe/profile_picture.png`)}
                    alt="profile"
                    className={componentStyle.aboutMe__picture}
                />
                <p className={componentStyle.aboutMe__paragraph}>
                    <b>Radosław Halupczok</b>
                </p>
                <section className={componentStyle.aboutMe__characters}>
                    {characterElements}
                </section>
            </aside>
            <article>
                <header className={componentStyle.aboutMe__header}>
                    <h1>About me</h1>
                </header>
                <ul>
                    <li className={componentStyle.aboutMe__listItem}>
                        Silesian University of Technology graduate
                    </li>
                    <li className={componentStyle.aboutMe__listItem}>
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
                            <u>Robotics Programmer</u>
                        </span>{" "}
                        for 7 years
                    </li>
                    <li className={componentStyle.aboutMe__listItem}>
                        Lifelong passion for computer technology and coding
                    </li>
                    <li className={componentStyle.aboutMe__listItem}>
                        Strong problem-solving skills, especialy in logical
                        thinking
                    </li>
                    <li className={componentStyle.aboutMe__listItem}>
                        <span
                            id="my-hobbies-popup-btn"
                            className={componentStyle.txtHighlight}
                            onClick={() => setDisplayHobbies(true)}
                        >
                            My hobbies
                        </span>
                    </li>
                </ul>

                <p className={componentStyle.aboutMe__paragraph}>
                    Give me a chance. I guarantee to be a valuable player
                </p>
            </article>

            {displayHobbies && (
                <HobbiesCarousel toggleHobbiesHandle={toggleHobbies} />
            )}
        </section>
    );
};
export default AboutMe;
