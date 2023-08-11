import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Services.scss";
import oferta from "./oferta.js";

import {ReactComponent as Decor } from "./svg/dor/btnR.svg";

import {icons, serTit, serDesc, serHash} from "./servicesData";
import  {items} from "./navData.js";

function Services() {

  console.log("SERVICES COMPONENT RE-RENDERED!!!!");

  /* <h5> {serTit[index].split(" ")[0]} <br/> {serTit[index].split(" ").slice(1).map((item) => " " + item)}  </h5> */ 

    return (
      <section id="services">
        <div className="sBackground"></div>
        
        <div id="servicesList">
          
              {oferta.map((item, index)=>{

                const Icon = icons[index];

                  return (
                    <Link to={`/services/#${serHash[index]}`}>
                      <div key={index} className='serviceItem'>
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
  