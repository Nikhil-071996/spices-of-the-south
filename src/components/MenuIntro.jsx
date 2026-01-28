import React from 'react'
import Map from '../assets/images/menu/map_of_curries.webp'
import dairy from '../assets/images/menu/dairy_icon.svg'
import EggFree from '../assets/images/menu/egg_free_icon.svg'
import glutenFree from '../assets/images/menu/gluteen_free_icon.svg'
import nutFree from '../assets/images/menu/nut_free_icon.svg'
import vegan from '../assets/images/menu/vegan_icon.svg'
import { Link } from 'react-router-dom'


function MenuIntro() {


  return (
    <section className='menu-intro'>

        <div className="container">

            <div className="left-section">

                <div className="img-container">
                    <img src={Map} alt="" />
                </div>

                <h4 className='fs-12 fw-400 poppins credit'>Map credit - <a href='https://thebetterindia.com/' target='_blank'>www.thebetterindia.com</a>.</h4>

            </div>
            <div className="right-section">

                <h1 className='fs-54 fw-600'  >Our Menu</h1>
                <p className='fs-16 poppins'>Celebrate the rich culinary heritage of South India.  We have used imagination and experience to provide a contemporary twist to the dishes.  Each dish blends traditional flavours with modern cooking techniques and locally sourced ingredients.  Welcome to an authentic and innovative dining experience.</p>

                <div className="type-of-food">

                    <div className="type">
                        <img src={glutenFree} alt="" />
                        <h5 className='fs-20 fw-500 poppins'>GF - Gluten Free </h5>
                    </div>

                    <div className="type">
                        <img src={dairy} alt="" />
                        <h5 className='fs-20 fw-500 poppins'>DF – Dairy Free</h5>
                    </div>

                    <div className="type">
                        <img src={nutFree} alt="" />
                        <h5 className='fs-20 fw-500 poppins'>NF – Nut Free</h5>
                    </div>

                    <div className="type">
                        <img src={EggFree} alt="" />
                        <h5 className='fs-20 fw-500 poppins'>EF - Egg Free</h5>
                    </div>

                    <div className="type">
                        <img src={vegan} alt="" />
                        <h5 className='fs-20 fw-500 poppins'>V – Vegan</h5>
                    </div>

                </div>

                <Link to={'/order-now'} className='enquiry-btn'>
                    Order Now
                </Link>

            </div>

        </div>

    </section>
  )
}

export default MenuIntro