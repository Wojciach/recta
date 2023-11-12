import "./CompanyDescription.scss";
import HaGallery from "./haGallery";
import React from 'react';
import { ReactComponent as ContactIcon } from "./svg/Project_icon.svg";
import { ReactComponent as ContactBacgroundSVG } from "./svg/RECTA_logo_granat.svg";
//import { doc } from "prettier";

function scrollToElement(ref) {
    ref.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
    const CompanyDescription = () => {
    //console.log("COMPANY DESCRIPTION COMPONENT RE-RENDERED!!!!");
    const lang = document.documentElement.lang;
    
    return(
        <section id="companyDescription">
            {(lang === "pl") && (<h2>Firma budowlana <b>Recta</b></h2>)}
            {(lang === "en") && (<h2>Construction company <b>Recta</b></h2>)}

            {(lang === "pl") && (<h2>dlaczego warto nam zaufać</h2>)}
            {(lang === "en") && (<h2>Why you should trust us</h2>)}
            <div id="gOpis">
                <div id="opis1" className="sec">
                    <div id="unsortedGallery">
                        <HaGallery />
                    </div>
                    <div>
                    {(lang === "pl") && (<p>
                            Jesteśmy doświadczoną i rzetelną firmą budowlaną, która 
                            oferuje kompleksowe usługi budowlane oraz remontowe 
                            dla klientów indywidualnych i biznesowych. Zawsze 
                            stawiamy na jakość naszej pracy i solidność, dotrzymując 
                            terminów i umów zawartych z klientami. Nasze usługi 
                            obejmują m.in. budowę domów, budowę hal 
                            przemysłowych, remonty mieszkań i domów, wykonanie 
                            instalacji sanitarnych, elektrycznych oraz gazowych
                        </p>)}
                        {(lang === "en") && (<p>
                            We are an experienced and reputable construction company that offers comprehensive construction and renovation services to individual and business clients. We always prioritize the quality of our work and reliability, adhering to deadlines and agreements made with our clients. Our services include, among others, building houses, constructing industrial halls, renovations of apartments and houses, and the installation of plumbing, electrical, and gas systems.
                        </p>)}
                    </div>
                </div>
                <div id="opis2" className="sec">
                    {(lang === "pl") && (
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
                    </div>)}
                    {(lang === "en") && (
                    <div>
                        <p> 
                            Our company employs qualified workers who have the necessary qualifications and experience in the construction industry to ensure the highest quality of services for our clients.
                        </p>
                        <p>
                            We offer our clients availability and a quick response to their needs, as well as good communication to ensure complete satisfaction. We prioritize the highest quality of materials and work execution according to the latest standards to ensure the durability and reliability of our projects.
                        </p>
                        <p>
                            We invite you to use our construction and renovation services.
                        </p>
                    </div>)}
                    <div id="contactLink">
                        <div className="contactBacground"> <ContactBacgroundSVG /> </div>
                        <div className="contactIcon"> <ContactIcon /> </div>
                        <button onClick={() => scrollToElement(document.getElementById("contactForm"))}>
                            {(lang === "pl") && ('Skontaktuj się')}
                            {(lang === "en") && ('Contact us')}
                        </button> 
                        {(lang === "pl") && (
                            <p>
                                Skontaktuj się z nami, aby poznać więcej szczegółów 
                                lub uzyskać bezpłatną wycenę.
                            </p>
                        )}
                        {(lang === "en") && (
                            <p>
                                Contact us to learn more details or to get a free estimate.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyDescription;
