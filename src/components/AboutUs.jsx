import React from 'react'
import Chef from '../assets/images/about-us/Chef.png'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <section className='about-us-section'>
        <div className="container">
            <div className="left-section">
                <h1 className='fs-54 fw-600'>About Us</h1>
                <p className='fs-20 fw-400 poppins'>With over 20 years of culinary experience in leading hospitality venues across Auckland and Perth (Hilton Auckland, Hyatt Regency Perth, Crown Resorts Perth), I have spent much of my career perfecting the art of creating memorable culinary experiences.  Working in banquet kitchens taught me precision and creativity, qualities that are reflected in every menu item at Spices Of The South.</p>
                <div className='btn-container'>
                    <Link to={'/order-now'}>
                        <button className='enquiry-btn fw-500 fs-20'>Order Now</button>
                    </Link>
                    <Link to={'/menu'}>
                        <button className='enquiry-btn-transparant view-menu-btn fw-500 fs-20'>View Menu</button>
                    </Link>
                </div>
            </div>
            <div className="right-section">
                <div className="img-container">
                    <img src={Chef} alt="chef" />
                </div>
                <h5 className='fs-24 poppins fw-600'>Chef Vinod</h5>
            </div>
        </div>
    </section>
  )
}

export default AboutUs