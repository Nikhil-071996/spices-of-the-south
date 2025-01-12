import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './container/Footer'
import Header from './container/Header'
import Home from './container/Home'
import Menu from './container/Menu'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop'
import About from './container/About'
import HeatNEat from './container/HeatNEat'
import Order from './container/Order'
import ScrollToHash from './components/ScrollToHash'

function App() {

  const [menuHeight, setMenuHeight] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Function to update menu height and adjust content margin top
    const adjustContentMarginTop = () => {
      const menu = document.getElementById('menu');
      const menuHeight = menu.offsetHeight;
      setMenuHeight(menuHeight);
    };

    adjustContentMarginTop();
    window.addEventListener('resize', adjustContentMarginTop);

    return () => {
      window.removeEventListener('resize', adjustContentMarginTop);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down, hide menu; if scrolling up, show menu
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash />

        <Header isMenuVisible={isMenuVisible} />
        <Routes>
          <Route path='/' element={<Home isMenuVisible={isMenuVisible} />}  />
          <Route path='/about-us' element={<About menuHeight={menuHeight} isMenuVisible={isMenuVisible} />}  />
          <Route path='/menu' element={<Menu menuHeight={menuHeight} isMenuVisible={isMenuVisible} />}  />
          <Route path='/order-now' element={<Order menuHeight={menuHeight} isMenuVisible={isMenuVisible} />}  />
          <Route path='/catering' element={<HeatNEat menuHeight={menuHeight} isMenuVisible={isMenuVisible} />}  />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
