import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'
import Home from './Pages/Home'
import Footer from "./Components/Common/Footer"

function App() {

  return (
    <>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
