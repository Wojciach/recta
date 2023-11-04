import "./ContactForm.scss";
import { memo, useState } from "react";
import CustomAlert from "./CustomAlert";

const ContactForm = memo(() => {
    //console.log("CONTACT FORM COMPONENT RE-RENDERED!!!!");

    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatust] = useState('ok');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const production = "./php/sendForm.php";
        const development = "http://localhost/recta2/recta2/public/php/sendForm.php";
        fetch(development, {
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
            setAlertStatust('ok');
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
                <h2>Request a Quote</h2>
                <form onSubmit={handleSubmit}>
                    <div id="bothColumns" className="colapseRow">
                        <div id="column1">
                            <input type="text" name="name" placeholder="Name and surname" required/>
                            <input type="email" name="email" placeholder="E-mail" required/>
                            <input type="tel" name="phone" placeholder="Phone" required/>
                            <input type="text" name="company" placeholder="Company" />
                        </div>
                        <div id="column2">
                            <textarea name="message" placeholder="Message..." required></textarea>
                            <div id="footerSender">
                                <div id="privPoli">
                                    <input type="checkbox" required/>
                                    <p>
                                        The data entered in the contact form will be processed to provide a response to the submitted inquiry in accordance with our Privacy Policy.
                                    </p>
                                </div>
                                <button type="submit">Send</button>
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