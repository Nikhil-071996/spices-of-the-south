import React, { useState } from 'react'
import '../assets/css/side-form.css'
import { Link } from 'react-router-dom'

function SideForm({closeMenu}) {

    const [open , setOpen] = useState(false)

    function openSideForm(){
        setOpen(prev => !prev)
    }

  return (
    <>

            <Link to={'/order-now'}>
                <button className="enquire-btn" >Order</button>
            </Link>

        {/* <div className={`sliding-form-container ${open ? 'active' : ''}`} id="enquire-form">
            <div className="under-lay"></div>
            <div className="sliding-form">
            <button className="close-btn-form-slider">
                <img src={closeMenu} alt="close" onClick={openSideForm} />
            </button>

                <div className="contact-form-csr">
                <div className="right">
                    <h3>Enquire Now</h3>
                <form className="validated-form" id="submitForm" method="POST">
                    
                    <div>
                        <input type="text" name="name" className="name" id="name" placeholder="Name" />
                        <b><small id="nameError" className="text-danger"></small></b>
                    </div>
                    
                                
                    <div className="rows">
                        <div className="cols">
                            <input type="text" name="phone" className="phone_number"  id="phone" placeholder="Phone Number" maxlength="12" />
                            <b><small id="phoneError" className="text-danger"></small></b>
                        </div>	
                        <div className="cols">
                            <input type="email" name="email" className="email" id="email" placeholder="Email" />
                            <b><small id="emailError" className="text-danger"></small></b>
                        </div>	
                    </div>
                    
                
                    
                    <div>
                            <select name="product" id="product" className="enquire-form-select" aria-label="product">
                            <option value="">Choose field (Enquire for delivery/pickup/catering 
                        ...</option>    
                        <option value="Enquire for delivery">Enquire for delivery</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Catering">Catering</option>
                        <option value="Ready to go meals">Ready to go meals</option>
                                

                                
                            </select>
                        <b><small id="productErr" className="text-danger"></small></b>
                    </div>
                    
                    
                    
                    <button className="enquiry-btn" name="submitbutton">Submit</button>
            </form>
                    

                </div>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default SideForm