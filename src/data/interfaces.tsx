import { ReactNode } from "react";

export interface charactersInterface {
    imgSrc: string;
    alt: string;
    name: string;
}

export interface languagesInterface {
    imgSrc: string;
    alt: string;
    name: string;
    inprogress?: true;
}

export interface contactInterface {
    imgSrc: string;
    alt: string;
    name: string;
    link: string;
    target?: string;
}

export interface navMenuInterface {
    name: string;
    id: string;
    target: string;
}

export interface myWorkInterface {
    name: string;
    imgSrc: string;
    description: string;
    isPlay: boolean;
    isOpen?: boolean;
    noLearnMore?: boolean;
    href: string;
    technologies: string[];
}

export interface popupDataInterface {
    name: string;
    isFinished: boolean;
    content: {
        img: string;
        text: string[];
        href?: { link: string; desc: string }[];
    }[];
}

export interface myHobbiesInterface {
    name: string;
    imgSrc: string;
}
[];

export interface myhobbiesProps {
    toggleHobbiesHandle: () => void;
}

export interface PopupContextProps {
    popup: {
        content: string;
        isShow: boolean;
    };
    setPopup: React.Dispatch<
        React.SetStateAction<{
            content: string;
            isShow: boolean;
        }>
    >;
    dayMode: boolean;
    setDayMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupDataProviderProps {
    children: ReactNode;
}
