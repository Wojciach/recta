import React, { useRef, useEffect } from 'react';

import "./Services.scss";
import oferta from "./oferta.js";
import { ReactComponent as Icon } from "./svg/ChatkaPuchatka_icon.svg"




function Services() {

  const serTit = [
    "Budowa Domów",
    "Prace Wykończeniowe",
    "Nadzór Budowlany",
    "Instalacje i Systemy",
    "Modernizacja Energetyczna",

  ]

  
  const serDesc = [
    "Od decyzji, poprzez projekt, stan surowy, wykończenie i odbiór",
    "Czuwamy by efekt budowy był zgodny z Państwa projektem w najwyższym standardzie",
    "Przygotowujemy dokumentację i zgłaszamy budynek do odbioru.",
    "Instalujemy systemy elektryczne, grzewcze, sieci komputerowe i systemy ochrony",
    "Instalujemy systemy elektryczne, grzewcze, sieci komputerowe i systemy ochrony",
  ]



    return (
      <section id="services">
        <div className="sBackground"></div>
        
        <div id="servicesList">
          
              {oferta.map((item, index)=>{
                return(
                  <div key={index} className='serviceItem'>
                    <div className='serviceIcon'> <Icon /> </div>
                    <h5>{serTit[index]}</h5>
                    <p>{serDesc[index]}</p>
                  </div>
                  )
              })}

        </div>
       
      </section>
    );
  }
  
  export default Services;
  