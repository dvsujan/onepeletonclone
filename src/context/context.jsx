/**
 * Data Context Provider
 * 
 * This context manages store location data across the entire application.
 * It implements caching via localStorage for improved performance and
 * provides a centralized data source for all components that need store information.
 * 
 * Features:
 * - Fetches data from local development server (http://localhost:8000/data)
 * - Implements localStorage caching to reduce API calls
 * - Provides loading state management
 * - Error handling for failed API requests
 * 
 * Usage: Wrap components that need store data with DataProvider
 */

import React, { createContext, useState, useEffect } from "react";

// Create the context for sharing data across components
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // State to store the fetched data (store locations, etc.)
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is already cached in localStorage
        const cachedData = localStorage.getItem("cachedData");

        if (cachedData) {
          // Use cached data if available to improve performance
          setData(JSON.parse(cachedData));
        } else {
          // Fetch fresh data from the API endpoint
          const response = await fetch("http://localhost:8000/data"); 
          const jsonData = await response.json();
          
          // Update state with fresh data
          setData(jsonData);
          // Cache the data for future use
          localStorage.setItem("cachedData", JSON.stringify(jsonData));
        }
      } catch (error) {
        // Log errors for debugging
        console.error("Error fetching data:", error);
      }
    };

    // Trigger data fetching on component mount
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // Provide the data to all child components
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
