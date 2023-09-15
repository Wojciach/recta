import './CustomAlert.scss'

const CustomAlert = ({setAlert, alertStatus}) => {

    const alertData = {
        ok : {
            title: "THANKS!",
            header: "THANK YOU FOR YOUR MESSAGE",
            text: "We will contact you as soon as possible.",
        },
        error : {
            title: "ERROR!",
            header: "SOMETHING WENT WRONG",
            text: "Please contact us directly via phone."
        }
    }

    return (
        <article id="customAlert">
            <div className="alertContent">
            <h5>{alertData[alertStatus].title}</h5>
                    <h6>{alertData[alertStatus].header}</h6>
                    <p>{alertData[alertStatus].text}</p>
                    <button onClick={() => setAlert(false)}>take me back</button>
            </div>
        </article>
    )
}

export default CustomAlert;