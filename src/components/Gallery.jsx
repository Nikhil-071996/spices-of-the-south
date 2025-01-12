import React from 'react'
import gallery1 from '../assets/images/heat-n-eat/gallery-1.png'
import gallery2 from '../assets/images/heat-n-eat/gallery-2.png'
import gallery3 from '../assets/images/heat-n-eat/gallery-3.png'
import gallery4 from '../assets/images/heat-n-eat/gallery-4.png'
import gallery5 from '../assets/images/heat-n-eat/gallery-5.png'
import gallery6 from '../assets/images/heat-n-eat/gallery-6.png'
import Vilakka from '../assets/images/heat-n-eat/Vilakka.png'

function Gallery() {
  return (
    <div className='gallery'>
        <div className="container">

            <img src={Vilakka} alt="Vilakka" className='Vilakka' />

            <h2 className='fs-48 fw-600'>Gallery</h2>
            <p className='fs-20 poppins'>See the magic we bring to events!</p>

            <div className="gellery-container">

                <div className="img-container">
                    <img src={gallery1} alt="gallery" />
                </div>

                <div className="img-container">
                    <img src={gallery2} alt="gallery" />
                </div>

                <div className="img-container">
                    <img src={gallery3} alt="gallery" />
                </div>

                <div className="img-container">
                    <img src={gallery4} alt="gallery" />
                </div>

                <div className="img-container">
                    <img src={gallery5} alt="gallery" />
                </div>

                <div className="img-container">
                    <img src={gallery6} alt="gallery" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Gallery