import React, { useState } from 'react';
import locationPin from '../assets/images/contact/location.svg';
import email from '../assets/images/contact/email.svg';
import phone from '../assets/images/contact/phone.svg';
import timing from '../assets/images/contact/timing.svg';
import leaf from '../assets/images/home/leaf-icon.svg';
import uberEatsBlack from '../assets/images/contact/uber-eats-black.svg';
import uberEatsOrange from '../assets/images/contact/ubereats-icon-orange.svg';
import doorDashBlack from '../assets/images/contact/doordash-icon-black.svg';
import doorDashOrange from '../assets/images/contact/door-dash-orange.svg';
import menuLogBlack from '../assets/images/contact/menulog-black.svg';
import menuLogOrange from '../assets/images/contact/menu-log-orange.svg';
import instagramOrange from '../assets/images/contact/insta-orange.svg';
import instagramBalck from '../assets/images/contact/insta-black.svg';
import insta from '../assets/images/instagram.png';

import FormContainer from './Form';
import '../assets/css/get-in-touch.css';
import { useLocation } from 'react-router-dom';

function GetInTouch({ paddingTop }) {
  const location = useLocation();

  // Hover states for each icon
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconName) => setHoveredIcon(iconName);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <section className="get-in-touch" style={{ paddingTop: paddingTop }} id='get-in-touch'>
      {(location.pathname === '/order-now' || location.pathname === '/catering') && (
        <img src={leaf} alt="leaf" className="leaf-icon" />
      )}

      <div className="container">
        <div className="section-left">
          <h2 className="fs-42 fw-600">Get in Touch</h2>
          <p className="fs-19 poppins">
            We’d love to hear from you! Whether you have a question, feedback, or a special request, feel free to get in touch with us.
          </p>

          <div className="contact-info">
            <div className="info">
              <div className="img-container">
                <img src={locationPin} alt="location" />
              </div>
              <p className="fs-19 poppins">260 Albany Highway, Victoria Park, 6100.</p>
            </div>

            <div className="info">
              <div className="img-container">
                <img src={phone} alt="phone" />
              </div>
              <p className="fs-19 poppins">
                <a href="tel:0412029061" style={{ textDecoration: 'none', color: 'inherit' }}>
                  0412 029 061
                </a>
              </p>
            </div>

            <div className="info">
              <div className="img-container">
                <img src={email} alt="email" />
              </div>
              <p className="fs-19 poppins">
                <a href="mailto:contactus@spicesofthesouth.au" style={{ textDecoration: 'none', color: 'inherit' }}>
                  contactus@spicesofthesouth.au
                </a>
              </p>
            </div>

            <div className="info">
              <div className="img-container">
                <img src={timing} alt="timing" />
              </div>
              <p className="fs-19 poppins">Monday to Friday, 10:30am to 2:30pm</p>
            </div>
          </div>

          <div className="social-media">
          {[
            { 
              black: uberEatsBlack, 
              orange: uberEatsOrange, 
              name: 'uberEats', 
              link: ' https://www.order.store/store/spices-of-the-south/Lh_9BsHoSsu4BhGS_2ds1Q' 
            },
            { 
              black: doorDashBlack, 
              orange: doorDashOrange, 
              name: 'doorDash', 
              link: '#' 
            },
            { 
              black: menuLogBlack, 
              orange: menuLogOrange, 
              name: 'menuLog', 
              link: '#' 
            },
            { 
              black: insta, 
              orange: instagramOrange, 
              name: 'instagram', 
              link: 'https://www.instagram.com/spicesofthesouth/' 
            },
          ].map((icon) => (
            <div
              key={icon.name}
              className="image-container"
              onMouseEnter={() => handleMouseEnter(icon.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={hoveredIcon === icon.name ? icon.orange : icon.black}
                  alt={icon.name}
                  className="social-icon"
                />
              </a>
            </div>
          ))}

          </div>
        </div>

        <div className="section-right">
          <h2 className="fs-42 fw-600">Enquiry Form</h2>
          <p className="fs-19 poppins">
            Click here to place your order for pickup or delivery via Uber Eats, Menulog, or DoorDash. Alternatively, fill out the form below,
            and we’ll get back to you as soon as possible:
          </p>

          <FormContainer />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
