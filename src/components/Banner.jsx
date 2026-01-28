import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <main className='hero'>
        <div className="container">
            <h1 className='fw-600 fs-64'>Experience the flavours <br /> of  South Indian cuisine</h1>
            <p className='poppins'>Indulge in the bold, inclusive flavors of South India, crafted to <br /> delight every palate and welcome every guest.</p>

            <div className='btn-container'>
                <Link to={'order-now'}><button className='enquiry-btn fw-500 fs-20 order-now-btn'>Order Now</button></Link>
                <Link to={'menu'}><button className='enquiry-btn-transparant fw-500 fs-20'>View Menu</button></Link>
                
            </div>

        </div>
    </main>
  )
}

export default Banner