import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/css/header.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header({isMenuVisible}) {

    const [scrolled, setScrolled] = useState(false);
    const [cateringActive, setCateringActive] = useState(false)
    
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

    

  return (
    <header className={`${location.pathname === '/' ? 'home' : ''} ${scrolled ? 'scrolled' : ''}`} 
    style={{transform : !isMenuVisible ? 'translateY(-100%)' : 'translateY(0%)' }} 
    id='menu'>
            <Link to={'/'}>
                <div className="logo">
                    <img src={logo} alt="spices-of-the-south-logo" />
                </div>
            </Link>
            <nav>
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

    </header>
  )
}

export default Header