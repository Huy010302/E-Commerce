import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descriptionbox</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>A durable, protective garment designed to keep the wearer warm and
          shielded from harsh environments. This jacket is crafted from tough,
          weather-resistant materials, making it ideal for braving the elements
          or surviving in challenging conditions. In the game, wearing the jacket
          might grant the player extra defense against certain attacks or environmental
          hazards, or even provide temporary immunity to freezing effects.</p>
        <p>This rugged jacket is more than just a piece of clothing—it's a crucial
           survival tool. Lined with thermal insulation and reinforced with padded layers, 
           the jacket provides enhanced protection against cold climates and physical impacts. 
           It’s designed with multiple pockets, perfect for storing small items or tools that might be useful on your journey. In-game, equipping the jacket could reduce damage from certain types of attacks or lessen the effects of environmental challenges, making it an essential item for any explorer.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox