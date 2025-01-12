import React from 'react'
import logoWhite from '../assets/images/logo-white.svg'
import SocialMediaSection from '../components/SocialMediaSection';
import '../assets/css/footer.css'
import { Link } from 'react-router-dom';


function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="container">

            <div className="logo-container">
                <img src={logoWhite} alt="logo-white" />
            </div>

            <div className="footer-nav">
                <ul>
                    <li><Link to={'menu'} className='fw-600 fs-20' >About Us</Link></li>
                    <li><Link to={'menu'} className='fw-600 fs-20' >Menu</Link></li>
                    <li><Link to={'menu'} className='fw-600 fs-20' >Order</Link></li>
                    <li><Link to={'menu'} className='fw-600 fs-20' >Heat ’n’ Eat Meals</Link></li>
                    <li><Link to={'menu'} className='fw-600 fs-20' >Catering</Link></li>
                </ul>
            </div>

            <div className="copy-right-section">

                <p className='fs-12 fw-500 poppins'>@Copyright Spices of South {currentYear} </p>

                    <SocialMediaSection />

                <div className='policy-container'>
                    <Link className='fs-12 fw-500 poppins'>Terms</Link><Link className='fs-12 fw-500 poppins'>Policies</Link>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer