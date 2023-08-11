import React, { useState, useEffect } from 'react';
import "./MassGallery.scss";
import { fundamenty40, moniuszki40, taczow40 } from './PhotoContext';

const MassGallery = ({gallery, setSliderWindowActive, setStartSiderFrom}) => {

    const setSlidergallery = (event) => {
        setSliderWindowActive(true);
        setStartSiderFrom(parseInt(event.currentTarget.getAttribute('data-index')));
    }

    const photoUrlsArray = {
        gal_1: taczow40(), 
        gal_2: fundamenty40(), 
        gal_3: moniuszki40()
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