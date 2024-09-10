// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import HomeScreen from './Pages/HomeScreen';
import ProtectedRoutesUser from './routes/ProtectedRoutesUser';
import UserScreen from './Pages/UserScreen';

function App() {





  return (
    <BrowserRouter>
      <>
        {/* NavBar siempre presente */}
        <NavBar />

        <Routes>
          {/* Ruta de inicio */}
          <Route path="/" element={<HomeScreen />} />

          {/* Ruta protegida para el usuario */}
          <Route path='/user' element={
            <ProtectedRoutesUser>
              <UserScreen />
            </ProtectedRoutesUser>
          } />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
