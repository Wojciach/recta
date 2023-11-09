import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MassGallery.scss";
import { bring } from './PhotoContext';

const MassGallery = ({
    allPhotoNames,
    isLoading,
    selected,
    gallery,
    setSliderWindowActive,
    setStartSiderFrom
}) => {
    //console.log("MASS-GALLERY COMPONENT RE-RENDERED!!!!");
    console.log(allPhotoNames);
    const[photos, setPhotos] = useState([]);
    
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

    const baseUrlDev = "http://localhost/recta2/recta2/public/photos/MassGalleries/small/";

    const folderName = {
        gal_1: "Taczow",
        gal_2: "Fundamenty",
        gal_3: "Moniuszki"
    };

    const photoUrls = photoUrlsArray[gallery];

    const [isRolledUp, setIsRolledUp] = useState(false);
    const handleRollUp = () => {
        setIsRolledUp(!isRolledUp);
    }

    useEffect(() => {
        console.log(allPhotoNames[selected]);
    }, [allPhotoNames, selected])

    if (isLoading) {
        return <div>Loading...</div>;
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
                    {(allPhotoNames[selected]) && allPhotoNames[selected].map((image, index) => (
                        <img
                            onClick={setSlidergallery}
                            data-index={index}
                            key={index}
                            src={baseUrlDev + folderName[selected] + "/" + allPhotoNames[selected][index]}
                            alt={`Image ${image}`}
                        />
                    ))}
                </div>
            }    
        </section>
    )
}

export default MassGallery;
