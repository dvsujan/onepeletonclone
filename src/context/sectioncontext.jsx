import React, { createContext, useState, useContext } from 'react';

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};