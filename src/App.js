import { Route, Routes } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import './App.scss';

import HomeScreen from './HomeScreen.js';
import ServicesScreen from './ServicesScreen.js';

import Header from "./Header.js";
import Menu from "./Menu.js";
import ContactForm from './ContactForm.js';
import Map from './Map.js';
import Footer from './Footer';
import SliderWindow from './SliderWindow';

import { TopScrollBtn } from './TopScrollBtn.js';
import { ImageIndexProvider } from './ImageIndexContext';
import { fetchPhotos }from './functions/fetchPhotos.js';

function App() {
  //console.log("APP COMPONENT RE-RENDERED!!!!");

  const [selected, setSelected] = useState('gal_1');
  const [allPhotoNames, setAllPhotoNames] = useState({o: "o"});
  const [sliderWindowActive, setSliderWindowActive] = useState(false);
  const [startSiderFrom, setStartSiderFrom] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  //where to fetch photos from
  const imagesFolderDev = "http://localhost/recta2/recta2/public/photos/MassGalleries/";
  const imagesFolderProd = "https://recta.website/photos/MassGalleries/";
  const baseUrlPhotos = imagesFolderDev;

  const folderName = {
    gal_1: "Taczow",
    gal_2: "Fundamenty",
    gal_3: "Moniuszki"
};
  
  const refArr = useRef([]);

  function selectThis(event) {
    setSelected(event.currentTarget.id);
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

  console.log(allPhotoNames[selected]);

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
              baseUrlPhotos={baseUrlPhotos}
              folderName={folderName}
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
              baseUrlPhotos={baseUrlPhotos}
              folderName={folderName}
            />}
          />
          <Route path="/photo-slider" element={
            <SliderWindow
              selected={selected}
              allPhotoNames={allPhotoNames}
              isLoading={isLoading}
              setSliderWindowActive={setSliderWindowActive}
              startSiderFrom={startSiderFrom}
              baseUrlPhotos={baseUrlPhotos}
              folderName={folderName}
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
