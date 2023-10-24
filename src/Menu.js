
import "./Menu.scss";

import { ReactComponent as MyIcon } from "./svg/RECTA_logo_granat.svg";
import { Link } from "react-router-dom";
import  { mItems } from "./navData.js";
import React from "react";
import { memo } from "react";

function Menu() {

  //console.log("MENU COMPONENT RE-RENDERED!!!!");

  const firstTwoLetters = window.location.hostname.substring(0, 2);
  const handleRedirect = (event) => {
    if (event.target.id === "en") { 
      window.location.href = "https://en.recta.website/";
    } else if (event.target.id === "pl")
      window.location.href = "https://pl.recta.website/";
  };
    
    return (
      <section id="menu"> 
        <nav>
          <div className="topRow">
              <div id="rectaLogoHome">
              <Link to={"/"}  ><MyIcon /></Link>
              </div>
              <div id="langLink">
                <div className={"lang" + (firstTwoLetters === "en" ? " marked" : "")} id="en" onClick={handleRedirect}>EN</div>
                <div className={"lang" + (firstTwoLetters !== "en" ? " marked" : "")} id="pl" onClick={handleRedirect}>PL</div>
              </div>
          </div>
          <ul>
            {mItems}
          </ul>
        </nav>
      </section>
    );
  }
  
  export default memo(Menu);
  