import { useEffect } from "react";
import "./SerDetails.scss";
import { icons, serTit, serDesc, serBullets, serHash } from "./servicesData";

const SerDetails = () => {

    console.log("SER_DETAILS COMPONENT RE-RENDERED!!!!");
    console.log("window location: " + window.location.hash);

    useEffect(() => {
        function scrollToId() {
            const element = document.querySelector(window.location.hash || "#sevices");
            if (element) {
             // window.scrollTo(0, element.offsetTop + element.offsetHeight);
              window.scrollTo({
                top: element.offsetTop + window.innerHeight/2,
                behavior: 'smooth'
              });
            }
          }
          scrollToId();
    }, []);
    return (
        <section id="serDetails">

            <div id="content">
                <h2>Nasza Oferta <br/>i jak możemy pomóc</h2>
          
                {icons.map( (icon, index) => {

                   const Icon = icons[index];
                   const bullets = serBullets[index].map((item) => "<li>" + item + "</li>").join("<br/>");
                   return (
                    <article id={serHash[index]} className="innerArticle">

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
}

export default SerDetails;