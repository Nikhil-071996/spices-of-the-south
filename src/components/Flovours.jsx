import React from 'react'
import meal1 from '../assets/images/heat-n-eat/meal-1.png'
import temple from '../assets/images/heat-n-eat/temple.png'

function Flovours() {
  return (
    <div className='flavours'>
        

        <div className="container">
        <img src={temple} alt="temple" className='temple' />
            <div className="left-section">
                <h1 className='fs-64 fw-600'>Flavours That Spark Joy, Memories That Last</h1>
                <p className='fs-20 fw-400'>At Spices of the South we offer you an opportunity to create memorable culinary experiences at your events.  With over 15 years of experience in banquet kitchen at Hyatt Regency and Crown Resorts, we offer customized catering solutions that extend beyond our takeaway offerings.  Corporate events, personal or special occasions, we can offer you menus that suit your unique requirements and delights your guests.</p>

                <button className='enquiry-btn'>Enquire Now</button>
            </div>
            <div className="right-section">
                <div className="img-container">
                    <img src={meal1} alt="meal1" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Flovours