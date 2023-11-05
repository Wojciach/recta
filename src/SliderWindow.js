import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { bring } from "./PhotoContext.js";
import "./SliderWindow.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ButtonSvg } from './buttons/button2.svg';
import './buttons/Button.scss';

import { ReactComponent as MySvg } from './svg/dor/X.svg';

const SliderWindow = memo( (props) => {
    const lang = document.documentElement.lang;
    const navigate = useNavigate();
    const setSliderWindowActive = props.setSliderWindowActive;
    const startSiderFrom = props.startSiderFrom;
    const selected = props.selected;

    const photoUrlsArray = {
        gal_1: bring("taczow"), 
        gal_2: bring("fundamenty"), 
        gal_3: bring("moniuszki")
    };

    const photoUrls = photoUrlsArray[selected];

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
                {photoUrls.map((image, index) => (
                    <div className='cont'><img key={index} src={photoUrls[index]} alt={`Image ${image}`} /></div>
                ))}
            </Slider>
        </section>
    )
})

export default SliderWindow;