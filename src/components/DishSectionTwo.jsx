import React from 'react'
import Dish2 from '../assets/images/about-us/Dish-2.png'
import pot from '../assets/images/about-us/pot.png'


function DishSectionTwo() {
  return (
    <section className='dish-section-two'>
        <div className="left-section">
            <p className='fs-20 fw-400 poppins'>
                The menu at Spices Of The South showcases these treasures, designed to cater to modern dietary needs with gluten free and allergy friendly options,  all thanks to the natural abundance of rice in South Indian cuisine. At Spices Of The South we are not just serving meals, we are sharing stories, culture and a piece of home..
            </p>
        </div>
        <div className="right-section">
          <img src={pot} alt="pot" className='pot' />  

            <div className="img-container">
                <img src={Dish2} alt="Dish2" />
            </div>
        </div>
    </section>
  )
}

export default DishSectionTwo