import { memo } from "react";
import "./SerDetails.scss";
import icons from "./functions/servicesIcons";
import { serTitPL, serDescPL, serBulletsPL, serHashPL } from "./functions/servicesDataPL";
import { serTitEN, serDescEN, serBulletsEN, serHashEN } from "./functions/servicesDataEN";
import hashtagsPL from "./functions/hashtagsPL";
import hashtagsEN from "./functions/hashtagsEN";

const SerDetails = memo(({refArr}) => {
    //console.log("SER_DETAILS COMPONENT RE-RENDERED!!!!");

    const lang = document.documentElement.lang;
    const serTit = (lang === "pl") ? serTitPL : serTitEN;
    const serDesc = (lang === "pl") ? serDescPL : serDescEN;
    const serBullets = (lang === "pl") ? serBulletsPL : serBulletsEN;
    const serHash = (lang === "pl") ? serHashPL : serHashEN;
    const hashtags = (lang === "pl") ? hashtagsPL : hashtagsEN;

    return (
        <section id="serDetails">
            <div id="content">
                {(lang === "pl") && (<h2>Nasza Oferta <br/>i jak możemy pomóc</h2>)}
                {(lang === "en") && (<h2>Our Services <br/>and how can we help?</h2>)}
                {icons.map( (icon, index) => {
                   const Icon = icons[index];
                   const bullets = serBullets[index].map((item) => "<li>" + item + "</li>").join("<br/>");
                   
                    return (
                        <article id={serHash[index]} className="innerArticle" ref={(re) => {refArr.current[index] = re}}>
                            <div id="texts">
                                <div className="iconColumn">
                                    <Icon key={index} />
                                </div>
                                <div className="textColumn">
                                    <h4>{serTit[index]}</h4>
                                    <p>{serDesc[index]}</p>
                                    <ul dangerouslySetInnerHTML={{ __html: bullets }}></ul>
                                </div>
                            </div>
                            <div id="hashes">
                                {Object.keys(hashtags[index]).map((item) => {
                                    return <>{hashtags[index][item].map(
                                        (hash) => {return (<span>{hash}</span>)}
                                    )}</>
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
});

export default SerDetails;