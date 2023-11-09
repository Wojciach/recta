import React, { memo } from 'react';
import Slider from 'react-slick';
import "./OurProjects.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ButtonSvg } from './buttons/button2.svg';
import './buttons/Button.scss';
import photo1 from "./photos/MassGalleries/Fundamenty40/20221027_142832.jpg";
import photo2 from "./photos/MassGalleries/Moniuszki40/20220617_163422.jpg";
import photo3 from "./photos/MassGalleries/Taczow40/20200529_170847.jpg";

const OurProjects = memo(({selected, selectThis}) => {
  //console.log("OUR-PROJECTS COMPONENT RE-RENDERED!!!!");

  const lang = document.documentElement.lang;
  
  const CustomPrevArrow = (props) => (
    <button {...props} className="universalBtn custom-prev-arrow">
      <div style={{ transform: 'rotate(0deg)' }}>
        <ButtonSvg />
      </div>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="universalBtn custom-next-arrow">
      <div style={{transform: 'rotate(180deg)'}}>
        <ButtonSvg />
      </div>
    </button>
  );

const settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ], 
  }; 

    return (
      <section id="ourProjects">
        <h2>{(lang === "pl") ? "Nasze Projekty" : "Our Projects"}</h2>
          <Slider {...settings}>
              <div id='gal_1' className={`my-div ${"gal_1" === selected ? 'selected' : ''}`} 
                    onClick={selectThis}>
                  <div className='tint'>
                    <img src={photo1} alt="Image 1" />
                    <div className='overlay'></div>
                  </div>
                  <h4>{(lang === "pl") ? "Budowa Taczów" : "Taczów Construction"}</h4>
              </div>
              <div id='gal_2' className={`my-div ${"gal_2" === selected ? 'selected' : ''}`} 
                    onClick={selectThis}>
                  <div className='tint'>
                    <img src={photo2} alt="Image 2" />
                    <div className='overlay'></div>
                  </div>
                  <h4>{(lang === "pl") ? "Fundamenty" : "Foundations"}</h4>
              </div>
              <div id='gal_3' className={`my-div ${"gal_3" === selected ? 'selected' : ''}`} 
                    onClick={selectThis}>
                  <div className='tint'>
                    <img src={photo3} alt="Image 3" />
                    <div className='overlay'></div>
                  </div>
                  <h4>{(lang === "pl") ? "Budowa Moniuszki" : "Moniuszki Construction"}</h4>
              </div>
          </Slider>
      </section>
    )
})

export default OurProjects;