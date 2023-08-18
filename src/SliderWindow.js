import React, { useState, useEffect, memo } from 'react';

import Slider from 'react-slick';
import { bring } from "./PhotoContext.js";

import "./SliderWindow.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as MySvg } from './svg/dor/X.svg';

const SliderWindow = memo( (props) => {

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
        <button {...props} className="custom-prev-arrow"></button>
    );
    const CustomNextArrow = (props) => (
        <button {...props} className="custom-next-arrow"></button>
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
           // initialSlide: 1,
            },
        },
        ], 
    }; 

    return (
        <section id="sliderWindow">
          <h2>Galeria</h2>  
          <button onClick={ () => {setSliderWindowActive(false)}}><MySvg /></button>
            <Slider {...settings}>
                {photoUrls.map((image, index) => (
                    <div className='cont'><img key={index} src={photoUrls[index]} alt={`Image ${image}`} /></div>
                ))}
            </Slider>
        </section>
    )
})

export default SliderWindow;