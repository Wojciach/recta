import "./ContactForm.scss";
import { memo } from "react";

const ContactForm = memo(() => {
    console.log("CONTACT FORM COMPONENT RE-RENDERED!!!!");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    //'http://192.168.1.246/recta2/recta2/public/php/sendForm.php'
        fetch('https://recta.website/php/sendForm.php', {  //maybe " ../ " instead of " ./ " but for development i may need localhost php interpreter
          method: 'POST',
          body: formData
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };

    return (
        <section id="contactForm">
            <div id="content">
                <h2>Poproś o Wycenę</h2>
                <form onSubmit={handleSubmit}>
                    <div id="bothColumns" className="colapseRow">
                        <div id="column1">
                            <input type="text" name="name" placeholder="Imię i nazwisko" />
                            <input type="email" name="email" placeholder="E-mail" />
                            <input type="tel" name="tel" placeholder="Telefon kontaktowy" />
                            <input type="text" name="company" placeholder="Firma" />
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
                                <button type="submit">Wyślij</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
})

export default ContactForm;