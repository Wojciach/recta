
import "./Menu.scss";

import { ReactComponent as MyIcon } from "./svg/RECTA_logo_granat.svg";
import { Link } from "react-router-dom";
import  { mItems } from "./navData.js";
import React from "react";
import { useEffect } from "react";


function Menu({passed}) {
  console.log("MENU COMPONENT RE-RENDERED!!!!");

  console.log("from menu1: " + passed.size);

  for (let value of passed) {
    console.log("XXXX: " + value);
  }

  useEffect(

    () => {
      for (let value of passed) {
        console.log(value);
      }
    }, [passed]
  )
   // const passed = {passed};
    
   
    

   

    return (
      <section id="menu">
         

        <nav>
      
    
              <div className="topRow">

                  <div id="rectaLogoHome">
                  <Link to={"/"}  ><MyIcon /></Link>
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
  