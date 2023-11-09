import { Route, Routes } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import './App.scss';

import HomeScreen from './HomeScreen.js';
import ServicesScreen from './ServicesScreen.js';

import Header from "./Header.js";
import Menu from "./Menu.js";
//import Services from "./Services.js";
//import CompanyDescription from './CompanyDescription';
//import Opinions from "./Opinions.js";
//import OurProjects from './OurProjects.js';
//import News from './News.js';
import ContactForm from './ContactForm.js';
import Map from './Map.js';
import Footer from './Footer';
//import SerDetails from './SerDetails.js';
//import MassGallery from './MassGallery.js';
import { TopScrollBtn } from './TopScrollBtn.js';

//import { ProjectsProvider } from './ProjectsContext';
import { ImageIndexProvider } from './ImageIndexContext';
import SliderWindow from './SliderWindow';

import { fetchPhotos }from './functions/fetchPhotos.js';
import { use } from 'i18next';

function App() {
  //console.log("APP COMPONENT RE-RENDERED!!!!");

  const [selected, setSelected] = useState('gal_1');
  const [allPhotoNames, setAllPhotoNames] = useState({o: "o"});
  const [sliderWindowActive, setSliderWindowActive] = useState(false);
  const [startSiderFrom, setStartSiderFrom] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const refArr = useRef([]);

  function selectThis(event) {
    setSelected(event.currentTarget.id);
    console.log("seleccccctorson: " + event.currentTarget.id);
  }

  useEffect(() => {
    fetchPhotos()
      .then(response => response.json())
      .then((data) => {
        setAllPhotoNames(data);
        setIsLoading(false);
      })
      .catch((error) => {console.error('Error:', error)});
      setIsLoading(false);

  }, []);

  /*
  const HomeScreen = React.memo(() => {
    console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ProjectsProvider>
        <Services refArr={refArr}/>
        <CompanyDescription />
        <Opinions />
        <OurProjects selected={selected} selectThis={selectThis}/>
        <MassGallery
          selected={selected}
          allPhotoNames={allPhotoNames}
          gallery={selected}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
        />
        <News />
      </ProjectsProvider>
    );
  });
*/
/*
  const ServicesScreen = React.memo(() => {
    console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <SerDetails refArr={refArr}/>
        <OurProjects selected={selected} selectThis={selectThis} />
        <MassGallery
          selected={selected}
          allPhotoNamess={allPhotoNames}
          gallery={selected}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
        />
      </ProjectsProvider>
    );
  });

  */

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
          <Route exact path="/" element={
            <HomeScreen 
              selected={selected}
              selectThis={selectThis}
              allPhotoNames={allPhotoNames}
              isLoading={isLoading}
              refArr={refArr}
              setSliderWindowActive={setSliderWindowActive}
              setStartSiderFrom={setStartSiderFrom}
            />}
          />
          <Route path="/services" element={
            <ServicesScreen
              selected={selected}
              selectThis={selectThis}
              allPhotoNames={allPhotoNames}
              isLoading={isLoading}
              refArr={refArr}
              setSliderWindowActive={setSliderWindowActive}
              setStartSiderFrom={setStartSiderFrom}
            />}
          />
          <Route path="/photo-slider" element={
            <SliderWindow
              allPhotoNames={allPhotoNames}
              setSliderWindowActive={setSliderWindowActive}
              startSiderFrom={startSiderFrom}
              selected={selected}
            />
          }/>
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
