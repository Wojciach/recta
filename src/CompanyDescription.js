import { Link } from "react-router-dom";
import "./CompanyDescription.scss";

import HaGallery from "./haGallery";
import React, { useRef } from 'react';

import { ReactComponent as ContactIcon } from "./svg/Project_icon.svg";
import { ReactComponent as ContactBacgroundSVG } from "./svg/RECTA_logo_granat.svg";

function scrollToElement(ref) {
    ref.scrollIntoView({
      behavior: 'smooth'
    });
  }
  

const CompanyDescription = () => {

    console.log("COMPANY DESCRIPTION COMPONENT RE-RENDERED!!!!");
    

    return(
        <section id="companyDescription">

            <h2>Firma budowlana <b>Recta</b></h2>
            <h2>dlaczego warto nam zaufać</h2>

            <div id="gOpis">
                <div id="opis1" className="sec">
                    <div id="unsortedGallery">
                        <HaGallery />
                    </div>
                    <div>
                        <p>
                            Jesteśmy doświadczoną i rzetelną firmą budowlaną, która 
                            oferuje kompleksowe usługi budowlane oraz remontowe 
                            dla klientów indywidualnych i biznesowych. Zawsze 
                            stawiamy na jakość naszej pracy i solidność, dotrzymując 
                            terminów i umów zawartych z klientami. Nasze usługi 
                            obejmują m.in. budowę domów, budowę hal 
                            przemysłowych, remonty mieszkań i domów, wykonanie 
                            instalacji sanitarnych, elektrycznych oraz gazowych
                        </p>
                    </div>
                </div>
                <div id="opis2" className="sec">
                
                    <div>
                        <p> Nasza firma zatrudnia wykwalifikowanych pracowników, 
                            którzy posiadają odpowiednie kwalifikacje i 
                            doświadczenie w branży budowlanej, aby zapewnić 
                            najwyższą jakość usług dla naszych klientów.
                        </p>
                        <p>
                            Oferujemy naszym klientom dostępność i szybką reakcję 
                            na ich potrzeby, a także dobrą komunikację w celu 
                            zapewnienia pełnej satysfakcji. Stawiamy na najwyższą 
                            jakość materiałów i wykonanie prac zgodnie z 
                            najnowszymi standardami, aby zapewnić trwałość i 
                            niezawodność naszych projektów.
                        </p>
                        <p>
                            Zapraszamy do skorzystania z naszych usług 
                            budowlanych i remontowych.
                        </p>
                    </div>

                    <div id="contactLink">
                        <div className="contactBacground"> <ContactBacgroundSVG /> </div>
                        <div className="contactIcon"> <ContactIcon /> </div>
                        <button onClick={() => scrollToElement(document.getElementById("contactForm"))}>Skontaktuj się</button> 
                        <p>
                            Skontaktuj się z nami, aby poznać więcej szczegółów 
                            lub uzyskać bezpłatną wycenę.
                        </p>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default CompanyDescription;