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
            <header className={componentStyle.aboutMe__header}>
                <h1>About me</h1>
            </header>
            <aside className={componentStyle.aboutMe__picCharContainer}>
                <img
                    src={require(`../images/aboutMe/profile_picture.png`)}
                    alt="profile"
                    className={componentStyle.aboutMe__picture}
                />
                <section className={componentStyle.aboutMe__characters}>
                    {characterElements}
                </section>
            </aside>
            <p className={componentStyle.aboutMe__paragraph}>
                Hi! My name is
                <span className={componentStyle.txtHighlightNoHover}>
                    {" "}
                    Radoslaw
                </span>
                . I reside in the Silesian Voivodeship in Poland. I graduated
                from the Silesian University of Technology and over the past 7
                years, I have been working as a{" "}
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
                    <u>Robotics Programmer</u>.
                </span>
            </p>
            <p className={componentStyle.aboutMe__paragraph}>
                I have always enjoyed programming and various challenges
                requiring logical thinking have always been within my scope of
                interest.
            </p>
            <p className={componentStyle.aboutMe__paragraph}>
                Currently, most of my time is dedicated to expanding my
                programming knowledge, as I prepare to transition into a role
                that aligns more closely with my passion.
            </p>
            <p className={componentStyle.aboutMe__paragraph}>
                My advantage is logical thinking and ability to solving various
                issues on my own. I learning fast and I have mind open for new
                challenges.
            </p>
            <p className={componentStyle.aboutMe__paragraph}>
                {" "}
                Your consideration is greatly appreciated, and I look forward to
                the possibility of working with you and promise to bring my best
                to the table.
            </p>
            <p className={componentStyle.aboutMe__paragraph}>
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
            {displayHobbies && (
                <HobbiesCarousel toggleHobbiesHandle={toggleHobbies} />
            )}
        </section>
    );
};
export default AboutMe;
