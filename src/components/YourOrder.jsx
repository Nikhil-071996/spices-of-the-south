import React from 'react'
import '../assets/css/your-order.css'

function YourOrder() {
  return (
    <div className='your-order'>
        <div className="padding-section">
            <h3 className='fs-32 fw-600 heading'>Your Order</h3>
        </div>

        <div className="order-container" >
            <div className="order-container-inner" >

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>

                <div className='orders'>
                    <h4 className='fs-20 fw-600 poppins dish-name'>Teriyaki tofu rice paper rolls</h4>
                    <h4 className='fs-20 fw-600 poppins price'>$15.00</h4>
                    <div className="no-of-orders">
                        <button>-</button>
                        <input type="text" className='fs-20 poppins' />
                        <button>+</button>
                    </div>
                </div>
                

            </div>
        </div>

        <div className="offers-container">
            <div className="cirle-div"></div>
            <h5 className='fs-20 fw-600 poppins' >Buy three items and get a mango Lassi free</h5>
            <div className="cirle-div"></div>
        </div>
        
        <div className="padding-section">
            <div className="total-container">
                <div className="total">
                    <p className='fs-24 fw-500 poppins'>Total</p>
                    <p className='grand-total fs-24 fw-600  poppins'>$50.00</p>
                </div>

                <button className='enquiry-btn'> 
                    Order Now
                </button>

            </div>
        </div>

    </div>
  )
}

export default YourOrder