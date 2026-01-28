import React, { useState } from 'react';
import OrderMenu from '../components/OrderMenu';
import menuData from "../assets/menu/menu2.json";
import divider from '../assets/images/menu/divider.svg';
import YourOrder from '../components/YourOrder';
import GetInTouch from '../components/GetInTouch';
import ScrollImageSection from '../components/ScrollImageSection';
import '../assets/css/order.css';
import OrderForm from '../components/OrderForm';
import { ScrollImageSectionBannerMoving } from '../components/ScrollImageSectionBannerMoving';

function Order({ menuHeight }) {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });

  const [freeCart, setFreeCart] = useState(() => {
    const storedFreeCart = JSON.parse(localStorage.getItem('freeCart')) || [];
    return storedFreeCart;
  });

  function handleDisplayMenu() {
    setDisplayMenu((prev) => !prev);
  }

  const addToCart = (dish) => {
    const updatedCart = [...cart]; // Clone the current cart

    const existingDishIndex = updatedCart.findIndex((item) => item.id === dish.id);

    if (existingDishIndex > -1) {
      // If the dish exists in the cart, increase its count
      updatedCart[existingDishIndex].count += 1;
    } else {
      // If the dish doesn't exist, add it to the cart with a count of 1
      updatedCart.push({ ...dish, count: 1 });
    }

    // Calculate the total count of items in the cart (excluding the free item)
    const totalItemCount = updatedCart.reduce((acc, item) => acc + item.count, 0);

    let updatedFreeCart = [...freeCart]; // Clone the free items cart

    if (totalItemCount >= 3) {
      // If total count is 3 or more, ensure the free item is in the freeCart
      const isFreeItemInCart = updatedFreeCart.some((item) => item.id === "free-item");

      if (!isFreeItemInCart) {
        // updatedFreeCart.push({
        //   id: "free-item",
        //   category: "promo",
        //   dishName: "Mango lassi ( Free )",
        //   shortDesc: "Enjoy this free item on us!",
        //   price: 0,
        //   count: 1,
        // });
      }
    } else {
      // If total count drops below 3, remove the free item from the freeCart
      updatedFreeCart = updatedFreeCart.filter((item) => item.id !== "free-item");
    }

    // Update the original cart and freeCart in the state and local storage
    setCart(updatedCart);
    setFreeCart(updatedFreeCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("freeCart", JSON.stringify(updatedFreeCart));
  };

  

  return (
    <section className="order" style={{ marginTop: menuHeight }}>
      <div className="container">
        <h2 className="fs-54 fw-600 order-heading">Order</h2>
        <p className="fs-20 poppins">
          Experience the authentic flavours of the South at your convenience! You can schedule a pickup directly from our website or enjoy the ease of ordering through Uber Eats, DoorDash, or Menulog. Place your order now and let Spices of the South bring the taste of tradition to your meal !
        </p>
      </div>

      <div className="container menu-and-order-container">
        <div className={`left-section ${displayMenu ? 'active' : ''}`}>
          <OrderMenu menuData={menuData} cart={cart} addToCart={addToCart} />
        </div>

        <div className="right-section">
          <YourOrder cart={cart} addToCart={addToCart} setCart={setCart} setDisplayForm={setDisplayForm} 
              freeCart={freeCart}
              setFreeCart={setFreeCart}
          />
        </div>
      </div>

      <div className="divider">
        <img src={divider} alt="divider" />
      </div>

      <GetInTouch paddingTop={'100px'} />
      <ScrollImageSection />

      <OrderForm displayForm={displayForm} setDisplayForm={setDisplayForm} cart={cart} freeCart={freeCart} setCart={setCart} setFreeCart={setFreeCart} />

      {window.innerWidth > 990 ? null : (
        <button className="enquire-btn " onClick={handleDisplayMenu}>
          {displayMenu ? 'Close Menu' : 'Menu'}
        </button>
      )}

      {window.innerWidth < 990 ? <ScrollImageSectionBannerMoving speed={5000} /> : null}
    </section>
  );
}

export default Order;
