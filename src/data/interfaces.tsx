import { ReactNode } from "react";

//-----------------ABOUT ME

export interface charactersInterface {
    icon: string;
    alt: string;
    name: string;
}

//-----------------SKILLS

export interface languagesInterface {
    icon: string;
    alt: string;
    name: string;
}

//-----------------CONTACT

export interface contactInterface {
    icon: string;
    alt: string;
    name: string;
    link: string;
    target?: string;
}

//-----------------NAVBAR

export interface navMenuInterface {
    name: string;
    id: string;
    target: string;
    icon: string;
}

//-----------------MY WORK

export interface myWorkInterface {
    name: string;
    imgSrc: string;
    isPlay: boolean;
    href?: string;
    repo: string;
    technologies: string[];
    popupData?: {
        img: string;
        text: string[];
        href?: { link: string; desc: string };
    }[];
}

//-----------------POPUP

export interface popupDataInterface {
    img: string;
    text: string[];
    href?: { link: string; desc: string };
}

//-----------------TENZI DESCRIPTION

export interface diagramDataInterface {
    name: string;
    description: string;
    src: string;
}

export interface techSectionDataInterface {
    title: string;
    description: string;
    img: string[];
}

//-----------------CONTACT CARDS

export interface cardDataInterface {
    name: string;
    link: string;
}

//-----------------MY HOBBIES

export interface myHobbiesInterface {
    name: string;
    imgSrc: string;
}

export interface myhobbiesProps {
    toggleHobbiesHandle: () => void;
}
