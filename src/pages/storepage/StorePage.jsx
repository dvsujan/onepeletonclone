import React, { useContext, useEffect, useState } from "react";
import "./storepage.css";
import DataContext from "../../context/context";
import { useParams } from "react-router-dom";

const StorePage = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [storeImg, setStoreImg] = useState(
    "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,h_380,q_auto:good/https://www.onepeloton.com/static/media/default_hero_mobile_2x.d1353290..jpg"
  );
  useEffect(() => {
    if (data) {
      const store = data.find((store) => store.slug === id);
      if (!store) {
        window.location.href = "/404";
      }
      setStore(store);
      if (store.hero_image_url != "") {
        console.log(store.directory_image_url);
        setStoreImg(store.hero_image_url);
      }
    }
  }, [data]);

  return (
    <>
      {store && (
        <div className="store-page">
          <div className="showroom-hero">
            <div
              className="showroom-hero-text"
              style={{
                background: `url(${storeImg})`,
                backgroundSize: "100% 100%",
              }}
            >
              <h1>{store.display_city}</h1>
              <p className="mobile-hide">{store.display_name}</p>
              <button>Book an Appointment</button>
            </div>
          </div>
          <div className="store-info">
            <div className="store-info-left">
              <div className="store-info-top">
                <h2>{store.display_city}</h2>
                <h3>{store.display_street_address_1}</h3>
                <h4>
                  {store.display_city} , {store.display_postal_code}
                </h4>
              </div>
              <div className="store-info-bottom">
                <a href="#">Maps & direction</a>
                <a href="#">{store.shipping_phone_number}</a>
                <a href="#">{store.email}</a>
              </div>
            </div>
            <div className="store-info-right">
              <table className="hours-table">
                <tr>
                  <td>Mon:</td>
                  <td>{store.hours.mon}</td>
                </tr>
                <tr>
                  <td>Tue:</td>
                  <td>{store.hours.tue}</td>
                </tr>
                <tr>
                  <td>Wed:</td>
                  <td>{store.hours.wed}</td>
                </tr>
                <tr>
                  <td>Thu:</td>
                  <td>{store.hours.thu}</td>
                </tr>
                <tr>
                  <td>Fri:</td>
                  <td>{store.hours.fri}</td>
                </tr>
                <tr>
                  <td>Sat:</td>
                  <td>{store.hours.sat}</td>
                </tr>
                <tr>
                  <td>Sun:</td>
                  <td>{store.hours.sun}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StorePage;
