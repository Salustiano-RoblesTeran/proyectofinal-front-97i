import React from "react";

import CardSlider from "../Components/Home/CardSlider"
import Pasos from "../Components/Home/Pasos"
import HeroSection from "../Components/Home/HeroSection";
import SectionInfo from "../Components/Home/SectionInfo";
import Section2 from "../Components/Home/Section2"
const HomeScreen = () => {
  return (
    <>
    <div className="App">
      <HeroSection/>
      <SectionInfo />
      <Pasos/>
      <Section2 />
      <h1 className="text-center my-4">Nuestros Médicos</h1>
      <CardSlider/>

    </div>
        
    </>

  )
}
export default HomeScreen