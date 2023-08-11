import React, { useState, useEffect, memo } from 'react';
import { useImageIndex } from './ImageIndexContext';

import "./Projects.scss";

import photo1 from "./photos/annie-gray-WEWTGkPUVT0-unsplash_edit.jpg";
import photo2 from "./photos/avel-chuklanov-a0BEHFMKqTE-unsplash.jpg";
import photo3 from "./photos/josh-olalde-X1P1_EDNnok-unsplash.jpg";
import photo4 from "./photos/Lipowa100-2.jpg";
import photo5 from "./photos/milivoj-kuhar-Te48TPzdcU8-unsplash_edit.jpg";
import photo6 from "./photos/Osiedle-domow-blizniaczych-przy-ul.-Czechoslowackiej-w-Lodzi-2-800x450.jpg";
import photo7 from "./photos/ronnie-george-z11gbBo13ro-unsplash.jpg";
import photo8 from "./photos/vlad-yuhimchuk-1S1mk3uDDDA-unsplash.jpg";
import photo9 from "./photos/Main_slider.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

const Projects = memo(() => {

  const {
    currentImageIndex,
    setCurrentImageIndex,
    transformValue,
    updateTransform,
  } = useImageIndex();


  const style = {
    transform: `translateX(${transformValue}%)`,
    transition: 'transform 0.3s'
  };

  // Save currentImageIndex in session storage
  useEffect(() => {
    const storedIndex = sessionStorage.getItem('currentImageIndex');
    if (storedIndex) {
      setCurrentImageIndex(parseInt(storedIndex, 10));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('currentImageIndex', currentImageIndex);
  }, [currentImageIndex]);

  const previousImage = () => {
    if (currentImageIndex >= 3) {
     
      setCurrentImageIndex(currentImageIndex - 3);
      slideRight();
      
    }
  };

  const nextImage = () => {
    if (currentImageIndex <= photos.length - 6) {
      
      setCurrentImageIndex(currentImageIndex + 3);
      slideLeft();
      
   
    }
  };

  function slideLeft() {
    console.log("left slided");

    document.querySelector(".photos > div").classList.add("slideLeft");
    setTimeout( () => {document.querySelector(".photos > div").classList.remove("slideLeft");} , 250);
  }

  function slideRight() {
    console.log("RIGHT slided");

    document.querySelector(".photos > div").classList.add("slideRight");
    setTimeout( () => {document.querySelector(".photos > div").classList.remove("slideRight");} , 250);
  }

  const moveSlider = () => {

    const slider = document.getElementsByClassName("slider")[0];

    if (currentImageIndex < 3) {

     // slider.style.transform = "translateX(-100%)";
      updateTransform("-100");

    } else if ( currentImageIndex === 3 ) { 

     // slider.style.transform = "translateX(0)"; 
      updateTransform("0");
    } else if ( currentImageIndex > 3 ) {

    // slider.style.transform = "translateX(100%)";
      updateTransform("100");
    }
  }
  
  useEffect(() => {
   
      moveSlider();
    
  }, [currentImageIndex]);

  return (
    <section id="projects">
      <h2>Nasze Realizacje</h2>
  
      <div id="phSlider">
        <div className="sButton btnL" onClick={previousImage}></div>
  
        <div className="photos">
          <div>
            {photos && photos.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
            <img key={index} src={image} alt="" /> ) ) }
          </div>
        </div>
  
        <div className="sButton btnR" onClick={nextImage}></div>
  
        <div style={style} className="slider"></div>
      </div>
    </section>
  );

  
})

export default Projects;