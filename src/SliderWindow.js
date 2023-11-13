import React, { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "./SliderWindow.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ButtonSvg } from './buttons/button2.svg';
import './buttons/Button.scss';

import { UserContext } from './App';

import { ReactComponent as MySvg } from './svg/dor/X.svg';

const SliderWindow = memo(() => {

  const {
    setSliderWindowActive,
    startSiderFrom,
    selected,
    allPhotoNames,
    baseUrlPhotos,
    folderName
  } = useContext(UserContext);

    const lang = document.documentElement.lang;
    const navigate = useNavigate();

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
        slidesToShow: 1,
        slidesToScroll: 1,
      //  initialSlide: startSiderFrom,
        currentSlide: startSiderFrom,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
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
           // initialSlide: 1,
            },
        },
        ], 
    };

    return (
        <section id="sliderWindow">
          <h2>{(lang === "pl") ? "Galeria" : "Gallery"}</h2>  
          <button onClick={ () => {setSliderWindowActive(false); navigate('/');}}><MySvg /></button>
            <Slider {...settings}>
                {allPhotoNames[selected] && allPhotoNames[selected].map((image, index) => (
                  <div key={index} className='cont'>
                    <img
                      key={index}
                      src={baseUrlPhotos + "big/" + folderName[selected] + "/" + image}
                      alt=""
                    />
                  </div>
                ))}
            </Slider>
        </section>
    )
})

export default SliderWindow;
