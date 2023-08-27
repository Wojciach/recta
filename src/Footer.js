import "./Footer.scss";
import { memo } from "react";
import  {mItems, wyceny} from "./navData.js";

import twatter_icon from "./svg/dor/twatter_icon.svg";
import fb_icon from "./svg/dor/fb_icon.svg";
import linkedin_icon from "./svg/dor/linkedin_icon.svg";
import messenger_icon from "./svg/dor/messenger_icon.svg";
import whatsapp_icon from "./svg/dor/whatsapp_icon.svg";

const Footer = memo(() => {
    console.log("FOOTER COMPONENT RE-RENDERED!!!!");

    return (
        <section id="footer">
            <div id="content" className="colapseRow">
                <div id="left">
                <h2>Kontakt</h2>
                    <div id="navs">
                        <nav>
                            <ul>
                                {mItems}
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                {wyceny}
                                <li>Polityka Prywatności</li>
                                <li>FAQ</li>
                            </ul>
                        </nav>
                    </div>
                </div>   
                <div id="contactData">
                    <div id="contactInfo">
                        <h2>Kontakt</h2>
                        <p id="telephone">+48 728 482 639</p>
                        <p id="address">
                            Recta <br/>
                            Tadeusza Kościuszki 20, <br/>
                            55-100 Trzebnica
                        </p>
                    </div>
                    <div id="socialMedia">
                        <p>Znajdziesz nas również na:</p>
                        <div>
                            <ul>
                                <li><img src={fb_icon}/></li>
                                <li><img src={twatter_icon}/></li>
                                <li><img src={linkedin_icon}/></li>
                                <li><img src={messenger_icon}/></li>
                                <li><img src={whatsapp_icon}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Footer;