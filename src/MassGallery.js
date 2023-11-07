import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MassGallery.scss";
import { bring } from './PhotoContext';

const MassGallery = ({galleryUrls, gallery, setSliderWindowActive, setStartSiderFrom}) => {
    //console.log("MASS-GALLERY COMPONENT RE-RENDERED!!!!");

    const[photos, setPhotos] = useState([]);
    console.log(galleryUrls) ;
    const lang = document.documentElement.lang;
    const navigate = useNavigate();
    const setSlidergallery = (event) => {
        setSliderWindowActive(true);
        setStartSiderFrom(parseInt(event.currentTarget.getAttribute('data-index')));
        navigate('/photo-slider');
    }

    const photoUrlsArray = {
        gal_1: bring("taczow40"), 
        gal_2: bring("fundamenty40"), 
        gal_3: bring("moniuszki40")
    };

    const photoUrls = photoUrlsArray[gallery];
    const [isRolledUp, setIsRolledUp] = useState(false);
    const handleRollUp = () => {
        setIsRolledUp(!isRolledUp);
    }
    
    return(
        <section id="massGallery">
             {(lang === "pl") && (
                <button onClick={handleRollUp}>
                    {isRolledUp ? 'Pokaż Galerię' : 'Ukryj Glerię'}
                </button>
            )}
            {(lang === "en") && (
                <button onClick={handleRollUp}>
                    {isRolledUp ? 'Show Gallery' : 'Hide Gallery'}
                </button>
            )}
            {!isRolledUp && 
                <div>
                    {(typeof galleryUrls !== 'undefined') && galleryUrls.map((image, index) => (
                        <img
                            onClick={setSlidergallery}
                            data-index={index}
                            key={index}
                            src={galleryUrls[index]}
                            alt={`Image ${image}`}
                        />
                    ))}
                </div>
            }    
        </section>
    )
}

export default MassGallery;
