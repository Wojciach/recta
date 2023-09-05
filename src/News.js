import "./News.scss";
import energySVG from "./svg/energy.svg";

const data = [

    {
        title: "Dom w Telimach",
        desc: "Aktualnie realizowana inwestycja mieści się w okolicach Zawonii, w powiecie trzebnickim. To urokliwe miejsce, emanujące pięknem przyrody, wkrótce zyska dodatkowy walor w postaci interesująco zaprojektowanego domu w stylu Telimach, stworzonego przez pracownię Archon. Projekt tego domu w Telimach to zadanie fascynujące i wymagające rozległej wiedzy w dziedzinie budownictwa. Budynek ten zawiera wiele skomplikowanych elementów żelbetowych, które nadają mu imponujący, monumentalny charakter. Już w najbliższych tygodniach rozpoczniemy prace instalacyjne. <br> Zgodnie z duchem XXI wieku, projektowany dom zostanie wyposażony w zaawansowane systemy elektroniczne. Rozwiązania te, skrojone na miarę indywidualnych potrzeb klienta, obejmą szeroki wachlarz obecnie dostępnych technologii smart home. Ich głównym celem będzie wzbogacenie jakości życia rodziny inwestora poprzez usprawnienie różnych aspektów codziennego funkcjonowania. Kolejna aktualizacja informacji już niedługo, oczywiście wzbogacona o fotorelację z postępu prac.",
        img: "https://cdn1.archon.pl/images/products/m71f25058f23bc/i/projekt-dom-w-telimach-g2e-e4f54d3e3ba22157447530643fdaa24a__38193.jpg",
        link: "https://www.archon.pl/projekty-domow/projekt-dom-w-telimach-g2e-m71f25058f23bc",
        date: "20.07.2023"
    },
    {
        title: "Audyty Energetyczne",
        desc: "Nasza firma dba o najwyższe standardy usług, dlatego podnosimy obecnie swoje kwalifikacje w zakresie przeprowadzania audytów energetycznych.",
        img: energySVG,
        link: "",
        date: "15.08.2023"
    },

]



const Article = (props) => {
    return(
    <article>
        <div className="arContainer colapseRow">
            <div className="column">
                <div className="arPhoto">
                     <img alt="" src={props.img} />
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

    console.log("NEWS COMPONENT RE-RENDERED!!!!");

    return (
        <section id="news">
            <div>
                <h2>Aktualnosci</h2>
                {data.map((item, index)=>{
                    return (
                        <Article key={index} img={item.img} title={item.title} desc={item.desc} date={item.date} link={item.link} />
                    )
                })}
            </div>
        </section>
    )
}

export default News;