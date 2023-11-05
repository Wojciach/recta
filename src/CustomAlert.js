import './CustomAlert.scss'

const CustomAlert = ({setAlert, alertStatus}) => {

    const lang = document.documentElement.lang;
    const alertData = {
        pl : {
            ok : {
                title: "OK!",
                header: "DZIĘKUJEMY! ZA WIADOMOŚĆ",
                text: "Skontaktujemy się z Tobą wkrótce.",
            },
            error : {
                title: "BŁĄD!",
                header: "Coś poszło nie tak...",
                text: "Prosimy o kontakt telefoniczny. +48 728 482 639"
            }
        },
        en : {
            ok : {
                title: "OK!",
                header: "THANK YOU FOR YOUR MESSAGE!",
                text: "We will contact you soon",
            },
            error : {
                title: "ERROR!",
                header: "Something went wrong...",
                text: "Please contact us by phone. +48 728 482 639."
            }
        }
    }

    return (
        <article id="customAlert">
            <div className="alertContent">
            <h5>{alertData[lang][alertStatus].title}</h5>
                    <h6>{alertData[lang][alertStatus].header}</h6>
                    <p>{alertData[lang][alertStatus].text}</p>
                    <button onClick={() => setAlert(false)}>
                        {(lang === "pl") ? "Powrót" : "Go back"}
                    </button>
            </div>
        </article>
    )
}

export default CustomAlert;