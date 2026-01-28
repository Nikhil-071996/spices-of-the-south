import React from 'react'
import quickMealImg from '../assets/images/heat-n-eat/quick-meal.png'
import Vellarikya from '../assets/images/heat-n-eat/Vellarikya.png'
import { Link } from 'react-router-dom'

function QuickMeal() {
  return (
    <section className='quick-meals' id="heat-n-eat-meals">

        <div className="container">
            <div className="left-container">
                <h1 className='fs-64 fw-600'> 
                    <img src={Vellarikya} alt="Vellarikya" className='Vellarikya' />
                    Quick Meals. Authentic Taste.</h1>
                <p className='fs-20 poppins'>Say goodbye to long cooking hours with our Heat ’n’ Eat meals! Crafted with love and the finest ingredients, enjoy authentic South Indian flavors in minutes—perfect for busy days or cozy nights.</p>
                <Link to="/catering#get-in-touch">
                    <button className='enquiry-btn'>Enquire Now</button>
                </Link>
            </div>
            <div className="right-container">
                <div className="img-container">
                    <img src={quickMealImg} alt="quickMealImg" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default QuickMeal