import React, { useContext } from "react";
import "./showroomlocations.css";
import LocationCard from "../LocationCard/LocationCard";
import DataContext from "../../context/context";

const ShowroomLocations = () => {
  const data = useContext(DataContext);

  return (
    <div>
        <div className="showroom-locations-header"> 
            <h1>Locations</h1>
        </div>
      <div className="showroom-locations">
        {data &&
          data.map((location, index) => (
            <LocationCard
              key={index}
              city={location.display_city}
              name={location.display_name}
              street={location.display_street_address_1}
              metatitle={location.name}
              phnum={location.shipping_phone_number}
            />
          ))}
      </div>
    </div>
  );
};

export default ShowroomLocations;
