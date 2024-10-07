import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import DataContext from "../../context/context";
import MarkerIcon from "../../assets/icons8-map-marker-50.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const data = useContext(DataContext);
  return (
    < >
      {data && (
        <MapContainer
        className="mobile-hide"
          center={[39.8283, -98.5795]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "50vh" }}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {data &&
            data.map((store, index) => (
              <Marker key={index} position={[store.latitude, store.longitude]}>
                <Popup>
                  <h1>{store.display_city}</h1>
                  <p>{store.display_name}</p>
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
