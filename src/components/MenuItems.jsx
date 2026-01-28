import React from 'react'
import glutenFree from '../assets/images/menu/gluteen_free_icon.svg'
import dairy from '../assets/images/menu/dairy_icon.svg'
import nutFree from '../assets/images/menu/nut_free_icon.svg'
import EggFree from '../assets/images/menu/egg_free_icon.svg'
import vegan from '../assets/images/menu/vegan_icon.svg'
import leafIcon from '../assets/images/home/leaf-icon.svg'
import mahaBali from '../assets/images/home/Mahabali.svg'
import Damroo from '../assets/images/home/Damroo.svg'
import Vilakka from '../assets/images/home/Vilakka.svg'
import starFlower from '../assets/images/home/star-flower.svg'

import '../assets/css/menu-items.css'

function MenuItems({dishes, image, revert, targetSectionRef, id, categories, image2}) {

    const iconMapping = {
        "dairy free": dairy,
        "nut free": nutFree,
        "egg free": EggFree,
        "vegan": vegan,
        "gluten free": glutenFree,
    };


  return (
    <section className='menu-items' ref={targetSectionRef} >

        {
            categories.filter(el => el.id === id)[0].name === "Starters" ? <img src={leafIcon} alt="" className='leaf-icon' /> : null
        }

        {
            categories.filter(el => el.id === id)[0].name === "Starters" ? <img src={mahaBali} alt="" className='mahabali' /> : null
        }

        {
            categories.filter(el => el.id === id)[0].name === "Sweets" ? <img src={starFlower} alt="" className='starFlower' /> : null
        }
        
        
        <div className={`container ${categories.filter(el => el.id === id)[0].name}`} style={{flexDirection : revert ? "row-reverse" : "row"}}>

            <div className="left-section">
                <div className="img-container" 
                    style={{
                        marginTop : 
                        (categories.filter(el => el.id === id)[0].name === "Starters") && window.innerWidth > 990
                        ? 
                        "15%" 
                        : 
                        ''
                    }}
                >
                    <img src={image} alt={image} className={categories.filter(el => el.id === id)[0].name} />
                </div>

                {
                    categories.filter(el => el.id === id)[0].name === "Curries - Single Portion" ? <img src={Damroo} alt="" className='Damroo' /> : null
                }

                {
                    
                    image2 ? 
                    <div className="img-container" 
                    style={{
                        marginTop : 
                        (categories.filter(el => el.id === id)[0].name === "Starters") && window.innerWidth > 990
                        ? 
                        "15%" 
                        : 
                        ''
                    }}
                >
                    <img src={image2} alt={image2} className={`image2 ${categories.filter(el => el.id === id)[0].name}`}  /> 
                    </div>
                    : null
                }

                {
                    categories.filter(el => el.id === id)[0].name === "Pies/Rolls" ? <img src={Vilakka} alt="" className='Vilakka' /> : null
                }

                
                
            </div>
            <div className="right-section">

                <h2 className='fs-48 fw-600'>{categories.filter(el => el.id === id)[0].name}</h2>
                <h3 className='fs-24 fw-600 short-info'>{
                    categories.filter(el => el.id === id)[0].shortInfo 
                    ?
                    (categories.filter(el => el.id === id)[0].shortInfo )
                    : null
                    } </h3>

                <div className="food-items">

                    {
                        dishes.map(el => (
                            el.category === id
                            ?
                            <div className="items" key={el.id}>

                            <div className='name-section'>
                                <div className="item-name">
                                    <h3 className='fs-24 poppins fw-600' >{el.dishName}</h3>
                                    <div className="image-container desktop">
                                    {el.type.map((type) => (
                                        iconMapping[type] ? (
                                            <img
                                                key={type}
                                                src={iconMapping[type]}
                                                alt={type}
                                                className="type-icon"
                                            />
                                        ) : null
                                    ))}
                                    </div>
                                </div>
                                <p className='short-desc fs-16 poppins fw-400'>{el.shortDesc}</p>
                            </div>
                            <div className="image-container mobile">
                                    {el.type.map((type) => (
                                        iconMapping[type] ? (
                                            <img
                                                key={type}
                                                src={iconMapping[type]}
                                                alt={type}
                                                className="type-icon"
                                            />
                                        ) : null
                                    ))}
                                    </div>
                            <div className="price">
                                <h3 className='fs-24 poppins fw-500'>${el.price.toFixed(2)}</h3>
                            </div>

                            </div>
                            : null
                        ))
                    }

                    

                </div>

            </div>

        </div>

    </section>
  )
}

export default MenuItems