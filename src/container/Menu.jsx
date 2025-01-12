import React, { useEffect, useRef, useState } from 'react'
import MenuIntro from '../components/MenuIntro'
import '../assets/css/menu.css'
import MenuItems from '../components/MenuItems'

import divider from '../assets/images/menu/divider.svg'

import starters from '../assets/images/menu/starters-dish.png'
import pieRolls from '../assets/images/menu/pie-rolls.png'
import curries from '../assets/images/menu/curries.png'
import biryani from '../assets/images/menu/biryani.png'
import sweets from '../assets/images/menu/sweets.png'
import chefSpecialImage from '../assets/images/menu/chef-special.png'
import GetInTouch from '../components/GetInTouch'
import ScrollImageSection from '../components/ScrollImageSection'
import MenuSubNav from '../components/MenuSubNav'

import menuData from "../assets/menu/menu.json";



function Menu({menuHeight, isMenuVisible}) {

        const [showSecondaryNav, setShowSecondaryNav] = useState(false);
        const targetSectionRef = useRef(null);

            useEffect(() => {
                const handleScroll = () => {
                  if (targetSectionRef.current) {
                    const sectionTop = targetSectionRef.current.getBoundingClientRect().top;
                    const offset = 150; 
                    if (sectionTop <= offset) {
                      setShowSecondaryNav(true);
                    } else {
                      setShowSecondaryNav(false);
                    }
                  }
                };
            
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
              }, []);

  return (
    <section className='menu' style={{marginTop : menuHeight}}>
        {showSecondaryNav && (
            <MenuSubNav menuHeight={menuHeight} isMenuVisible={isMenuVisible} />
        )}

        <MenuIntro  />


        
        <MenuItems dishes={menuData.starterMenu} image={starters} targetSectionRef={targetSectionRef}  />
        <MenuItems dishes={menuData.pieOrRolls}  image={pieRolls}  />
        <MenuItems dishes={menuData.chefsSpecial}  image={chefSpecialImage}  />
        <MenuItems dishes={menuData.curriesDish}  image={curries}  revert  />
        <MenuItems dishes={menuData.biryaniDishes}  image={biryani} revert />
        <MenuItems dishes={menuData.sweetDishes}  image={sweets}  />
        <MenuItems dishes={menuData.sidesDishes}    />

        <div className="divider">
            <img src={divider} alt="divider" />
        </div>

        <GetInTouch paddingTop={'86px'} />
        <ScrollImageSection />

    </section>
  )
}

export default Menu