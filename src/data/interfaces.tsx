export interface aboutMeProps {
    setPopupHandle: (content: string, show: boolean) => void;
    setDisplayHandle: (componentName: string) => void;
}

export interface myWorkProps {
    setPopupHandle: (content: string, show: boolean) => void;
}

export interface navMenuProps {
    setDisplayHandle: (componentName: string) => void;
}

export interface introProps {
    setDisplayHandle: (componentName: string) => void;
}

export interface popupProps {
    setPopupHandle: (content: string, show: boolean) => void;
    popupContent: { content: string; isShow: boolean };
}

export interface charactersInterface {
    imgSrc: string;
    alt: string;
    name: string;
}

export interface languagesInterface {
    imgSrc: string;
    alt: string;
    name: string;
}

export interface contactInterface {
    imgSrc: string;
    alt: string;
    className: string;
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
