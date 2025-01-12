import React from 'react'
import OrderMenu from '../components/OrderMenu'
import menuData from "../assets/menu/menu.json";
import divider from '../assets/images/menu/divider.svg'
import YourOrder from '../components/YourOrder';
import '../assets/css/order.css'
import GetInTouch from '../components/GetInTouch';
import ScrollImageSection from '../components/ScrollImageSection';

function Order({menuHeight}) {
  return (
    <section className='order' style={{marginTop : menuHeight}}>

        <div className="container">
            <h2 className='fs-54 fw-600 order-heading'>Order</h2>
            <p className='fs-20 poppins'>
            Experience the authentic flavours of the South at your convenience! You can schedule a pickup directly from our website or enjoy the ease of ordering through Uber Eats, DoorDash, or Menulog. Place your order now and let Spices of the South bring the taste of tradition to your meal !
            </p>
        </div>
        
        <div className="container menu-and-order-container">

          <div className='left-section'>
            <OrderMenu menuData={menuData} />
          </div>

          <div className="right-section">
            <YourOrder />
          </div>
        </div>

        <div className="divider">
            <img src={divider} alt="divider" />
        </div>

      <GetInTouch paddingTop={'100px'} />
      <ScrollImageSection />


    </section>
  )
}

export default Order