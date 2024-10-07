import React from "react";
import "./locationcard.css";

const LocationCard = (props) => {
  return (
    <div class="location-container" onClick={()=>window.location.href="/showrooms/"+props.slug}>
      <h1>{props.city}</h1>
      <p>{props.name}</p>
      <hr className="mobile-hide"></hr>
      <address className="mobile-hide">
        <span>{props.street} </span><br></br><span>{props.metatitle}</span><br></br> <span>{props.phnum}</span>
      </address>
    </div>
  );
};

export default LocationCard;
