import "./Opinions.scss";
import icon from "./svg/dor/Recta_logo_komentarze.svg";

const Opinions = () => {

    //console.log("OPINIONS COMPONENT RE-RENDERED!!!!");

    return (
        <section id="opinions">
            <div className="colapseRow">
                <div className="qLogo">
                    <div><img src={icon}/></div>
                    <div>What do our customers say about us?</div>
                </div>
                <div>
                    <p className="opinion">
                    The Recta Construction Company built a single-family home for us. All the work was done professionally and on schedule. During the project's inspection, no errors in craftsmanship were found. It's worth emphasizing their perfect knowledge of finishing work and their full availability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Opinions;