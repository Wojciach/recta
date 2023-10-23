import './CustomAlert.scss'

const CustomAlert = ({setAlert, alertStatus}) => {

    const alertData = {
        ok : {
            title: "OK!",
            header: "THANK YOU FOR YOUR MESSAGE!",
            text: "Skontaktujemy się z Tobą wkrótce.",
        },
        error : {
            title: "BŁĄD!",
            header: "Coś poszło nie tak...",
            text: "Prosimy o kontakt telefoniczny. +48 728 482 639"
        }
    }

    return (
        <article id="customAlert">
            <div className="alertContent">
            <h5>{alertData[alertStatus].title}</h5>
                    <h6>{alertData[alertStatus].header}</h6>
                    <p>{alertData[alertStatus].text}</p>
                    <button onClick={() => setAlert(false)}>Powrót</button>
            </div>
        </article>
    )
}

export default CustomAlert;