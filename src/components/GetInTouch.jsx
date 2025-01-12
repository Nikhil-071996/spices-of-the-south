import React from 'react'
import locationPin from '../assets/images/contact/location.svg'
import email from '../assets/images/contact/email.svg'
import phone from '../assets/images/contact/phone.svg'
import timing from '../assets/images/contact/timing.svg'
import leaf from '../assets/images/home/leaf-icon.svg'
import uberEats from '../assets/images/contact/ubereats-icon.svg'
import doorDash from '../assets/images/contact/doordash-icon.svg'
import menuLog from '../assets/images/contact/menulog-icon.svg'
import facebook from '../assets/images/contact/facebook-icon.svg'
import whatsapp from '../assets/images/contact/whatsapp-icon.svg'
import twitter from '../assets/images/contact/twitter-icon.svg'
import linkedIn from '../assets/images/contact/linkedIn-icon.svg'
import FormContainer from './Form'
import '../assets/css/get-in-touch.css'
import { useLocation } from 'react-router-dom'

function GetInTouch({paddingTop}) {

    const location = useLocation();

  return (
    <section className='get-in-touch' style={{paddingTop : paddingTop}}>

        {
            (location.pathname === "/order-now" || location.pathname === "/catering") && <img src={leaf} alt="leaf" className='leaf-icon' />
        }
         

        <div className="container">

            <div className="section-left">
                <h2 className='fs-42 fw-600'>Get in Touch</h2>
                <p className='fs-19 poppins'>We’d love to hear from you! Whether you have a question, feedback, or a special request, feel free to get in touch with us.</p>

                <div className="contact-info">

                    <div className="info">
                        <div className="img-container">
                            <img src={locationPin} alt="location" />
                        </div>
                        <p className='fs-19 poppins'>260 Albany Highway, Victoria Park, 6100.</p>
                    </div>

                    <div className="info">
                        <div className="img-container">
                            <img src={phone} alt="phone" />
                        </div>
                        <p className='fs-19 poppins'>0412 029 061</p>
                    </div>

                    <div className="info">
                        <div className="img-container">
                            <img src={email} alt="email" />
                        </div>
                        <p className='fs-19 poppins'>contact@spicesofthesouth.au</p>
                    </div>

                    <div className="info">
                        <div className="img-container">
                            <img src={timing} alt="timing" />
                        </div>
                        <p className='fs-19 poppins'>Monday to Friday, 10:30am to 2:30pm</p>
                    </div>

                </div>

                <div className="social-media">

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

            </div>
            <div className="section-right">
                <h2 className='fs-42 fw-600'>Enquiry Form</h2>
                <p className='fs-19 poppins'>Click here to place your order for pickup or delivery via Uber Eats, Menulog, or DoorDash.
                Alternatively, fill out the form below, and we’ll get back to you as soon as possible:</p>


                <FormContainer />

                
                
            </div>

        </div>

    </section>
  )
}

export default GetInTouch