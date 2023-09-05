import { Route, Routes } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import './App.scss';

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
import { TopScrollBtn } from './TopScrollBtn.js';

import { ProjectsProvider } from './ProjectsContext';
import { ImageIndexProvider } from './ImageIndexContext';
import SliderWindow from './SliderWindow';



function App() {
  console.log("APP COMPONENT RE-RENDERED!!!!");

  const [selected, setSelected] = useState('gal_1');
  const [sliderWindowActive, setSliderWindowActive] = useState(false);
  const [startSiderFrom, setStartSiderFrom] = useState(0);

  const refArr = useRef([]);

  function selectThis(event) {
    setSelected(event.currentTarget.id);
  }
  
  const HomeScreen = React.memo(() => {
    console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <Services refArr={refArr}/>
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
        <SerDetails refArr={refArr}/>
        <OurProjects selected={selected} selectThis={selectThis} />
        <MassGallery gallery={selected} setSliderWindowActive={setSliderWindowActive} setStartSiderFrom={setStartSiderFrom} />
      </ProjectsProvider>
    );
  });

  return (
    <main className="App">
      { sliderWindowActive === false &&
          <header>
            <Menu />
            <Header />
          </header> 
      }
      <ImageIndexProvider>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/photo-slider" element={<SliderWindow setSliderWindowActive={setSliderWindowActive} startSiderFrom={startSiderFrom} selected={selected} />} />
        </Routes>
      </ImageIndexProvider>
      
      { sliderWindowActive === false && <ContactForm /> }
      { sliderWindowActive === false && <Map /> }

      { sliderWindowActive === false &&
        <footer>
          <Footer />
        </footer> 
      }
      <TopScrollBtn />
    </main>
  );
}

export default App;
