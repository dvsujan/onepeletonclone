import React, { createContext, useState, useEffect } from "react";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("cachedData");

        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          const response = await fetch("http://localhost:8000/data"); 
          const jsonData = await response.json();
          
          setData(jsonData);
          localStorage.setItem("cachedData", JSON.stringify(jsonData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
