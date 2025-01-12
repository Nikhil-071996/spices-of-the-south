import React from 'react'
import Chef from '../assets/images/about-us/Chef.png'

function AboutUs() {
  return (
    <section className='about-us-section'>
        <div className="container">
            <div className="left-section">
                <h1 className='fs-54 fw-600'>About Us</h1>
                <p className='fs-20 fw-400 poppins'>With over 22 years of culinary experience in leading hospitality venues across Auckland and Perth (Hilton Auckland, Hyatt Regency Perth, Crown Resorts Perth), I have spent much of my career perfecting the art of creating memorable culinary experiences.  Working in banquet kitchens taught me precision and creativity, qualities that are reflected in every menu item at Spices Of The South.</p>
                <div className='btn-container'>
                    <button className='enquiry-btn'>Order Now</button>
                    <button className='enquiry-btn-transparant' style={{color : "#000"}}>View Menu</button>
                </div>
            </div>
            <div className="right-section">
                <div className="img-container">
                    <img src={Chef} alt="chef" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs