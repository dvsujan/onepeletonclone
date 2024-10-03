import React from 'react'; 
import './productcard.css'; 

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        <h1>
            {props.name}
        </h1>
        <p>
            {props.description}
        </p>
        <p className='product-card-price'>
            {props.price?? <p> $ {props.price}</p>}
        </p>
        <span>
            <button>Explore</button>
            <a href='#'>Shop Now</a>
        </span>
        <p className='prod-subs'>
            {props.subscription} 
        </p>
        <img src={props.image} alt='lol'/>
    </div>
  )
}

export default ProductCard