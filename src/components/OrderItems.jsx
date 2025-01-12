import React from 'react'

function OrderItems({dishes}) {
  return (
    <div className="order-items">

        <h2 className='fs-24 fw-600'>{dishes.name}</h2>

        <div className="food-items">

            {
                dishes.dishesList.map(el => (
                    <div className="items" key={el.id}>

                    <div className='name-section'>
                        <div className="item-name">
                            <h3 className='fs-20 poppins fw-400' >{el.dishName}</h3>
                        </div>
                    </div>
                    <div className="price">
                        <h3 className='fs-20 poppins fw-400'>${el.price.toFixed(2)}</h3>
                    </div>

                    </div>
                ))
            }

            

        </div>

    </div>
  )
}

export default OrderItems