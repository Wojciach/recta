import { useEffect, useState, memo, useRef } from "react";
import "./SerDetails.scss";
import { icons, serTit, serDesc, serBullets, serHash } from "./servicesData";

const SerDetails = memo(({selectedHash}) => {
    const refs = useRef([]);
    const sh = useRef(selectedHash);
    console.log("SER_DETAILS COMPONENT RE-RENDERED!!!!");
    //console.log("window location: " + window.location.hash);
  //  const [hash, setHash] = useState(window.location.hash);
    
   /* useEffect(() => {
        const scrollToRef = () => {
            if (refs.current[sh.current]) {
              refs.current[sh.current].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center"
              });
            }
          };
          scrollToRef();
      console.log("USE EFFECT RANNED!!!!" + sh.current);
    }, [sh.current]); */
    return (
        <section id="serDetails">

            <div id="content">
                <h2>Nasza Oferta <br/>i jak możemy pomóc</h2>
          
                {icons.map( (icon, index) => {

                   const Icon = icons[index];
                   const bullets = serBullets[index].map((item) => "<li>" + item + "</li>").join("<br/>");
                   return (
                    <article id={serHash[index]} className="innerArticle" ref={(el) => (refs.current[index] = el)}>

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