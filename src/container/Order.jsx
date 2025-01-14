import React, { useState } from 'react'
import OrderMenu from '../components/OrderMenu'
// import menuData from "../assets/menu/menu.json";
import menuData from "../assets/menu/menu2.json";
import divider from '../assets/images/menu/divider.svg'
import YourOrder from '../components/YourOrder';
import GetInTouch from '../components/GetInTouch';
import ScrollImageSection from '../components/ScrollImageSection';
import '../assets/css/order.css'

function Order({menuHeight}) {

  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });

  const addToCart = (dish) => {
    const existingDishIndex = cart.findIndex((item) => item.id === dish.id);

    if (existingDishIndex > -1) {
      // If dish exists, increase count
      const updatedCart = [...cart];
      updatedCart[existingDishIndex].count += 1;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // If dish doesn't exist, add to cart with count = 1
      const updatedCart = [...cart, { ...dish, count: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

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
            <OrderMenu menuData={menuData} cart={cart} addToCart={addToCart} />
          </div>

          <div className="right-section">
            <YourOrder cart={cart} addToCart={addToCart} setCart={setCart} />
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