import React from 'react'
import graphic from '../../assets/graphic.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header1'>
        <div className='header2'>
            <div className='top'>
                <p>Launching Soon</p>
            </div>

            <h1 className='heading'>An NFT like no other</h1>
            <p>Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
        
            <div className='signup'>
                <button> Sign Up </button>
            </div>
        </div>


        <div className='image'>
            <img src={graphic} alt='graphic'/>
        </div>
    </div>
  )
}

export default Header