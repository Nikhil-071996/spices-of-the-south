import React, { useState } from 'react'
import OrderItems from './OrderItems'
import '../assets/css/order-menu.css'

function OrderMenu({menuData, addToCart}) {

  const [showNotification, setShowNotification] = useState(false);

  const addItem = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 500);
  };

  return (
    <div className='order-menu'>

        <h3 className='fs-32 fw-600 heading'>Menu</h3>

        <div className="order-menu-container">

            <OrderItems id={1} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={2} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={7} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={3} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={4} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={5} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />
            <OrderItems id={6} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} addItem={addItem} />

        </div>


        {
          window.innerWidth < 990
          ?
           <p className={`item-added poppins ${showNotification ? "active" : ""}`}>item added</p>
          :
          null
        }

    </div>
  )
}

export default OrderMenu