import React from 'react';

import { ProjectsProvider } from './ProjectsContext';

import SerDetails from './SerDetails.js';
import OurProjects from './OurProjects.js';
import MassGallery from './MassGallery.js';

const ServicesScreen = React.memo(({
    isLoading,
    allPhotoNames,
    selected,
    setSliderWindowActive,
    setStartSiderFrom,
    selectThis,
    refArr,
    baseUrlPhotos,
    folderName
}) => {
   // console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ProjectsProvider>
        <SerDetails refArr={refArr}/>
        <OurProjects selected={selected} selectThis={selectThis} />
        <MassGallery
          isLoading={isLoading}
          selected={selected}
          selectThis={selectThis}
          allPhotoNames={allPhotoNames}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
          baseUrlPhotos={baseUrlPhotos}
          folderName={folderName}
        />
      </ProjectsProvider>
    );
  });

  export default ServicesScreen;
