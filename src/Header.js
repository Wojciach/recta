import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import searchFunction from "./functionsAndData/searchFunction.js";
import scrollTo from "./functionsAndData/scrollTo";

const Header = () => {
  //console.log("HEADER COMPONENT RE-RENDERED!!!!");

  const lang = document.documentElement.lang;
  const [serviceList, setServiceList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.target.value.trim() === "") {
      setServiceList([]);
      navigate("/");
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
            {(lang === "pl") && (
              <>
                <h1>Usługi Budownane Recta</h1>
                <h2>Budujemy lepszą przyszłość</h2>
              </>
            )}
            {(lang === "en") && (
              <>
                <h1>Recta Construction Services</h1>
                <h2>We are building a better future</h2>
              </>
            )}
        </div>
        <div id="searchBar">
            <input type="text"
              onChange={handleSearch}
              placeholder={(lang === "pl") ? "Jakiej usługi szukasz?" : "What service are you looking for?"}
            />
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
  