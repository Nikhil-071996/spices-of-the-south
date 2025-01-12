import React from 'react'

import uberEats from '../assets/images/contact/uber-eats-white.svg'
import doorDash from '../assets/images/contact/doordash-icon.svg'
import menuLog from '../assets/images/contact/menulog.svg'
import facebook from '../assets/images/contact/facebook-icon.svg'
import whatsapp from '../assets/images/contact/whatsapp-icon.svg'
import twitter from '../assets/images/contact/twitter-icon.svg'
import linkedIn from '../assets/images/contact/linkedIn-icon.svg'

function SocialMediaSection() {
  return (
    <div className="social-media-footer">
    
            <div className="image-container">
                <img src={uberEats} alt="uberEats" />
            </div>

            <div className="image-container">
                <img src={doorDash} alt="doorDash" />
            </div>

            <div className="image-container">
                <img src={menuLog} alt="menuLog" />
            </div>

            <div className="image-container">
                <img src={facebook} alt="facebook" />
            </div>

            <div className="image-container">
                <img src={whatsapp} alt="whatsapp" />
            </div>

            <div className="image-container">
                <img src={twitter} alt="twitter" />
            </div>

            <div className="image-container">
                <img src={linkedIn} alt="linkedIn" />
            </div>

        </div>
  )
}

export default SocialMediaSection