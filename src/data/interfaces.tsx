import { ReactNode } from "react";

export interface charactersInterface {
    icon: string;
    alt: string;
    name: string;
}

export interface languagesInterface {
    icon: string;
    alt: string;
    name: string;
}

export interface contactInterface {
    icon: string;
    alt: string;
    name: string;
    link: string;
    target?: string;
}

export interface navMenuInterface {
    name: string;
    id: string;
    target: string;
    icon: string;
}

export interface myWorkInterface {
    name: string;
    imgSrc: string;
    isPlay: boolean;
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
}

export interface PopupDataProviderProps {
    children: ReactNode;
}
