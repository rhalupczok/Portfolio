export interface charactersInterface {
    imgSrc: string;
    alt: string;
    className: string;
    name: string;
}

export interface languagesInterface {
    imgSrc: string;
    alt: string;
    className: string;
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
