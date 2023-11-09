import React, { useState, useRef, useEffect } from 'react';

import { ProjectsProvider } from './ProjectsContext';

import Services from "./Services.js";
import CompanyDescription from './CompanyDescription.js';
import Opinions from "./Opinions.js";
import OurProjects from './OurProjects.js';
import MassGallery from './MassGallery.js';
import News from './News.js';

const HomeScreen = React.memo(({
    isLoading,
    allPhotoNames,
    selected,
    setSliderWindowActive,
    setStartSiderFrom,
    selectThis,
    refArr
}) => {
   // console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ProjectsProvider>
        <Services refArr={refArr}/>
        <CompanyDescription />
        <Opinions />
        <OurProjects selected={selected} selectThis={selectThis}/>
        <MassGallery
          selected={selected}
          allPhotoNames={allPhotoNames}
          gallery={selected}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
        />
        <News />
      </ProjectsProvider>
    );
  });

  export default HomeScreen;