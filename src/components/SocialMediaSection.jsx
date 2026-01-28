import React from 'react'

import uberEats from '../assets/images/contact/uber-eats-black.svg'
import doorDash from '../assets/images/contact/doordash-icon-black.svg'
import menuLog from '../assets/images/contact/menulog-black.svg'
import inatsgram from '../assets/images/contact/insta-black.svg'
import insta from '../assets/images/instagram.png'
import { Link } from 'react-router-dom'

function SocialMediaSection() {
  return (
    <div className="social-media-footer">
    
            <div className="image-container">
                <Link to={'https://www.order.store/store/spices-of-the-south/Lh_9BsHoSsu4BhGS_2ds1Q'} target='_blank'>
                    <img src={uberEats} alt="uberEats" />
                </Link>
            </div>

            <div className="image-container">
                <img src={doorDash} alt="doorDash" />
            </div>

            <div className="image-container">
                <img src={menuLog} alt="menuLog" />
            </div>

            <div className="image-container">
                <Link to={'https://www.instagram.com/spicesofthesouth'} target='_blank'>
                    <img src={insta} alt="linkedIn" />
                </Link>
            </div>

        </div>
  )
}

export default SocialMediaSection