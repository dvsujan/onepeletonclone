/**
 * Section Context Provider
 * 
 * This context tracks the current page section for navigation highlighting
 * and scroll-based interactions. It's used to manage which section of the
 * page is currently active or in view.
 * 
 * Features:
 * - Tracks current section state
 * - Provides section update functionality
 * - Used for navigation state management and scroll indicators
 * 
 * Usage: 
 * - Wrap components that need section tracking with SectionProvider
 * - Use useSection hook to access current section and update function
 */

import React, { createContext, useState, useContext } from 'react';

// Create context for section tracking
const SectionContext = createContext();

/**
 * Custom hook to access section context
 * Provides easy access to current section and section setter
 */
export const useSection = () => useContext(SectionContext);

/**
 * Section Provider Component
 * Manages the current section state and provides it to child components
 */
export const SectionProvider = ({ children }) => {
  // State to track the currently active section (null by default)
  const [currentSection, setCurrentSection] = useState(null);

  // Context value containing both state and setter
  const contextValue = {
    currentSection,      // Current active section identifier
    setCurrentSection    // Function to update the current section
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};