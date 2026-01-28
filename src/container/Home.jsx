import React from 'react'
import Banner from '../components/Banner'
import GallerySection from '../components/GallerySection'
import OurServices from '../components/OurServices'
import GetInTouch from '../components/GetInTouch'
import SpicesSection from '../components/SpicesSection'
import ScrollImageSection from '../components/ScrollImageSection'
import '../assets/css/home.css'


import { ScrollImageSectionBannerMoving } from '../components/ScrollImageSectionBannerMoving'
import Subscribe from '../components/Subscribe'

function Home() {



  return (
    <>
        <Banner />

        <GallerySection />

        <OurServices />

        <GetInTouch paddingTop={'181px'} />
        
        <Subscribe/>

        <SpicesSection />

        <ScrollImageSection />

      {
        window.innerWidth < 990
        ?
        <ScrollImageSectionBannerMoving speed  />
        :
        null
      }
    </>
  )
}

export default Home