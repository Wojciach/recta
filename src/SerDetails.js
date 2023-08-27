import { useEffect, useState, memo, useRef } from "react";
import "./SerDetails.scss";
import { icons, serTit, serDesc, serBullets, serHash } from "./servicesData";
import {scrollToTarget} from "./navData.js";

const SerDetails = memo(({refArr}) => {

    console.log("SER_DETAILS COMPONENT RE-RENDERED!!!!");
   // console.log(refArr);

    return (
        <section id="serDetails">

            <div id="content">
                <h2>Nasza Oferta <br/>i jak możemy pomóc</h2>
          
                {icons.map( (icon, index) => {

                   const Icon = icons[index];
                   const bullets = serBullets[index].map((item) => "<li>" + item + "</li>").join("<br/>");
                   return (
                    <article id={serHash[index]} className="innerArticle" ref={(re) => {refArr.current[index] = re}}>

                        <div className="iconColumn">
                             <Icon key={index} /> 
                        </div>

                        <div className="textColumn">
                            <h4>{serTit[index]}</h4>
                            <p>{serDesc[index]}</p>
                            <ul dangerouslySetInnerHTML={{ __html: bullets }}></ul>
                        </div>

                    </article>
                   
                   )

                }

                )}
                
            </div>
          
        </section>
    )
});

export default SerDetails;