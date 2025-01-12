import React from 'react'
import bhelDish from '../assets/images/home/bhel-dish.png'
import spices from '../assets/images/home/spices.png'
import leafIcon from '../assets/images/home/leaf-icon.svg'

function SpicesSection() {
  return (
    <section className='spices-section'>

        <div className="container">
            <div className="left-section">
                <div className="img-container">
                    <img src={spices} alt="" />
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