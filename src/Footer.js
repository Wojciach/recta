import "./Footer.scss";
import { memo, useState } from "react";
import  {mItems, mItems2} from "./functionsAndData/navData.js";
import twatter_icon from "./svg/dor/twatter_icon.svg";
import fb_icon from "./svg/dor/fb_icon.svg";
import linkedin_icon from "./svg/dor/linkedin_icon.svg";
import messenger_icon from "./svg/dor/messenger_icon.svg";
import whatsapp_icon from "./svg/dor/whatsapp_icon.svg";

import CustomAlert from "./CustomAlert";

const Footer = memo(() => {
    //console.log("FOOTER COMPONENT RE-RENDERED!!!!");

    const lang = document.documentElement.lang;
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatust] = useState('ok');

    const handleAlert = () => {
        setAlertStatust('underConstruction');
        setAlert(true);
    }

    return (
        <section id="footer">
            <div id="content" className="colapseRow">
                <div id="left">
                <h2>{(lang === "pl") ? "Kontakt" : "Contact"}</h2>
                    <div id="navs">
                        <nav>
                            <ul>
                                {mItems}
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                {mItems2}
                                {(lang === "pl") && (
                                    <li>
                                        <a 
                                            href={"https://recta.website/privacyPolicyPL.html"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >Polityka Prywatności
                                        </a>
                                    </li>
                                )}
                                {(lang === "en") && (
                                    <li>
                                        <a
                                            href={"https://recta.website/privacyPolicyEN.html"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >Privacy Policy
                                        </a>
                                    </li>
                                )}
                                <li onClick={handleAlert}>FAQ</li>
                            </ul>
                        </nav>
                    </div>
                </div>   
                <div id="contactData">
                    <div id="contactInfo">
                        <h2>{(lang === "pl") ? "Kontakt" : "Contact"}</h2>
                        <p id="telephone">+48 728 482 639</p>
                        <p id="address">
                            Recta <br/>
                            Tadeusza Kościuszki 20, <br/>
                            55-100 Trzebnica
                        </p>
                    </div>
                    <div id="socialMedia">
                    {(lang === "pl") && (<p>Wkrótce znajdziesz nas również na:</p>)}
                    {(lang === "en") && (<p>Shortly, you will also find us at:</p>)}
                        <div>
                            <ul>
                                <li><img alt="facebook" src={fb_icon}/></li>
                                <li><img alt="twitter" src={twatter_icon}/></li>
                                <li><img alt="linkedin" src={linkedin_icon}/></li>
                                <li><img alt="messenger" src={messenger_icon}/></li>
                                <li><img alt="watsapp" src={whatsapp_icon}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {alert && <CustomAlert setAlert={setAlert} alertStatus={alertStatus}/>}
        </section>
    )
})

export default Footer;
