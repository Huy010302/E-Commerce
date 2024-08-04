import React from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import hero from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>new</p>
                    <img src={handicon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt="" />
                
            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero