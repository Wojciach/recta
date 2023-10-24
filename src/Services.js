import React  from 'react';
import { Link } from "react-router-dom";
import "./Services.scss";
import oferta from "./oferta.js";
import {ReactComponent as Decor } from "./svg/dor/btnR.svg";
import {icons, serTit, serDesc, serHash} from "./servicesData";

function Services({refArr}) {

  //console.log("SERVICES COMPONENT RE-RENDERED!!!!");

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