import "./News.scss";
import energySVG from "./svg/energy.svg";

const data = [
    {
        title: "House in Telimach",
        desc: "The currently ongoing investment is located in the vicinity of Zawonia, in the Trzebnica district. This charming place, radiating the beauty of nature, will soon gain an additional value in the form of an interestingly designed Telimach-style house created by the Archon studio. The project of this Telimach house is a fascinating task that requires extensive knowledge in the field of construction. This building contains many complex reinforced concrete elements, giving it an impressive and monumental character. In the coming weeks, we will commence the installation work. <br> In line with the spirit of the 21st century, the designed house will be equipped with advanced electronic systems. These solutions, tailored to the individual needs of the client, will encompass a wide range of currently available smart home technologies. Their primary goal will be to enhance the quality of the investor's family life by improving various aspects of daily functioning. Another update will be coming soon, of course, enriched with a photo report on the progress of the work.",
        img: "https://cdn1.archon.pl/images/products/m71f25058f23bc/i/projekt-dom-w-telimach-g2e-e4f54d3e3ba22157447530643fdaa24a__38193.jpg",
        link: "https://www.archon.pl/projekty-domow/projekt-dom-w-telimach-g2e-m71f25058f23bc",
        date: "20.07.2023"
    },
    {
        title: "Energy Audits",
        desc: "Our company upholds the highest service standards, which is why we are currently enhancing our qualifications in the field of conducting energy audits.",
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
                    <a target="_blank" href={props.link} rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    </article>
    )
}

const News = () => {

    //console.log("NEWS COMPONENT RE-RENDERED!!!!");

    return (
        <section id="news">
            <div>
                <h2>News</h2>
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