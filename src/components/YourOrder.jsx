import React from 'react'
import '../assets/css/your-order.css'

function YourOrder({cart, addToCart, 
    setCart, 
    freeCart, 
    setFreeCart, 
    setDisplayForm}) {

function showForm(){
    setDisplayForm(true)
}

const decreaseCount = (dish) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === dish.id) {
          return { ...item, count: item.count - 1 }; // Decrease count
        }
        return item;
      })
      .filter((item) => item.count > 0); // Remove item if count is 0

    // Calculate total item count (excluding free item)
    const totalItemCount = updatedCart.reduce((acc, item) => acc + item.count, 0);

    // Handle free item logic
    let updatedFreeCart = [...freeCart]; // Clone the free items cart

    if (totalItemCount >= 3) {
      // Add the free item if total count is 3 or more, and it's not already in the freeCart
      const isFreeItemInCart = updatedFreeCart.some((item) => item.id === "free-item");

      if (!isFreeItemInCart) {
        // updatedFreeCart.push({
        //   id: "free-item",
        //   category: "promo",
        //   dishName: "Free Dessert",
        //   shortDesc: "Enjoy this free item on us!",
        //   price: 0,
        //   count: 1,
        // });
      }
    } else {
      // Remove the free item if total count drops below 3
      updatedFreeCart = updatedFreeCart.filter((item) => item.id !== "free-item");
    }

    // Update cart and freeCart in the state
    setCart(updatedCart);
    setFreeCart(updatedFreeCart);

    // Sync with localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("freeCart", JSON.stringify(updatedFreeCart));
  };
  



  return (
    <div className='your-order' >
        <div className="padding-section">
            <h3 className='fs-32 fw-600 heading'>Your Order</h3>
        </div>

        <div className="order-container" >
            <div className="order-container-inner" >

                {

                    cart.length === 0
                    ?
                    <h2 className='menu-msg'>Click on Menu item to Order</h2>
                    :

                    cart.map((dish) => (
                        <div className='orders' key={dish.id}>
                            <h4 className='fs-20 fw-600 poppins dish-name'>{dish.dishName}</h4>
                            <h4 className='fs-20 fw-600 poppins price'>${dish.price.toFixed(2)}</h4>
                            <div className="no-of-orders">
                                <button onClick={() => decreaseCount(dish)}>-</button>
                                <input type="text" className='fs-20 poppins' value={dish.count} readOnly />
                                <button onClick={() => addToCart(dish)}>+</button>
                            </div>
                        </div>
                    ))
                }
                {
                    freeCart.length === 0
                    ?
                    null
                    :

                    freeCart.map((dish) => (
                        <div className='orders' key={dish.id}>
                            <h4 className='fs-20 fw-600 poppins dish-name'>{dish.dishName}</h4>
                            <h4 className='fs-20 fw-600 poppins price'>${dish.price.toFixed(2)}</h4>
                            <div className="no-of-orders">
                                <button disabled>-</button>
                                <input type="text" className='fs-20 poppins' value={dish.count} readOnly />
                                <button disabled>+</button>
                            </div>
                        </div>
                    ))
                }

                
                

            </div>
        </div>

        {/* <div className="offers-container">
            <div className="cirle-div"></div>
            <h5 className='fs-20 fw-600 poppins' >Buy three items and get a mango Lassi free</h5>
            <div className="cirle-div"></div>
        </div> */}
        <div className="padding-section">
            <div className="charge-container">
                <h5 className='fs-14 fw-400 poppins' >Kindly note that a 1.5% surcharge will be added to all card payments to cover the bank fees. We appreciate your understanding.</h5>
            </div>
        </div>

        <div className="padding-section">
            <div className="total-container">
                <div className="total">
                    <p className='fs-24 fw-500 poppins'>Total</p>
                    <p className='grand-total fs-24 fw-600  poppins'>${cart.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2)}
                    </p>
                </div>

                <button className='enquiry-btn order-btn' onClick={showForm} disabled={cart.length === 0} > 
                    Order Now
                </button>

            </div>
        </div>


    </div>
  )
}

export default YourOrder