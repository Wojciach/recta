import "./ContactForm.scss";
import { memo } from "react";

const ContactForm = memo(() => {

    console.log("CONTACT FORM COMPONENT RE-RENDERED!!!!");

    return (
        <section id="contactForm">
            <div id="content">
                <h2>Poproś o Wycenę</h2>
                <div id="bothColumns" className="colapseRow">

                    <div id="column1">
                        <input type="text" placeholder="Imię i nazwisko" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="Telefon kontaktowy" />
                        <input type="text" placeholder="Firma" />
                    </div>

                    <div id="column2">
                        <textarea placeholder="Wiadomść..."></textarea>
                        <div id="footerSender">
                            <div id="privPoli">
                                <input type="checkbox"/>
                                <p>
                                    Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z naszą Polityką Prywatności.
                                </p>

                            </div>
                            <button>Wyślij</button>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
})

export default ContactForm;