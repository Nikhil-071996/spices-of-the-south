import React from 'react'
import AboutUs from '../components/AboutUs'
import DishSection from '../components/DishSection'
import DishSectionTwo from '../components/DishSectionTwo'
import OurServices from '../components/OurServices'
import GetInTouch from '../components/GetInTouch'
import ScrollImageSection from '../components/ScrollImageSection'
import '../assets/css/about-us.css'

function About({menuHeight}) {
  return (
    <section className='about-us' style={{marginTop : menuHeight}}>
        

      <AboutUs />
      <DishSection />
      <DishSectionTwo />

      <OurServices />
      <GetInTouch paddingTop={'141px'} />
      <ScrollImageSection />

    </section>
  )
}

export default About