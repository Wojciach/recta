import React from 'react';
import Services from './Services';
import Projects from './Projects';
import ContactForm from './ContactForm';
import Map from './Map';

const MainLayout = React.memo(({ children }) => {
  return (
    <>
      <Services />
      {children}
      <Projects />
      <ContactForm />
      <Map />
    </>
  );
});

export default MainLayout;
