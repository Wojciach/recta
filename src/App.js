import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './base.scss';

import Header from "./Header.js";
import Menu from "./Menu.js";
import Services from "./Services.js";
import CompanyDescription from './CompanyDescription';
import Opinions from "./Opinions.js";
import OurProjects from './OurProjects.js';
import News from './News.js';
import ContactForm from './ContactForm.js';
import Map from './Map.js';
import Footer from './Footer';
import SerDetails from './SerDetails.js';
import MassGallery from './MassGallery';
import Button from './buttons/Button.js';

// import hadnleScroll from './handleScroll.js';
import { ProjectsProvider } from './ProjectsContext';
import { ImageIndexProvider } from './ImageIndexContext';
import SliderWindow from './SliderWindow';

function App() {
  console.log("APP COMPONENT RE-RENDERED!!!!");

  const [selected, setSelected] = useState('gal_1');
  const currentLocation = useLocation();
  const [sliderWindowActive, setSliderWindowActive] = useState(false);
  const [startSiderFrom, setStartSiderFrom] = useState(0);

  function selectThis(event) {
    setSelected(event.currentTarget.id);
  }

  const HomeScreen = React.memo(() => {
    console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <Services />
        <CompanyDescription />
        <Opinions />
        <OurProjects selected={selected} selectThis={selectThis}/>
        <MassGallery gallery={selected} setSliderWindowActive={setSliderWindowActive} setStartSiderFrom={setStartSiderFrom} />
        <News />
      </ProjectsProvider>
    );
  });

  const ServicesScreen = React.memo(() => {
    console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <SerDetails />
        <OurProjects selected={selected} selectThis={selectThis} />
        <MassGallery gallery={selected} setSliderWindowActive={setSliderWindowActive} setStartSiderFrom={setStartSiderFrom} />
      </ProjectsProvider>
    );
  });

  return (
    <main className="App">
      <header>
        <Menu />
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
        {sliderWindowActive && <SliderWindow setSliderWindowActive={setSliderWindowActive} startSiderFrom={startSiderFrom} selected={selected} /> }
      </footer>
      <Button angle={45} />
      <Button angle={45} />
    </main>
  );
}

export default App;
