import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from "./Components/Common/NavBar"
import Footer from "./Components/Common/Footer"


import RoutesApp from './routes/RoutesApp';
import HomeScreen from './Pages/HomeScreen';
import AdminScreen from './Pages/AdminScreen';
import PerfilScreen from './Pages/PerfilScreen';

import ProtectedRoutes from './routes/ProtectedRoutes';
import ProtectedRoutesAdmin from './routes/ProtectedRoutesAdmin';
import AboutScreen from './Pages/AboutScreen';

function App() {


  // Estados para manejar login y datos de usuario
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState("USER_ROLE");

  // Funcion para cerrar sesion 
  const cerrarSesion = () => {
    setLogin(false);
    setUser(null); // Limpia el usuario al cerrar sesión
  }


  return (
    <BrowserRouter>
      <>
        {/* NavBar siempre presente */}
        <NavBar cerrarSesion={cerrarSesion} user={user} login={login}/>

        <Routes>
          {/* Ruta de inicio */}
          <Route path="/" element={<HomeScreen />} />


          {/* Ruta pública "Sobre Nosotros" */}
          <Route path="/about" element={<AboutScreen/>} />


            {/* Rutas protegidas que reciben login, datos de usuario y función cerrar sesión */}


          <Route path="/perfil" element={
          <ProtectedRoutes login={login}>
            <PerfilScreen/>
          </ProtectedRoutes>
        }/>

        <Route path="/admin" element={
          <ProtectedRoutesAdmin user={user}>
            <AdminScreen/>
          </ProtectedRoutesAdmin>
        }/>

          {/* Rutas protegidas que reciben login, datos de usuario y función cerrar sesión */}
          <Route path="/*" element={
            <ProtectedRoutes login={login}>
                <RoutesApp cerrarSesion={cerrarSesion} user={user}/>
            </ProtectedRoutes>
          }/>


        </Routes>

        <Footer/>
      </>
    </BrowserRouter>
  )
}

export default App;
