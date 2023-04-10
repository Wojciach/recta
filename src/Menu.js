
import "./Menu.scss";

import { ReactComponent as MyIcon } from "./svg/RECTA_logo_granat.svg";
import  {mItems} from "./navData.js";


function Menu() {

  
        
    

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
  