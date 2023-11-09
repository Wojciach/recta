import React from 'react';

import { ProjectsProvider } from './ProjectsContext';

import SerDetails from './SerDetails.js';
import OurProjects from './OurProjects.js';
import MassGallery from './MassGallery.js';

const ServicesScreen = React.memo(({
    allPhotoNames,
    selected,
    setSliderWindowActive,
    setStartSiderFrom,
    selectThis,
    refArr
}) => {
    console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <ProjectsProvider>
        <SerDetails refArr={refArr}/>
        <OurProjects selected={selected} selectThis={selectThis} />
        <MassGallery
          selected={selected}
          allPhotoNamess={allPhotoNames}
          gallery={selected}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
        />
      </ProjectsProvider>
    );
  });

  export default ServicesScreen;