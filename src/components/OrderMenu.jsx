import React from 'react'
import OrderItems from './OrderItems'
import '../assets/css/order-menu.css'

function OrderMenu({menuData, addToCart}) {
  return (
    <div className='order-menu'>

        <h3 className='fs-32 fw-600 heading'>Menu</h3>

        <div className="order-menu-container">

            <OrderItems id={1} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={2} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={7} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={3} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={4} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={5} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />
            <OrderItems id={6} addToCart={addToCart} categories={menuData.categories}  dishes={menuData.dishes} />

        </div>

    </div>
  )
}

export default OrderMenu