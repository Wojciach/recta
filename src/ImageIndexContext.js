import { createContext, useContext, useState } from 'react';

const ImageIndexContext = createContext();

export const useImageIndex = () => {
  return useContext(ImageIndexContext);
};

export const ImageIndexProvider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const [transformValue, setTransformValue] = useState("100");

  const updateTransform = (value) => {
    setTransformValue(value);
  };

  const value = {
    currentImageIndex,
    setCurrentImageIndex,
    transformValue,
    updateTransform,
  };

  return (
    <ImageIndexContext.Provider value={value}>
      {children}
    </ImageIndexContext.Provider>
  );
};
