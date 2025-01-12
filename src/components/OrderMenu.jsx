import React from 'react'
import OrderItems from './OrderItems'
import '../assets/css/order-menu.css'

function OrderMenu({menuData}) {
  return (
    <div className='order-menu'>

        <h3 className='fs-32 fw-600 heading'>Menu</h3>

        <div className="order-menu-container">

            <OrderItems  dishes={menuData.starterMenu} />
            <OrderItems  dishes={menuData.pieOrRolls} />
            <OrderItems  dishes={menuData.chefsSpecial} />
            <OrderItems  dishes={menuData.curriesDish} />
            <OrderItems  dishes={menuData.biryaniDishes} />
            <OrderItems  dishes={menuData.sweetDishes} />
            <OrderItems  dishes={menuData.sidesDishes} />

        </div>

    </div>
  )
}

export default OrderMenu