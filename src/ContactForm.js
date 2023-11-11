import "./ContactForm.scss";
import { memo, useState } from "react";
import CustomAlert from "./CustomAlert";

const ContactForm = memo(() => {
    //console.log("CONTACT FORM COMPONENT RE-RENDERED!!!!");

    const lang = document.documentElement.lang;
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatust] = useState('ok');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const production = "./php/sendForm.php";
        const development = "http://localhost/recta2/recta2/public/php/sendForm.php";
        const experiment = "https://www.recta.website/newphp/php/sendForm.php";
        fetch(experiment, {
          method: 'POST',
          body: formData
        })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            setAlertStatust(data);
            setAlert(true);
        })
        .catch(error => {
            console.log(error);
            setAlertStatust('error');
            setAlert(true);
        });
    };

    return (
        <section id="contactForm">
            <div id="content">
                {(lang === "pl") && (<h2>Poproś o Wycenę</h2>)}
                {(lang === "en") && (<h2>Request a Quote</h2>)}
                <form onSubmit={handleSubmit}>
                    <div id="bothColumns" className="colapseRow">
                        <div id="column1">
                            <input
                                type="text"
                                name="name"
                                placeholder={(lang === "pl") ? "Imię i nazwisko" : "Name and surname"}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder={(lang === "pl") ? "Imię i nazwisko" : "Phone"}
                                required
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder={(lang === "pl") ? "Firma" : "Company"}
                            />
                        </div>
                        <div id="column2">
                            <textarea
                                name="message"
                                placeholder={(lang === "pl") ? "Wiadomość" : "Message"}
                                required>
                            </textarea>
                            <div id="footerSender">
                                <div id="privPoli">
                                    <input type="checkbox" required/>
                                    {(lang === "pl") && (
                                        <p>
                                            Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z naszą 
                                            <a
                                                href={"https://recta.website/privacyPolicyPL.html"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                             Polityką Prywatności.
                                            </a>
                                        </p>
                                    )}
                                    {(lang === "en") && (
                                        <p>
                                            The data entered in the contact form will be processed to provide a response to the submitted inquiry in accordance with our 
                                            <a
                                                href={"https://recta.website/privacyPolicyEN.html"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                             Privacy Policy.
                                            </a>
                                        </p>
                                    )}
                                </div>
                                <button type="submit">
                                    {(lang === "pl") ? "Wyślij" : "Send"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {alert && <CustomAlert setAlert={setAlert} alertStatus={alertStatus}/>}
        </section>
    )
})

export default ContactForm;