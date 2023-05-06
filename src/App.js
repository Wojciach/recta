import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './base.scss';

import Header from "./Header.js";
import Menu from "./Menu.js";
import Services from "./Services.js";
import CompanyDescription from './CompanyDescription';
import Opinions from "./Opinions.js";
import Projects from './Projects.js';
import News from './News.js';
import ContactForm from './ContactForm.js';
import Map from './Map.js';
import Footer from './Footer';
import SerDetails from './SerDetails.js';

import hadnleScroll from './handleScroll.js';
import { ProjectsProvider } from './ProjectsContext';
import { ImageIndexProvider } from './ImageIndexContext';

function App() {
  console.log("APP COMPONENT RE-RENDERED!!!!");
  const [viz, setViz] = useState(new Set([]));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      hadnleScroll([viz, setViz]);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        hadnleScroll([viz, setViz]);
      });
    };
  }, []);

  const currentLocation = useLocation();

  const HomeScreen = React.memo(() => {
    console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <Services />
        <CompanyDescription />
        <Opinions />
        <Projects />
        <News />
      </ProjectsProvider>
    );
  });

  const ServicesScreen = React.memo(() => {
    console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <SerDetails />
        <Projects />
      </ProjectsProvider>
    );
  });

  return (
    <main className="App">
      <header>
        <Menu passed={viz} />
        <Header />
      </header>
      <ImageIndexProvider>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
      </Routes>
      </ImageIndexProvider>
      <ContactForm />
      <Map />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
