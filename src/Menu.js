
import "./Menu.scss";

import { ReactComponent as MyIcon } from "./svg/RECTA_logo_granat.svg";
import { Link } from "react-router-dom";
import  { mItems } from "./navData.js";
import React from "react";
import { memo } from "react";

function Menu() {
  console.log("MENU COMPONENT RE-RENDERED!!!!");
    
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
  
  export default memo(Menu);
  