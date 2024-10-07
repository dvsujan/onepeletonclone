import React, { useContext, useEffect, useState } from "react";
import "./showroomlocations.css";
import LocationCard from "../LocationCard/LocationCard";
import DataContext from "../../context/context";

const ShowroomLocations = () => {
  const data = useContext(DataContext);
  const [groupedData, setGroupedDat] = useState([]);
  useEffect(() => {
    if (data) {
      const gd = data.reduce((acc, store) => {
        const region = store.region || "Unknown";
        if (!acc[region]) {
          acc[region] = [];
        }
        acc[region].push(store);
        return acc;
      }, {});
      setGroupedDat(gd);
    }
  }, [data]);

  return (
    <div>
      <div className="showroom-locations-header">
        <h1>Locations</h1>
      </div>
      {groupedData &&
        Object.keys(groupedData).map((region) => {
          if (region === "Unknown" || region == "None") {
            return null;
          } else {
            return (
              <div key={region}>
                <hr className="state-hr"></hr>
                <h2 className="state-name">{region}</h2>
                <div className="showroom-locations">
                  {groupedData[region].map((location, index) => (
                    <LocationCard
                      key={index}
                      city={location.display_city}
                      name={location.display_name}
                      street={location.display_street_address_1}
                      metatitle={location.name}
                      phnum={location.shipping_phone_number}
                      slug={location.slug}
                    />
                  ))}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default ShowroomLocations;
