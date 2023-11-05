import "./Opinions.scss";
import icon from "./svg/dor/Recta_logo_komentarze.svg";

const Opinions = () => {
    //console.log("OPINIONS COMPONENT RE-RENDERED!!!!");

    const lang = document.documentElement.lang;

    return (
        <section id="opinions">
            <div className="colapseRow">
                <div className="qLogo">
                    <div><img src={icon}/></div>
                    {(lang === "pl") && (<div>Co mówią o nas nasi klienci?</div>)}
                    {(lang === "en") && (<div>What do our customers say about us?</div>)}
                </div>
                {(lang === "pl") && (
                    <div>
                        <p className="opinion">
                            "Firma Budowlana Recta wykonała dla nas dom 
                            jednorodzinny. Wszystkie prace wykonana fachowo i 
                            terminowo. Podczas odbioru prac nie stwierdzono 
                            błędów w sztuce. Na podkreślenie szcególnie zasługuje 
                            perfekcyjna znajomość prac wykończeniowych oraz 
                            pełna dyspozycyjność.
                        </p>
                    </div>)}
                {(lang === "en") && (
                    <div>
                        <p className="opinion">
                            The Recta Construction Company built a single-family home for us. All the work was done professionally and on schedule. During the project's inspection, no errors in craftsmanship were found. It's worth emphasizing their perfect knowledge of finishing work and their full availability.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Opinions;