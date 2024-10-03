import React from 'react'
import './herocard.css'

const HeroCard = (props) => {
  return (
    <div className="hero-card">
        <img src={props.prodimg} alt="" />
        <p>{props.prodname}</p>
    </div>
    
  )
}

export default HeroCard