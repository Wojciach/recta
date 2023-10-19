import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import oferta from "./oferta.js"


const Header = () => {
  console.log("HEADER COMPONENT RE-RENDERED!!!!");

  const navigate = useNavigate();
  const [serviceList, setServiceList] = useState([]);

  const searchFunction = (event) => {

    if (event.target.value.trim() === "") {
      setServiceList([]);
      navigate("/");
      return;
    }

    navigate("/services");

    var servicesListToShow = [];
    console.log(event.target.value);

    const searchString = event.target.value;
    function searchOferta(searchString) {
      for (let i = 0; i < oferta.length; i++) {
        const obj = oferta[i];
        for (const key in obj) {
            obj[key].forEach((element) => {
             // if (element.toLowerCase().includes(searchString.toLowerCase())) console.log(element);
              if (element.toLowerCase().includes(searchString.toLowerCase())) {
                  if(!servicesListToShow.includes(element)) {
                    servicesListToShow = [...servicesListToShow, element];
                  }
              }
              console.log(servicesListToShow); setServiceList(servicesListToShow);
         })
        };
      }
    } searchOferta(searchString);
  }
    
  
    return (
      <section id="header">
         <div className="sBackground"></div>
        
        <div id="slogan">
            <h1>Usługi Budownane Recta</h1>
            <h2>Budujemy lepszą przyszłość</h2>
        </div>
        <div id="searchBar">
            <input type="text" onChange={searchFunction} placeholder="Jakiej usługi szukasz?"/>
            <ul id="searchList">
              {serviceList.map((service) => {
                return <li>{service}</li>;
              })}
            </ul>
        </div>
       
      </section>
    );
  }
  
  export default Header;
  