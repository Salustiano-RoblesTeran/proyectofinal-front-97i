import React from 'react'
import NavBar from '../Components/Common/NavBar'
import HeroSection from '../Components/Home/HeroSection'
import SectionInfo from '../Components/Home/SectionInfo'
import Section2 from '../Components/Home/Section2'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection />
    <SectionInfo />
    <div className="m-2">
    <Section2 />
    </div>

    </>
  )
}

export default Home