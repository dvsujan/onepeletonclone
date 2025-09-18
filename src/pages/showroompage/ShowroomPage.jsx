/**
 * Showroom Page Component
 * 
 * The store locator page that allows users to find and explore Peloton stores.
 * This page integrates with the DataContext to display store information and
 * provides an interactive map experience.
 * 
 * Features:
 * - Data-driven content from DataContext
 * - Loading state management with animated loader
 * - Interactive map component for store locations
 * - Store location listings
 * - Responsive design with mobile considerations
 * - Appointment booking call-to-action
 * 
 * Data Dependencies:
 * - Requires data from DataContext (store locations)
 * - Shows loading screen until data is available
 * 
 * Components:
 * - MapComponent: Interactive Leaflet map
 * - ShowroomLocations: List of store locations
 */

import React, { useContext, useEffect, useState } from "react";
import "./showroom.css";
import MapComponent from "../../components/mapcomponent/MapComponent";
import DataContext from "../../context/context";
import ShowroomLocations from "../../components/showroomlocations/ShowroomLocations";

const ShowroomPage = () => {
  // Access store data from context
  const data = useContext(DataContext);
  
  return (
    <>
      {/* Conditional rendering based on data availability */}
      {data ? (
        // Main content when data is loaded
        <div className="showroom-page">
          {/* Hero section with main messaging */}
          <div className="showroom-hero">
            <div className="showroom-hero-text">
              <h1>Find a Peloton store</h1>
              {/* Description hidden on mobile devices */}
              <p className="mobile-hide">
                Visit a store to talk with our expert team members or book an
                appointment to experience Peloton firsthand.
              </p>
              {/* Call-to-action for appointment booking */}
              <button>Book an Appointment</button>
            </div>
          </div>
          
          {/* Interactive map showing store locations */}
          <MapComponent />
          
          {/* List of store locations with details */}
          <ShowroomLocations />
        </div>
      ) : (
        // Loading state while data is being fetched
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default ShowroomPage;
