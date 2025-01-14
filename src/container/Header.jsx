import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import logoWhite from '../assets/images/logo-white.png'
import menu from '../assets/images/home/menu.png'
import closeMenu from '../assets/images/home/close.png'
import '../assets/css/header.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header({isMenuVisible}) {

    const [scrolled, setScrolled] = useState(false);
    const [cateringActive, setCateringActive] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    
    const location = useLocation();
    const hashActive = location.pathname === '/catering' && location.hash === '#heat-n-eat-meals';
    // const cateringActive = location.pathname === '/catering' ;

    function headerChange(){
        if(window.scrollY > 0){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    window.addEventListener('scroll' , headerChange);

    useEffect(() => {
        if(location.pathname === '/catering' && location.hash === '#heat-n-eat-meals'){
            setCateringActive(false)
        }else if(location.pathname === '/catering'){
            setCateringActive(true)
        }else{
            setCateringActive(false)
        }
    },[location])

    function menuToggle(){
        setMenuOpen(prev => !prev)
    }

    

  return (
    <header className={`${location.pathname === '/' ? 'home' : ''} ${scrolled ? 'scrolled' : ''}`} 
    style={{transform : !isMenuVisible ? 'translateY(-100%)' : 'translateY(0%)' }} 
    id='menu'>
            <Link to={'/'}>
                <div className="logo">
                    {
                        location.pathname === '/' && scrolled
                        ?
                        <img src={logo} alt="spices-of-the-south-logo" />
                        :
                        location.pathname === '/'
                        ?
                        <img src={logoWhite} alt="spices-of-the-south-logo" />
                        :
                        <img src={logo} alt="spices-of-the-south-logo" />

                    }
                </div>
            </Link>
            <nav className={menuOpen ? "active" : ""}>
                <div className='close-menu-div'>
                    <img src={closeMenu} alt="closeMenu" className='close-menu' onClick={menuToggle} />
                </div>

                <ul>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active fw-600 fs-24' : 'fw-600 fs-24')} to={'about-us'} >About Us</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active fw-600 fs-24' : 'fw-600 fs-24')} to={'menu'} >Menu</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active fw-600 fs-24' : 'fw-600 fs-24')} to={'order-now'}  >Order</NavLink></li>
                    <li>
                        <Link
                        className={cateringActive ? 'active fw-600 fs-24' : 'fw-600 fs-24'}
                        to="catering"
                        >
                        Catering
                        </Link>
                    </li>
                    
                    {/* Heat ’n’ Eat Meals NavLink */}
                    <li>
                        <Link
                        className={hashActive ? 'active fw-600 fs-24' : 'fw-600 fs-24'}
                        to="/catering#heat-n-eat-meals"
                        >
                        Heat ’n’ Eat Meals
                        </Link>
                    </li>
                </ul>
            </nav>

            <img src={menu} alt="menu" className='menu-icon' onClick={menuToggle} />

    </header>
  )
}

export default Header