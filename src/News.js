import "./News.scss";

import newsDataEN from "./functionsAndData/newsDataEN";
import newsDataPL from "./functionsAndData/newsDataPL";



const Article = (props) => {

    const lang = document.documentElement.lang;

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
                    <a 
                        target="_blank"
                        href={props.link}
                        rel="noopener noreferrer">
                        {(lang === "pl") ? "Czytaj Więcej" : "Read More"}
                    </a>
                </div>
            </div>
        </div>
    </article>
    )
}

const News = () => {
    //console.log("NEWS COMPONENT RE-RENDERED!!!!");
    const lang = document.documentElement.lang;
    const data = lang === "pl" ? newsDataPL : newsDataEN;

    return (
        <section id="news">
            <div>
                <h2>
                    {(lang === "pl") ? "Aktualnści" : "News"}
                </h2>
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