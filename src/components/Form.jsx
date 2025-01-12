import React from 'react'
import '../assets/css/form.css'


function FormContainer() {
  return (
    <div className="form-container">

        <form action="">

            <div className="first-section">
                <div className="input-container">
                    <input type="text" placeholder='Name' />
                </div>

                <div className="input-container">
                    <input type="text" placeholder='Phone No.' />
                </div>
            </div>

            <div className="input-container">
                <input type="email"  placeholder='Email' />
            </div>

            <div className="select-container">
                <select name="hi" id="hi"> 
                    <option value="">Choose field (Enquire for delivery/pickup/catering 
                        ...</option>    
                        <option value="Enquire for delivery">Enquire for delivery</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Catering">Catering</option>
                        <option value="Ready to go meals">Ready to go meals</option>
                </select>
            </div>

            <button type='submit' className='enquiry-btn'>Enquire Now</button>
        </form>

    </div>
  )
}

export default FormContainer