export const scrollTo: (el: string) => void = (el) => {
    const element: HTMLElement | null = document.getElementById(`${el}`); //get target from navMenuData
    if (element) {
        const vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        );
        element.scrollIntoView({
            behavior: "smooth",
            block:
                document.documentElement.scrollHeight < element.offsetTop + vh
                    ? "end"
                    : "start",
            inline: "nearest",
        });
    }
};

export const fullScreenIMG = (e: EventTarget) => {
    const fullScreen: HTMLElement | null =
        document.querySelector(`#fullScreenIMG`);
    const target = e as HTMLElement;
    if (fullScreen && target.tagName === "I") {
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

    return { allImages, clickedIndex };
};
