import React from "react";
import "./locationcard.css";

const LocationCard = (props) => {
  return (
    <div class="location-container">
      <h1>{props.city}</h1>
      <p>{props.name}</p>
      <hr></hr>
      <address>
        <span>{props.street} </span><br></br><span>{props.metatitle}</span><br></br> <span>{props.phnum}</span>
      </address>
    </div>
  );
};

export default LocationCard;
