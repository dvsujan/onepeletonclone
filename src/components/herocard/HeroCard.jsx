/**
 * Hero Card Component
 * 
 * A reusable product card component used to display Peloton products
 * in the hero section. Each card shows a product image and name.
 * 
 * Props:
 * @param {string} prodimg - URL to the product image
 * @param {string} prodname - Display name of the product
 * 
 * Features:
 * - Responsive image display
 * - Clean, minimalist design
 * - Consistent styling across all product cards
 * 
 * Usage: Used in LandingPage hero section to showcase main products
 */

import React from 'react'
import './herocard.css'

const HeroCard = (props) => {
  return (
    <div className="hero-card">
        {/* Product image with alt text for accessibility */}
        <img src={props.prodimg} alt={`${props.prodname} product`} />
        {/* Product name display */}
        <p>{props.prodname}</p>
    </div>
    
  )
}

export default HeroCard