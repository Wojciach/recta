import { Route, Routes } from 'react-router-dom';
import React, { useState, useRef, useEffect, createContext } from 'react';
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

import useCustomFetch from './functionsAndData/useCustomFerch.js';

export const UserContext = createContext();

function App() {
  //console.log("APP COMPONENT RE-RENDERED!!!!");

  const [selected, setSelected] = useState('gal_1');
  const [allPhotoNames, setAllPhotoNames] = useState({test: "test"});
  const [sliderWindowActive, setSliderWindowActive] = useState(false);
  const [startSiderFrom, setStartSiderFrom] = useState(0);

  const refArr = useRef([]);
  //where to fetch photos from
 // const imagesFolderDev = "http://localhost/recta2/recta2/public/photos/MassGalleries/";
  const imagesFolderProd = "https://recta.website/photos/MassGalleries/";
  const baseUrlPhotos = imagesFolderProd;

  const folderName = {
    gal_1: "Taczow",
    gal_2: "Fundamenty",
    gal_3: "Moniuszki"
  };
  
  function selectThis(event) {
    setSelected(event.currentTarget.id);
  }

  const data = useCustomFetch();
  useEffect(() => {
    if(data !== null) {
      setAllPhotoNames(data);
    }
  }, [data]);

  return (
    <UserContext.Provider 
      value={{
        selected,
        setSelected,
        allPhotoNames,
        startSiderFrom,
        setStartSiderFrom,
        baseUrlPhotos,
        folderName,
        setSliderWindowActive,
        selectThis

      }}>
    <main className="App">
      { sliderWindowActive === false &&
          <header>
            <Menu />
            <Header />
          </header> 
      }
        <Routes>
          <Route exact path="/" element={
            <HomeScreen refArr={refArr} />}
          />
          <Route path="/services" element={
            <ServicesScreen refArr={refArr} />}
          />
          <Route path="/photo-slider" element={
            <SliderWindow />
          }/>
        </Routes>
        { sliderWindowActive === false && <ContactForm /> }
        { sliderWindowActive === false && <Map /> }

        { sliderWindowActive === false &&
          <footer>
            <Footer />
          </footer> 
        }
        <TopScrollBtn />
    </main>
    </UserContext.Provider>
  );
}

export default App;
