import "./News.scss";
import img1 from "./photos/ronnie-george-z11gbBo13ro-unsplash.jpg"
import img2 from "./photos/Osiedle-domow-blizniaczych-przy-ul.-Czechoslowackiej-w-Lodzi-2-800x450.jpg"

const data = [

    {
        title: "Projekt Goliat",
        desc: "Rozpoczynamy budowę nowego osiedla domków jednorodzinnych na Psim Polu pod Wrocławiem. Inwestycja będzie zajmować powierzchnię 300 hetarów i będzie oferować spokojne zacisze z dala od miasta dla 80 rodzin. Projekt został zainicjowany z myślą o młodych małżeństwach o ograniczonych możliwościach budżetowych...",
        img: img1,
        link: "http://www.02.pl",
        date: "20.02.2023"
    },
    {
        title: "Projekt Salomon - otwarcie",
        desc: "Project Salomon juest już na ukończeniu. Jesteśmy dumni, że możemy już wkrótce oddać w Państwa ręce luksusowe osiedle domków jedno i wielorodzinnnych w Leśnicy. Projekt oferuje domy o wysokim standardzie z dużą powierzchnią ogrodową. Ulokowany blisko Wrocławia oferuje łatwy dojazd do pracy obwonicą wrocławską oraz...",
        img: img2,
        link: "",
        date: "23.05.2022"
    },

]



const Article = (props) => {
    return(
    <article>
        <div className="arContainer colapseRow">
            <div className="column">
                <div className="arPhoto">
                     <img src={props.img} />
                </div>
            </div>
            <div className="column">
                <div className="arContent">
                    <h4>{props.title}</h4>
                    <p>
                        {props.desc}
                    </p>

                </div>
            </div>
        </div>
        <div className="arFoot">
                <div>
                    <div className="arDate">{props.date}</div>
                    <div className="arLink">
                        <a target="_blank" href={props.link} rel="noopener noreferrer">Czytaj Więcej</a>
                    </div>
                </div>
        </div>
    </article>
    )
}




const News = () => {
    return (
        <section id="news">
            
            <div>
                <h2>Aktualnosci</h2>

                {data.map((item, index)=>{return(

                    <Article key={index} img={item.img} title={item.title} desc={item.desc} date={item.date} link={item.link} />

                )})}
                
                
            </div>
        </section>
    )
}

export default News;