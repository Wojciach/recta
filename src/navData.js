import { Link, animateScroll as scroll } from "react-scroll";

export const items = ["Home", "Oferta", "Realizacje", "Referencje", "Aktualności", "Kontakt"];

export const mItems = items.map((item, index) => { return <li key={index}><Link to={item}>{item}</Link></li>; });