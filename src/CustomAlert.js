import './CustomAlert.scss'

const CustomAlert = ({setAlert, alertStatus}) => {

    const alertData = {
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

    return (
        <article id="customAlert">
            <div className="alertContent">
            <h5>{alertData[alertStatus].title}</h5>
                    <h6>{alertData[alertStatus].header}</h6>
                    <p>{alertData[alertStatus].text}</p>
                    <button onClick={() => setAlert(false)}>Go back</button>
            </div>
        </article>
    )
}

export default CustomAlert;