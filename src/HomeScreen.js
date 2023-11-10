import React from 'react';

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
    refArr,
    baseUrlPhotos,
    folderName
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
          isLoading={isLoading}
          selected={selected}
          selectThis={selectThis}
          allPhotoNames={allPhotoNames}
          setSliderWindowActive={setSliderWindowActive}
          setStartSiderFrom={setStartSiderFrom}
          baseUrlPhotos={baseUrlPhotos}
          folderName={folderName}
        />
        <News />
      </ProjectsProvider>
    );
  });

  export default HomeScreen;