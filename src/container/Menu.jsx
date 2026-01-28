import React, { useEffect, useRef, useState } from 'react'
import MenuIntro from '../components/MenuIntro'
import '../assets/css/menu.css'
import MenuItems from '../components/MenuItems'

import divider from '../assets/images/menu/divider.svg'

import starters from '../assets/images/menu/starters-dish.png'
import pieRolls from '../assets/images/menu/pie-rolls.png'
import curries from '../assets/images/menu/curries.png'
import curries2 from '../assets/images/menu/curries-2.png'
import biryani from '../assets/images/menu/biryani.png'
import sweets from '../assets/images/sweet-dish.png'
import chefSpecialImage from '../assets/images/menu/chef-special.png'
import sides from '../assets/images/rice-dish.png'
import GetInTouch from '../components/GetInTouch'
import ScrollImageSection from '../components/ScrollImageSection'
import MenuSubNav from '../components/MenuSubNav'

// import menuData from "../assets/menu/menu.json";
import menuData from "../assets/menu/menu2.json";
import { ScrollImageSectionBannerMoving } from '../components/ScrollImageSectionBannerMoving'



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


        
        <MenuItems id={1} categories={menuData.categories} dishes={menuData.dishes} image={starters} targetSectionRef={targetSectionRef}  />
        <MenuItems id={2} categories={menuData.categories} dishes={menuData.dishes}  image={pieRolls}  />
        <MenuItems id={7} categories={menuData.categories} dishes={menuData.dishes}  image={chefSpecialImage}  />
        <MenuItems id={3} categories={menuData.categories} dishes={menuData.dishes}  image={curries} image2={curries2}  revert  />
        <MenuItems id={4} categories={menuData.categories} dishes={menuData.dishes}  image={biryani} revert />
        <MenuItems id={5} categories={menuData.categories} dishes={menuData.dishes}  image={sweets}  />
        <MenuItems id={6} categories={menuData.categories} dishes={menuData.dishes}   image={sides} />

        <div className="divider">
            <img src={divider} alt="divider" />
        </div>

        <GetInTouch paddingTop={'86px'} />
        <ScrollImageSection />

        {
        window.innerWidth < 990
        ?
        <ScrollImageSectionBannerMoving speed={5000}  />
        :
        null
      }

    </section>
  )
}

export default Menu