import React, { useState } from "react";


import NavBar from "../Components/Common/NavBar"
import CardSlider from "../Components/Home/CardSlider"
import Pasos from "../Components/Home/Pasos"

const HomeScreen = () => {
  return (
    <>
        <NavBar />
    <div className="App">
      <h1 className="text-center my-4">Nuestros Médicos</h1>
      <CardSlider/>
      <Pasos/>
    </div>
        
    </>

  )
}
export default HomeScreen