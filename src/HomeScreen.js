import React from 'react';

import Services from "./Services.js";
import CompanyDescription from './CompanyDescription.js';
import Opinions from "./Opinions.js";
import OurProjects from './OurProjects.js';
import MassGallery from './MassGallery.js';
import News from './News.js';

const HomeScreen = React.memo(({ refArr }) => {
   // console.log("HOME_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <>
        <Services refArr={refArr}/>
        <CompanyDescription />
        <Opinions />
        <OurProjects />
        <MassGallery />
        <News />
      </>
    );
  });

  export default HomeScreen;
  