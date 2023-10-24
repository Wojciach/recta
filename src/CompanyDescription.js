import "./CompanyDescription.scss";
import HaGallery from "./haGallery";
import React from 'react';
import { ReactComponent as ContactIcon } from "./svg/Project_icon.svg";
import { ReactComponent as ContactBacgroundSVG } from "./svg/RECTA_logo_granat.svg";

function scrollToElement(ref) {
    ref.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
    const CompanyDescription = () => {

    //console.log("COMPANY DESCRIPTION COMPONENT RE-RENDERED!!!!");
    
    return(
        <section id="companyDescription">
            <h2>Construction company <b>Recta</b></h2>
            <h2>why you should trust us</h2>
            <div id="gOpis">
                <div id="opis1" className="sec">
                    <div id="unsortedGallery">
                        <HaGallery />
                    </div>
                    <div>
                        <p>
                            We are an experienced and reputable construction company that offers comprehensive construction and renovation services to individual and business clients. We always prioritize the quality of our work and reliability, adhering to deadlines and agreements made with our clients. Our services include, among others, building houses, constructing industrial halls, renovations of apartments and houses, and the installation of plumbing, electrical, and gas systems.
                        </p>
                    </div>
                </div>
                <div id="opis2" className="sec">
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
                    </div>
                    <div id="contactLink">
                        <div className="contactBacground"> <ContactBacgroundSVG /> </div>
                        <div className="contactIcon"> <ContactIcon /> </div>
                        <button onClick={() => scrollToElement(document.getElementById("contactForm"))}>Contact us</button> 
                        <p>
                            Contact us to learn more details or to get a free estimate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyDescription;