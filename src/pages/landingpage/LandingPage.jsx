/**
 * Landing Page Component
 * 
 * The main homepage component that showcases Peloton products and features.
 * This page serves as the primary entry point for users and contains multiple
 * sections including hero content, product showcase, blog content, and promotional areas.
 * 
 * Structure:
 * 1. Hero Section - Main promotional content with product cards
 * 2. WorkoutSection - Workout-related content and features
 * 3. ProductSection - Detailed product showcase
 * 4. GiftCard - Gift card promotional section
 * 5. BlogSection - Blog content and instructor finder
 * 6. PeletonTrail - Trial promotion and call-to-action
 * 7. TCSection - Terms and conditions
 * 
 * Features:
 * - Responsive design for all screen sizes
 * - Product showcase with interactive cards
 * - Call-to-action buttons for product purchases
 * - Integration with multiple content sections
 */

import React from "react";
import "./landingpage.css";
import HeroCard from "../../components/herocard/HeroCard";
import WorkoutSection from "../../components/workoutsection/WorkoutSection";
import ProductSection from "../../components/productsection/ProductSection";
import GiftCard from "../../components/giftcard/GiftCard";
import BlogSection from "../../components/blogsection/BlogSection";
import PeletonTrail from "../../components/peletontrail/PeletonTrail";
import TCSection from "../../components/tcsection/TCSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section: Main promotional area with product showcase */}
      <div className="hero-section" sectionId="transprent" >
        <div className="hero-content">
          <div className="hero-text">
            {/* Main hero messaging focusing on Tread products */}
            <p>Peloton Tread & Tread+</p>
            <h1>Walk it out with our wide range of walking classes</h1>
            <span>
              {/* Call-to-action buttons for different Tread products */}
              <button className="hero-btn thread-btn">Shop Thread</button>
              <button className="hero-btn threadp-btn">Shop Thread+</button>
            </span>
          </div>
        </div>
        
        {/* Product Cards Section: Showcases main Peloton products */}
        <div className="hero-products">
          {/* Primary product cards - showcasing different Peloton equipment */}
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
          {/* Additional product showcases */}
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
      
      {/* Content Sections: Various promotional and informational areas */}
      <WorkoutSection />    {/* Workout content and features */}
      <ProductSection />    {/* Detailed product information */}
      <GiftCard/>          {/* Gift card promotions */}
      <BlogSection/>       {/* Blog content and instructor finder */}
      <PeletonTrail/>      {/* Trial promotion and app features */}
      <TCSection/>         {/* Terms and conditions */}
    </div>
  );
};

export default LandingPage;
