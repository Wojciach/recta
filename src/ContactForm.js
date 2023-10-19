import "./ContactForm.scss";
import { memo, useState } from "react";
import CustomAlert from "./CustomAlert";

const ContactForm = memo(() => {
    console.log("CONTACT FORM COMPONENT RE-RENDERED!!!!");

    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatust] = useState('ok');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
     //'./php/sendForm.php' <-- for production
    //'http://192.168.1.246/recta2/recta2/public/php/sendForm.php' <-- for development
        fetch('http://192.168.1.246/recta2/recta2/public/php/sendForm.php', {  //maybe " ../ " instead of " ./ " but for development i may need localhost php interpreter
          method: 'POST',
          body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            setAlertStatust('ok');
            setAlert(true);
        })
        .catch(error => {
            console.log(error.message);
            setAlertStatust('error');
            setAlert(true);
        });
    };

    return (
        <section id="contactForm">
            <div id="content">
                <h2>Poproś o Wycenę</h2>
                <form onSubmit={handleSubmit}>
                    <div id="bothColumns" className="colapseRow">
                        <div id="column1">
                            <input type="text" name="name" placeholder="Imię i nazwisko" required/>
                            <input type="email" name="email" placeholder="E-mail" required/>
                            <input type="tel" name="phone" placeholder="Telefon kontaktowy" required/>
                            <input type="text" name="company" placeholder="Firma" />
                        </div>
                        <div id="column2">
                            <textarea name="message" placeholder="Wiadomść..." required></textarea>
                            <div id="footerSender">
                                <div id="privPoli">
                                    <input type="checkbox" required/>
                                    <p>
                                        Dane wpisane w formularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie zgodnie z naszą Polityką Prywatności.
                                    </p>
                                </div>
                                <button type="submit">Wyślij</button>
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