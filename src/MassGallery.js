import React, { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MassGallery.scss";
import { UserContext } from './App.js';
const MassGallery = () => {
    //console.log("MASS-GALLERY COMPONENT RE-RENDERED!!!!");

    const {
        selected,
        allPhotoNames,
        setSliderWindowActive,
        setStartSiderFrom,
        baseUrlPhotos,
        folderName
    } = useContext(UserContext);
    
    const lang = document.documentElement.lang;
    const navigate = useNavigate();
    const setSlidergallery = (event) => {
        setSliderWindowActive(true);
        setStartSiderFrom(parseInt(event.currentTarget.getAttribute('data-index')));
        navigate('/photo-slider');
    }


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
                    {allPhotoNames[selected] && allPhotoNames[selected].map((image, index) => (
                        <img
                            onClick={setSlidergallery}
                            data-index={index}
                            key={index}
                            src={baseUrlPhotos + "small/" + folderName[selected] + "/" + image}
                            alt={`Image ${image}`}
                        />
                    ))}
                </div>
            }    
        </section>
    )
}

export default MassGallery;
