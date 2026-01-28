import React from 'react'
import boat from '../assets/images/home/boat.png'
import house from '../assets/images/home/house.png'
import man from '../assets/images/home/man.png'
import kada from '../assets/images/home/kada.png'
import diya from '../assets/images/home/diya.png'
import Pookola from '../assets/images/home/Pookola.png'
import TayirKudam from '../assets/images/home/TayirKudam.png'
import Damroo from '../assets/images/home/Damroo.png'
import Chenda from '../assets/images/home/Chenda.png'


function ScrollImageSection() {
  return (
    <section className='scroll-image-section'>
        <div className="container">

            <div className="img-container">
                <img src={boat} alt="" />
            </div>

            <div className="img-container">
                <img src={house} alt="" />
            </div>

            <div className="img-container">
                <img src={man} alt="" />
            </div>

            <div className="img-container">
                <img src={kada} alt="" />
            </div>

            <div className="img-container">
                <img src={diya} alt="" />
            </div>

            <div className="img-container">
                <img src={Pookola} alt="" />
            </div>

            <div className="img-container">
                <img src={TayirKudam} alt="" />
            </div>

            <div className="img-container">
                <img src={Damroo} alt="" />
            </div>

            <div className="img-container">
                <img src={Chenda} alt="" />
            </div>


        </div>
    </section>
  )
}

export default ScrollImageSection