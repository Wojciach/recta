import "./haGallery.scss";

// import photo1 from "./photos/annie-gray-WEWTGkPUVT0-unsplash_edit.jpg";
// import photo2 from "./photos/avel-chuklanov-a0BEHFMKqTE-unsplash.jpg";
// import photo3 from "./photos/milivoj-kuhar-Te48TPzdcU8-unsplash_edit.jpg";

const HaGallery = () => {

    function imgSwap(e) {

        for (const element of e.target.parentNode.childNodes) {
            element.style.zIndex = 0;
        } 
        e.target.style.zIndex = 1;  
    }

    return(
        <section id="haGallery">

            <div>

                <div id="ph1" onClick={imgSwap}></div>
                <div id="ph2" onClick={imgSwap}></div>
                <div id="ph3" onClick={imgSwap}></div>

            </div>

        </section>
    )
}

export default HaGallery;