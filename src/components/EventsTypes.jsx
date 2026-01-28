import React from 'react'
import personalEvent from '../assets/images/heat-n-eat/personal-event.svg'
import corporateEvent from '../assets/images/heat-n-eat/corporate-event.svg'

function EventsTypes() {
  return (
    <div className='events-type'>
        <div className="container">
            <h2 className='fs-48 fw-600'>Types of Events Catered</h2>
            <p className='fs-20 poppins'>We cater to a variety of events beyond those listed. Enquire now to see how we can make your occasion unforgettable!</p>

            <div className="event-container">
                <div className="img-container">
                    <img src={corporateEvent} alt="" />
                    <h4 className='fs-32 fw-600 poppins'>Corporate <br /> Events</h4>
                </div>
                <h3 className='fs-48 fw-600'>&</h3>
                <div className="img-container">
                    <img src={personalEvent} alt="" />
                    <h4 className='fs-32 fw-600 poppins'>Personal/ <br />Special Events</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsTypes