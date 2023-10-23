import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

import searchFunction from "./functions/searchFunction.js";
import scrollTo from "./functions/scrollTo";

const Header = () => {
  console.log("HEADER COMPONENT RE-RENDERED!!!!");

  const [serviceList, setServiceList] = useState([]);
  //const [hashTagsList, setHashTagsList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.target.value.trim() === "") {
      setServiceList([]);
     // setHashTagsList([]);
      navigate("/")
      return;
    }
    const searchResult = searchFunction(event.target.value);
    setServiceList(searchResult);
    navigate("/services")
  };

  const hadleScroll = (event) => {
    scrollTo(event.target.textContent);
    console.log(event.target.textContent);
    setServiceList([]);
  };

    return (
      <section id="header">
        <div className="sBackground"></div>
        <div id="slogan">
            <h1>Usługi Budownane Recta</h1>
            <h2>Budujemy lepszą przyszłość</h2>
        </div>
        <div id="searchBar">
            <input type="text" onChange={handleSearch} placeholder="Jakiej usługi szukasz?"/>
            <ul id="searchList">
              {serviceList.map((service) => {
                return <li onClick={hadleScroll}>{service}</li>;
              })}
            </ul>
        </div>
      </section>
    );
  }
  
  export default Header;
  