/**
 * Map Component
 * 
 * Interactive map component for displaying Peloton store locations using React Leaflet.
 * This component integrates with the DataContext to show store markers on a map
 * with custom styling and interactive popups.
 * 
 * Features:
 * - Interactive markers for each store location
 * - Custom red markers with Leaflet integration
 * - Popup windows with store information
 * - Responsive design (hidden on mobile)
 * - Controlled interaction (disabled zooming/dragging for UX)
 * - Links to individual store pages
 * 
 * Dependencies:
 * - React Leaflet for map functionality
 * - Leaflet CSS for styling
 * - DataContext for store location data
 * - Custom marker icons
 * 
 * Map Configuration:
 * - Centered on the United States (39.8283, -98.5795)
 * - Initial zoom level 4 (country view)
 * - CartoDB light theme for clean appearance
 * - Disabled interactions for controlled UX
 */

import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import DataContext from "../../context/context";
import MarkerIcon from "../../assets/icons8-map-marker-50.png"; // TODO: Remove unused import

// Fix for default marker icons in webpack builds
delete L.Icon.Default.prototype._getIconUrl;

// Configure custom red markers for store locations
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  // Access store data from global context
  const data = useContext(DataContext);
  
  return (
    <>
      {/* Render map only when data is available */}
      {data && (
        <MapContainer
          className="mobile-hide"  // Hidden on mobile devices for better UX
          center={[39.8283, -98.5795]}  // Geographic center of United States
          zoom={4}  // Country-level zoom
          scrollWheelZoom={false}  // Disable scroll zooming
          style={{ width: "100%", height: "50vh" }}  // Responsive dimensions
          dragging={false}  // Disable map dragging
          touchZoom={false}  // Disable touch zooming
          doubleClickZoom={false}  // Disable double-click zooming
        >
          {/* Base map layer using CartoDB light theme */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Render markers for each store location */}
          {data &&
            data.map((store, index) => (
              <Marker 
                key={index} 
                position={[store.latitude, store.longitude]}
              >
                {/* Interactive popup with store information */}
                <Popup>
                  <h1>{store.display_city}</h1>
                  <p>{store.display_name}</p>
                  {/* Link to individual store page */}
                  <a href={`/showrooms/${store.slug}`}>View Store</a>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </>
  );
};

export default MapComponent;

export default MapComponent;
