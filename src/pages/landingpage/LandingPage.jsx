import React from "react";
import "./landingpage.css";
import HeroCard from "../../components/herocard/HeroCard";
import WorkoutSection from "../../components/workoutsection/WorkoutSection";
import ProductSection from "../../components/productsection/ProductSection";
import GiftCard from "../../components/giftcard/GiftCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p>Peloton Tread & Tread+</p>
            <h1>Walk it out with our wide range of walking classes</h1>
            <span>
              <button className="hero-btn thread-btn">Shop Thread</button>
              <button className="hero-btn threadp-btn">Shop Thread+</button>
            </span>
          </div>
        </div>
        <div className="hero-products">
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png"
            prodname="Bike"
          />
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png"
            prodname="Bike+"
          />
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/4D6LcrY5vDyDhoAbytzY40/bfad74751baf27e69d0fe39147ab1a0d/Peloton_Row_BellyBand.png"
            prodname="Row"
          />
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png"
            prodname="Bike"
          />
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png"
            prodname="Bike"
          />
          <HeroCard
            prodimg="https://images.ctfassets.net/7vk8puwnesgc/25rzIyGV8UqvoN79I2AOGU/8e59018081f7decb2fb71a63b497f111/bike-plus-belly.png"
            prodname="Bike"
          />
        </div>
      </div>
      <WorkoutSection />
      <ProductSection />
      <GiftCard/>
    </div>
  );
};

export default LandingPage;
