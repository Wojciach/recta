import React from 'react';

import SerDetails from './SerDetails.js';
import OurProjects from './OurProjects.js';
import MassGallery from './MassGallery.js';

const ServicesScreen = React.memo(({ refArr }) => {
   // console.log("SERVICE_SCREEN COMPONENT RE-RENDERED!!!!");

    return (
      <>
        <SerDetails refArr={refArr}/>
        <OurProjects />
        <MassGallery />
      </>
    );
  });

  export default ServicesScreen;
