import React from 'react'
import logoWhite from '../assets/images/logo-white.png'

import SocialMediaSection from '../components/SocialMediaSection';
import '../assets/css/footer.css'
import { Link } from 'react-router-dom';


function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="container">

            <Link to={'/'}>
            <div className="logo-container">
                <img src={logoWhite} alt="logo-white" />
            </div>
            </Link>

            <div className="footer-nav">
                <ul>
                    <li><Link to={'/about-us'} className='fw-600 fs-20' >About Us</Link></li>
                    <li><Link to={'/menu'} className='fw-600 fs-20' >Menu</Link></li>
                    <li><Link to={'/order-now'} className='fw-600 fs-20' >Order</Link></li>
                    <li><Link to={'/catering#heat-n-eat-meals'} className='fw-600 fs-20' >Heat ’n’ Eat Meals</Link></li>
                    <li><Link to={'/catering'} className='fw-600 fs-20' >Catering</Link></li>
                </ul>
            </div>

            <div className="copy-right-section">

                <p className='fs-12 fw-500 poppins copyright'>@Copyright Tuck In Mate Pty. Ltd. {currentYear} </p>

                    <SocialMediaSection />

                <div className='policy-container'>
                    {/* <Link className='fs-12 fw-500 poppins'>Terms</Link><Link className='fs-12 fw-500 poppins'>Policies</Link> */}
                    {/* <p className='fs-12 fw-500 poppins'>Tuck In Mate Pty. Ltd.</p> */}
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer