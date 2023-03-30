
//import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Menu.scss";

import { ReactComponent as MyIcon } from "./svg/RECTA_logo_granat.svg";

function Menu() {

    const items = ["Home", "Oferta", "Realizacje", "Referencje", "Aktualności", "Kontakt"];

    const mItems = items.map((item, index) => { return <li key={index}><Link to={item}>{item}</Link></li>; });
        
    

    return (
      <section id="menu">
         

        <nav>
      
    
              <div className="topRow">

                  <div id="rectaLogoHome">
                      <MyIcon />
                  </div>

                  <div id="langLink">
                    <div className="lang" id="en">EN</div>
                    <div className="lang" in="pl">PL</div>
                  </div>

              </div>

              <ul>
                {mItems}
              </ul>
        </nav>
       
      </section>
    );
  }
  
  export default Menu;
  