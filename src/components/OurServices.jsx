import React from 'react'
import locationIcon from '../assets/images/our_services/location-icon.svg'
import ourServices from '../assets/images/our_services/our_services.png'
import order from '../assets/images/our_services/order.svg'
import catering from '../assets/images/our_services/Catering.svg'
import readyToGo from '../assets/images/our_services/Ready_to_go_Meals.svg'
import Arrow from '../assets/images/our_services/Arrow.svg'
import chillyImage from '../assets/images/home/chilly-icon.svg'
import laung from '../assets/images/about-us/laung.png'
import { Link, useLocation } from 'react-router-dom'
import '../assets/css/our-services.css'

function OurServices() {

    const location = useLocation();

  return (
    <section className='our-services'>

    {
        location.pathname === '/about-us'  && <img src={laung} alt="" className='laung-image' />
    }
    


        <div className="container">

            <div className="left-section">
                <h3 className='fs-42 fw-600'>Our services</h3>
                <p className='fs-16 poppins'>We provide catering services, ready-to-go meals, order pickups, and delivery, bringing the authentic flavors of South India straight to your doorstep or event.</p>
                <div className="image-container">
                    <img src={ourServices} alt="" />
                </div>

                <div className="location-container">
                    <img src={locationIcon} alt="" />
                    <p className='fs-19 poppins'>Cloud Kitchen located at 260 Albany Highway, Victoria Park, 6100</p>
                </div>
            </div>

            <div className="right-section">
                <div className="cards-container">

                    
                    <Link className="card" to={'/order-now'}>
                        <div className="img-container main-image">
                            <img src={order} alt="" className='main-img' />
                        </div>
                        <h5 className='fs-24 fw-600'>Order</h5>
                        <div className="img-container">
                            <img src={Arrow} alt="" />
                        </div>
                    </Link>

                    <Link className="card" to={'/catering'}>
                        <div className="img-container main-image">
                            <img src={catering} alt="" className='main-img' />
                        </div>
                        <h5 className='fs-24 fw-600'>Catering</h5>
                        <div className="img-container">
                            <img src={Arrow} alt="" />
                        </div>
                    </Link>

                    <Link className="card" to={'/catering#heat-n-eat-meals'}>
                        <div className="img-container main-image">
                            <img src={readyToGo} alt="" className='main-img' />
                        </div>
                        <h5 className='fs-24 fw-600'>Ready to go <br /> Meals</h5>
                        <div className="img-container">
                            <img src={Arrow} alt="" />
                        </div>
                    </Link>

                </div>
            </div>

        </div>

        {
            location.pathname === '/'  && <img src={chillyImage} alt="" className='chilly-image' />
        }
        

    </section>
  )
}

export default OurServices