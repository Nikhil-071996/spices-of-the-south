import React from 'react'
import Dish1 from '../assets/images/about-us/Dish-1.png'
import boat from '../assets/images/about-us/boat.png'
import plant from '../assets/images/about-us/plant.png'
import flower from '../assets/images/about-us/flower.png'

function DishSection() {
  return (
    <section className='dish-section'>

        <div className="left-section">
          <img src={boat} alt="boat" className='boat' />  
            <div className="img-container">
                <img src={Dish1} alt="Dish1" />
            </div>
        </div>
        <div className="right-section">
          <img src={flower} alt="flower" className='flower' />  

            <p className='fs-20 fw-400 poppins'>
            <img src={plant} alt="plant" className='plant' />  
            South Indian cuisine is more than just food for me - it is a connection to my roots.  Its depth and diversity - the tangy tamarind flavours of Tamil Nadu to the coconut rich dishes of Kerala, the balance and harmony of the Kannada region, the fiery and bold notes of Andhra and the unparalleled variety of  spices used throughout the south Indian peninsula - offer an endless exploration of tastes and textures.
            </p>
        </div>

    </section>
  )
}

export default DishSection