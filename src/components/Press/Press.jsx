import React from 'react'
import './Press.css' 
import boomerang from '../../assets/boomerang.png';
import blimp from '../../assets/blimp.png';
import qrco from '../../assets/qrco.png'
import opendoor from '../../assets/opendoor.png'
import droplet from '../../assets/droplet.png'
import boom from '../../assets/boom.png'

const Press = () => {
  return (
    <div>
        <div className='graphics'>
            <img src={boomerang} alt='graphic2_1' />
            <img src={blimp} alt='graphic2_2' />
            <img src={qrco} alt='graphic2_3' />
            <img src={opendoor} alt='graphic2_4' />
            <img src={droplet} alt='graphic2_5' />
        </div>
        <div className='graphics2'>
            <div className='class1'>
                <div className='boom'>
                    <img src={boom} alt='boom' />
                </div>
                <div className='blimp'>
                    <img src={blimp} alt='blimp' />
                </div>
            </div>
            <div className='class2'>
                <div className='qrco'>
                    <img src={qrco} alt='qrco' />
                </div>
                <div className='droplet'>
                    <img src={droplet} alt='droplet' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Press