import React from 'react'
import './Upsell.css' 
import icon2 from '../../assets/icon2.png';
import graphic2 from '../../assets/graphic2.png';

const upsell = () => {
  return (
    <div className='rectangle'>
        <div className='content'>
            <img src={icon2} alt='icon' />
            <h1>Free NFT for early birds</h1>
            <p>Sign up today and you’ll get a free NFT when we launch.</p>
        </div>
        <div className='graphic'>
            <img src={graphic2} alt='graphic2' />
        </div>
    </div>
  )
}

export default upsell