
import { Link } from "react-router-dom";

export function scrollToId(id) {

      const targetElement = document.querySelector("#" + id);
      if(targetElement) {
          window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      }

};

function scrollDelayed(index) {
    setTimeout(() => {
      scrollToId(hashes[index]);
    }, 30);
}
  
export const items = ["Home", "Oferta", "Realizacje", "Referencje", "Aktualności", "Kontakt"];
export const links = ["/", "/services", "/#ourProjects", "/#opinions", "/#news", "/#footer"];
export const hashes = ["header", "serDetails", "ourProjects", "opinions", "news", "footer", "contactForm"];

export const mItems = items.map((item, index) => {
     return <li key={index}>
                <Link to={links[index]}  onClick={ () => {scrollDelayed(index)}}  >{item}</Link>
            </li>; });

export const wyceny = 
            <li>
                <Link to={links[0]}  onClick={ () => {scrollDelayed(6)}}>Wyceny</Link>
            </li>; 

