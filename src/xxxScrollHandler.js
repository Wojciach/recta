import { useEffect, useState } from 'react';

const ScrollHandler = ({ setViz }) => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("####/////SCROOOOOOL///////####");

      const sections = document.querySelectorAll('section');

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        const isVisible = () => {
          if ((rect.top < window.innerHeight * 0.8) && (rect.top > 0)) {
            return true;
          } else if (((rect.bottom > window.innerHeight * 0.25) && (rect.top < window.innerHeight * 0.8)) && (rect.bottom > 0)) {
            return true;
          } else {
            return false;
          }
        };

        if (isVisible() === true) {
          setViz((prevViz) => {
            const newViz = new Set(prevViz);
            newViz.add(section.id);
            return newViz;
          });

        } else {
          setViz((prevViz) => {
            const newViz = new Set(prevViz);
            newViz.delete(section.id);
            return newViz;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [setViz]);

  return null;
};

export default ScrollHandler;
