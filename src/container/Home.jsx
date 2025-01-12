import React from 'react'
import Banner from '../components/Banner'
import GallerySection from '../components/GallerySection'
import OurServices from '../components/OurServices'
import GetInTouch from '../components/GetInTouch'
import SpicesSection from '../components/SpicesSection'
import ScrollImageSection from '../components/ScrollImageSection'
import '../assets/css/home.css'

function Home() {
  return (
    <>
        <Banner />

        <GallerySection />

        <OurServices />

        <GetInTouch paddingTop={'181px'} />

        <SpicesSection />

        <ScrollImageSection />

    </>
  )
}

export default Home