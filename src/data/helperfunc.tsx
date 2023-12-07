export const scrollTo: (el: string) => void = (el) => {
    const element: HTMLElement | null = document.getElementById(`${el}`); //get target from navMenuData
    if (element)
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
};

export const fullScreenIMG = (e: EventTarget) => {
    const fullScreen: HTMLElement | null =
        document.querySelector(`#fullScreenIMG`);
    const target = e as HTMLElement;
    if (target.className && target.className === fullScreen?.className) {
        fullScreen.style.display = "none";
    } else {
        const src = target.getAttribute("src");
        if (src) {
            if (fullScreen) {
                fullScreen.style.backgroundImage = `url("${src}")`;
                fullScreen.style.display = "block";
            }
        }
    }
};

export const findAllNeighboringImages = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
): { allImages: HTMLImageElement[]; clickedIndex: number } => {
    const clickedImage = event.target as HTMLImageElement;

    const allImages = Array.from(
        clickedImage.parentElement!.getElementsByTagName("img")
    );
    const clickedIndex = allImages.indexOf(clickedImage);

    // const neighboringImages: string[] = [];
    // if (clickedIndex > 0) {
    //     neighboringImages.push(allImages[clickedIndex - 1].src);
    // }
    // neighboringImages.push(clickedImage.src);
    // if (clickedIndex < allImages.length - 1) {
    //     neighboringImages.push(allImages[clickedIndex + 1].src);
    // }
    return { allImages, clickedIndex };
};
