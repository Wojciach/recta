import "./Opinions.scss";
import icon from "./svg/dor/Recta_logo_komentarze.svg";



const Opinions = () => {

    console.log("OPINIONS COMPONENT RE-RENDERED!!!!");

    return (
        <section id="opinions">

            <div className="colapseRow">

                <div className="qLogo">
                    <div><img src={icon}/></div>
                    <div>Co mówią o Nas Nasi klienci?</div>
                </div>

                <div>
                    <p className="opinion">
                        "Firma Budowlana Recta wykonała dla nas dom 
                        jednorodzinny. Wszystkie prace wykonana fachowo i 
                        terminowo. Podczas odbioru prac nie stwierdzono 
                        błędów w sztuce. Na podkreślenie szcególnie zasługuje 
                        perfekcyjna znajomość prac wykończeniowych oraz 
                        pełna dyspozycyjność.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Opinions;