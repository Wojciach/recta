import React  from 'react';
import { Link } from "react-router-dom";
import "./Services.scss";
import ofertaPL from "./functionsAndData/ofertaPL.js";
import ofertaEN from "./functionsAndData/ofertaEN.js";
import icons from "./functionsAndData/servicesIcons";
import { serTitPL, serDescPL, serHashPL } from "./functionsAndData/servicesDataPL";
import { serTitEN, serDescEN, serHashEN } from "./functionsAndData/servicesDataEN";
import {ReactComponent as Decor } from "./svg/dor/btnR.svg";

function Services({refArr}) {
//console.log("SERVICES COMPONENT RE-RENDERED!!!!");

  const lang = document.documentElement.lang;

  const oferta = (lang === "pl") ? ofertaPL : ofertaEN;
  const serTit = (lang === "pl") ? serTitPL : serTitEN;
  const serDesc = (lang === "pl") ? serDescPL : serDescEN;
  const serHash = (lang === "pl") ? serHashPL : serHashEN;

  function scrollToRef(index) {
      setTimeout(() => {
      const articleRef = refArr.current.find((ref) => ref.id === serHash[index]);
      if (articleRef) {
        articleRef.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }

    return (
      <section id="services">
        <div className="sBackground"></div>
        <div id="servicesList">
          {oferta.map((item, index)=>{
            const Icon = icons[index];
              return (
                <Link to={`/services/#${serHash[index]}`} key={index} onClick={()=>{scrollToRef(index)}}>
                  <div className='serviceItem'>
                    <div className='serviceIcon'> <Icon /> </div>
                    <h5> {serTit[index]}  </h5>
                    <p>{serDesc[index]}</p>
                    <div className='decor'> <Decor /> </div>
                  </div>
                </Link>
              )
          })}
        </div>
      </section>
    );
  }
  
export default Services;
