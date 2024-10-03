import React from 'react'; 
import './giftcard.css'; 

const GiftCard = () => {
  return (
    <div className='gift-card'>
        <div className="gift-card-left">
            <h1>Gift cards</h1>
            <h2>Shop gift cards to redeem on Peloton equipment, accessories, and memberships.</h2>
            <button>Explore</button>
            <p>Redeemable at onepeloton.com and at participating Peloton stores only. Please note that these gift cards cannot be redeemed at apparel.onepeloton.com</p>
        </div>
        <div className="gift-card-right">
            <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3u157P4AS9qZt3KkDZuln0/58734dc8b02978d685e7b64531b41f1e/GC-product-block.jpg" alt="" />
        </div>
    </div>
  )
}

export default GiftCard