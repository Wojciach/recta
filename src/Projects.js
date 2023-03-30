import React, { useState, useEffect } from 'react';
import "./Projects.scss";



const Projects = () => {

  

        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const images = [
          'annie-gray-WEWTGkPUVT0-unsplash_edit.jpg',
          'avel-chuklanov-a0BEHFMKqTE-unsplash.jpg',
          'josh-olalde-X1P1_EDNnok-unsplash.jpg',
          'Lipowa100-2.jpg',
          'milivoj-kuhar-Te48TPzdcU8-unsplash_edit.jpg',
          'Osiedle-domow-blizniaczych-przy-ul.-Czechoslowackiej-w-Lodzi-2-800x450.jpg',
          'ronnie-george-z11gbBo13ro-unsplash.jpg',
          'vlad-yuhimchuk-1S1mk3uDDDA-unsplash.jpg',
          'Main_slider.jpg'

        ];
        


        //const [loadedImages, setLoadedImages] = useState([]);
        
        const photos = [];

        for (let i = 0; i < 9; i++) {
            const photo = require(`./photos/${images[i]}`);
            photos.push(photo);
          }
      
        const previousImage = () => {
          if (currentImageIndex >= 3) {
            setCurrentImageIndex(currentImageIndex - 3);
            slideRight();
          }
        };
      
        const nextImage = () => {
            
          if (currentImageIndex <= images.length - 6) {
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
    

    useEffect(()=>{
      console.log(currentImageIndex);
      if (currentImageIndex < 3) {
        document.getElementsByClassName("slider")[0].classList.remove("trCenter");
        document.getElementsByClassName("slider")[0].classList.remove("trRight");
        document.getElementsByClassName("slider")[0].classList.add("trLeft");
          



      } else if ( currentImageIndex > 3 ) {
        document.getElementsByClassName("slider")[0].classList.remove("trCenter");
        document.getElementsByClassName("slider")[0].classList.remove("trLeft");
        document.getElementsByClassName("slider")[0].classList.add("trRight");
         
         

          
      } else if (currentImageIndex == 3 ) {
        document.getElementsByClassName("slider")[0].classList.remove("trRight");
        document.getElementsByClassName("slider")[0].classList.remove("trLeft");
        document.getElementsByClassName("slider")[0].classList.add("trCenter");
         


      }

    })



    return (
        <section id="projects">
            <h2>Nasze Realizacje</h2>

            <div id="phSlider">

                <div className="sButton btnL" onClick={previousImage}></div>

                <div className="photos">
                    <div>
                      {photos.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
                      <img key={index} src={image} alt="" /> ) ) }
                    </div>
                </div>

                <div className="sButton btnR" onClick={nextImage}></div>


                <div className="slider trCenter"></div>
            </div>

        </section>
    )
}

export default Projects;