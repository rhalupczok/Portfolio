export const scrollTo: (el: string) => void = (el) => {
    const element: HTMLElement | null = document.getElementById(`${el}`); //get target from navMenuData
    if (element)
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
};
