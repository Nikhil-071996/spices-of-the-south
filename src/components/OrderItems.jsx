import React, { useEffect, useState } from 'react'

function OrderItems({dishes, id, categories, addToCart,addItem}) {

  

  

  return (
    <div className="order-items">

        <h2 className='fs-24 fw-600'>{categories.filter(el => el.id === id)[0].name}</h2>

        <div className="food-items">

            {
              
                dishes.map(el => (
                  el.category === id
              ?
                    <div className="items" key={el.id} onClick={() => {
                            addToCart(el)
                            addItem()
                        }} >

                    <div className='name-section'>
                        <div className="item-name">
                            <h3 className='fs-20 poppins fw-400' >{el.dishName}</h3>
                        </div>
                    </div>
                    <div className="price">
                        <h3 className='fs-20 poppins fw-600'>${el.price.toFixed(2)}</h3>
                    </div>

                    </div>
                    :
                    null
                ))
                
            }

            

        </div>

    </div>
  )
}

export default OrderItems