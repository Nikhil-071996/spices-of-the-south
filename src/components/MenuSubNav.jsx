import React from 'react'

import glutenFree from '../assets/images/menu/gluteen_free_icon.svg'
import dairy from '../assets/images/menu/dairy_icon.svg'
import nutFree from '../assets/images/menu/nut_free_icon.svg'
import EggFree from '../assets/images/menu/egg_free_icon.svg'
import vegan from '../assets/images/menu/vegan_icon.svg'

import '../assets/css/menu-sub-nav.css'

function MenuSubNav({menuHeight, isMenuVisible}) {
  return (
    <div className='menu-sub-nav' 
            // style={{top : menuHeight}}
            style={{top : !isMenuVisible ? 0 : menuHeight}}
        >

        <div className="type-of-foods">

            <div className="types">
                <img src={glutenFree} alt="" />
                <h4 className='fs-20 fw-500 poppins' >GF - Gluten Free</h4>
            </div>

            <div className="types">
                <img src={dairy} alt="" />
                <h4 className='fs-20 fw-500 poppins' >DF – Dairy Free </h4>
            </div>

            <div className="types">
                <img src={nutFree} alt="" />
                <h4 className='fs-20 fw-500 poppins' >NF – Nut Free</h4>
            </div>

            <div className="types">
                <img src={EggFree} alt="" />
                <h4 className='fs-20 fw-500 poppins' >EF - Egg Free</h4>
            </div>

            <div className="types">
                <img src={vegan} alt="" />
                <h4 className='fs-20 fw-500 poppins' > V – Vegan</h4>
            </div>

        </div>

    </div>
  )
}

export default MenuSubNav