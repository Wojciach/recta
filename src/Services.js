import React, { useRef, useEffect } from 'react';

import "./Services.scss";
import oferta from "./oferta.js";

import { ReactComponent as Icon1 } from "./svg/ChatkaPuchatka_icon.svg";
import { ReactComponent as Icon2 } from "./svg/dor/wykonczenie_icon.svg";
import { ReactComponent as Icon3 } from "./svg/dor/nadzor_icon.svg";
import { ReactComponent as Icon4 } from "./svg/dor/systemy_icon.svg";
import { ReactComponent as Icon5 } from "./svg/ChatkaPuchatka_icon.svg";




function Services() {

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5] ;

  const serTit = [
    "Budowa<br> Domów",
    "Prace<br> Wykończeniowe",
    "Nadzór<br> Budowlany",
    "Instalacje<br> i Systemy",
    "Modernizacja<br> Energetyczna",

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

                const Icon = icons[index];

                return(
                  <div key={index} className='serviceItem'>
                    <div className='serviceIcon'> <Icon /> </div>
                    <h5 dangerouslySetInnerHTML={{__html: serTit[index]}}></h5>
                    <p>{serDesc[index]}</p>
                  </div>
                  )
              })}

        </div>
       
      </section>
    );
  }
  
  export default Services;
  