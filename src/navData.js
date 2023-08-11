
import { Link } from "react-router-dom";

function scrollToTarget(address) {

    setTimeout( () => {
      const targetElement = document.querySelector(address);
      if(targetElement) {
          window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      }
    }, 100);
  }
  
export const items = ["Home", "Oferta", "Realizacje", "Referencje", "Aktualności", "Kontakt"];
export const links = ["/", "/services", "#ourProjects", "/#opinions", "/#news", "#footer"];
export const hashes = ["#header", "#serDetails", "#ourProjects", "#opinions", "#news", "#footer"];

export const mItems = items.map((item, index) => {
     return <li key={index}>
                <Link to={links[index]} onClick={() => scrollToTarget(hashes[index])} >{item}</Link>
            </li>; });