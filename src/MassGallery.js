import React, { useState, useEffect } from 'react';
import "./MassGallery.scss";
import { bring } from './PhotoContext';

const MassGallery = ({gallery, setSliderWindowActive, setStartSiderFrom}) => {

    console.log("MASS-GALLERY COMPONENT RE-RENDERED!!!!");

    const setSlidergallery = (event) => {
        setSliderWindowActive(true);
        setStartSiderFrom(parseInt(event.currentTarget.getAttribute('data-index')));
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
            <button onClick={handleRollUp}>{isRolledUp ? 'Show Gallery' : 'Hide Gallery'}</button>
            {!isRolledUp && 
                <div>
                    {photoUrls.map((image, index) => (
                        <img onClick={setSlidergallery} data-index={index} key={index} src={photoUrls[index]} alt={`Image ${image}`} />
                    ))}
                </div>
            }    
        </section>
    )
}

export default MassGallery;