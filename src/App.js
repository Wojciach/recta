// import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import './base.scss';

import Header from "./Header.js";
import Menu from "./Menu.js";
import Services from "./Services.js";
import CompanyDescription from './CompanyDescription';
import Opinions from "./Opinions.js";
import Projects  from './Projects.js';
import News from './News.js';
import ContactForm from './ContactForm.js';
import Map from './Map.js'
import Footer from './Footer';
import SerDetails from './SerDetails';






function App() {

 
  const viz = useRef(new Set([]));
  
  console.log("RENDEROOOOS!");

  window.addEventListener('scroll',
  
    () => {


      console.log("/////scroll///////")

      const sections = document.querySelectorAll('section');
      
      for (let i = sections.length - 1; i >= 0; i--) {

        const section = sections[i];

        const rect = section.getBoundingClientRect();
        

        const isVisible = () => {
          if ((rect.top < window.innerHeight * 0.8 ) && (rect.top > 0)) {

         //    console.log("PIERWSZY WARUNEK: "); 
             return true}

          else if (((rect.bottom > window.innerHeight * 0.25) && (rect.top < window.innerHeight * 0.8)) && (rect.bottom > 0)) {

          //  console.log("DRUGI WARUNEK: ");
            return true}

          else {return false}
        };

        //console.log(isVisible());

       if (isVisible() === true)  {

           viz.current.add(section.id);
      
        }
        else {

            viz.current.delete(section.id);
    

        };
       /* if ((rect.top < window.scrollY) && (rect.top > (window.scrollY - window.innerHeight))) {
          console.log(section);
        } */
      }
    
     viz.current.forEach((t) => console.log(t));

     

    }  
  );


  

  //this is for animations in router
  const currentLocation = useLocation();

  const HomeScreen = () => {
    
    return (
      <>
        <Services />
        <CompanyDescription />
        <Opinions />
        <Projects />
        
        <News />
        <ContactForm />
        <Map />
      </>
    )
  }

  const ServicesScreen = () => {
    
    return (
      <>
        <SerDetails />
        <Projects />
        <ContactForm />
        <Map />
      </>
    )
  }

  return (
    <main className="App">

      <header>
        <Menu passed={viz} />
        <Header />
      </header>
    
          <TransitionGroup>
            <CSSTransition key={currentLocation.key} timeout={450} classNames="fade">
            <Routes> 
                <Route exact path="/" element={<HomeScreen />} />
                <Route path="/services" element={<ServicesScreen />} />
            </Routes>
              
            </CSSTransition>
          </TransitionGroup>
        
        
      <footer>
        <Footer />
      </footer>
        
    </main>
  );
}

export default App;
