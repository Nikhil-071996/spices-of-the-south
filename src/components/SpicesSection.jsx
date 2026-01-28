import React from 'react'
import bhelDish from '../assets/images/home/bhel-dish.png'
// spoons
import CardamomSpoon from '../assets/images/home/elichi-spoon.png'
import TurmericSpoon from '../assets/images/home/turmeric-spoon.png'
import PepperSpoon from '../assets/images/home/black-pepper-spoon.png'
import TamarindSpoon from '../assets/images/home/tamrind-spoon.png'
import CurryLeavesSpoon from '../assets/images/home/curry-leaves-spoon.png'
import CinnamonSpoon from '../assets/images/home/cinnamon-spoon.png'
// spices   
import Cardamom from '../assets/images/home/elichi.png'
import Turmeric from '../assets/images/home/turmeric.png'
import Pepper from '../assets/images/home/black-pepper.png'
import Tamarind from '../assets/images/home/tamrind.png'
import CurryLeaves from '../assets/images/home/curry-leaves.png'
import Cinnamon from '../assets/images/home/cinnamon.png'

import leafIcon from '../assets/images/home/leaf-icon.svg'

function SpicesSection() {
  return (
    <section className='spices-section'>

        <div className="container">
            <div className="left-section">
                <div className="images-container">

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>Cardamom</p>
                        <img src={Cardamom} alt="" className='spice' />
                        <img src={CardamomSpoon} alt="" className='spice-spoon' />
                    </div>

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>Turmeric</p>
                        <img src={Turmeric} alt="" className='spice' />
                        <img src={TurmericSpoon} alt="" className='spice-spoon' />
                    </div>

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>Pepper</p>
                        <img src={Pepper} alt="" className='spice' />
                        <img src={PepperSpoon} alt="" className='spice-spoon' />
                    </div>

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>Tamarind</p>
                        <img src={Tamarind} alt="" className='spice' />
                        <img src={TamarindSpoon} alt="" className='spice-spoon' />
                    </div>

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>CurryLeaves</p>
                        <img src={CurryLeaves} alt="" className='spice' />
                        <img src={CurryLeavesSpoon} alt="" className='spice-spoon' />
                    </div>

                    <div className="spices-container">
                        <p className='fs-16 fw-600'>Cinnamon</p>
                        <img src={Cinnamon} alt="" className='spice' />
                        <img src={CinnamonSpoon} alt="" className='spice-spoon' />
                    </div>


                </div>


                <h2 className='fs-42 fw-600'>Spices of the South</h2>
            </div>
            <div className="right-section">
                <div className="img-container">
                    <img src={bhelDish} alt="" />
                </div>
            </div>
        </div>

        <img src={leafIcon} alt="" className='leaf-icon' />

    </section>
  )
}

export default SpicesSection