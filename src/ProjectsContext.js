import { createContext, useContext, useState } from 'react';

const ProjectsContext = createContext();

function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
}

function ProjectsProvider({ children }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  const value = {
    currentImageIndex,
    setCurrentImageIndex,
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export { ProjectsProvider, useProjects };
