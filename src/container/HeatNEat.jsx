import React from 'react'
import Flovours from '../components/Flovours'
import '../assets/css/heat-n-eat.css'
import EventsTypes from '../components/EventsTypes'
import Gallery from '../components/Gallery'
import divider from '../assets/images/menu/divider.svg'
import QuickMeal from '../components/QuickMeal'
import GetInTouch from '../components/GetInTouch'
import ScrollImageSection from '../components/ScrollImageSection'
import { ScrollImageSectionBannerMoving } from '../components/ScrollImageSectionBannerMoving'


function HeatNEat({menuHeight}) {
  return (
    <section className='heat-n-eat' style={{marginTop : menuHeight}}>

        <Flovours />
        <EventsTypes />
        <Gallery />

        <div className="divider">
            <img src={divider} alt="divider" />
        </div>

        <QuickMeal />

        <div className="divider">
            <img src={divider} alt="divider" />
        </div>

        <GetInTouch />
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

export default HeatNEat