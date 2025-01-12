import React from 'react'
import gallery1 from '../assets/images/home/gallery-1.png'
import gallery2 from '../assets/images/home/gallery-2.png'
import { Link } from 'react-router-dom'

function GallerySection() {
  return (
    <section className='gallery-section'>
        <div className='container'>

            <div className="section-left">
                <div className="image-container">
                    <img src={gallery1} alt="dish" />
                </div>
                <h2 className='fs-54 fw-600'>
                Savour the Spice, <br /> Relish the Heritage
                </h2>
            </div>
            <div className="section-right">
                <div className="image-container">
                <img src={gallery2} alt="dish" />
                </div>

                <div className='view-menu'>
                    <Link to={'menu'} className='fs-20 fw-400 poppins'>View Full Menu</Link>
                </div>
            </div>

        </div>
    </section>
  )
}

export default GallerySection