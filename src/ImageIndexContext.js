import { createContext, useContext, useState } from 'react';

const ImageIndexContext = createContext();

export const useImageIndex = () => {
  return useContext(ImageIndexContext);
};

export const ImageIndexProvider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const value = { currentImageIndex, setCurrentImageIndex };

  return (
    <ImageIndexContext.Provider value={value}>
      {children}
    </ImageIndexContext.Provider>
  );
};
