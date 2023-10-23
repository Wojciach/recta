const scrollTo = (text) => {
    const source = document.getElementById("serDetails");
    const elements = source.querySelectorAll("*");
    elements.forEach(element => {
        if (element.textContent.toLocaleLowerCase() === text.toLocaleLowerCase()) {
            element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            return;
        }
    });
}

export default scrollTo;