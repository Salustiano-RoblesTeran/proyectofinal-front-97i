import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'
import Home from './Pages/HomeScreen'
import Footer from "./Components/Common/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './routes/ProtectedRoutes';
import RoutesApp from './routes/RoutesApp';
import HomeScreen from './Pages/HomeScreen';
import IniciarSesion from './Components/Home/IniciarSesion';

function App() {

  // Estados para manejar login y datos de usuario
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Funcion para guardar datos del usuario autenticado
  const guardarUsuario = (usuario) => {
    setUser(datos);
  }

  // Funcion cuando inicia sesion
  const iniciarSesion = () => {
    setLogin(true);
  }

  // Funcion para cerrar sesion 
  const cerrarSesion = () => {
    setLogin(false);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas protegidas que reciben login, datos de usuario y función cerrar sesión */}
          <Route path='/*' element={
            <ProtectedRoutes login={login}>
                <RoutesApp cerrarSesion={cerrarSesion} user={user}/>
            </ProtectedRoutes>
          }
          />

          {/* Ruta de Login que recibe función para iniciar sesión y guardar datos de usuario*/}
          <Route path='/login' element={
            <IniciarSesion iniciarSesion={iniciarSesion} guardarUsuario={guardarUsuario}/>
          }
          />

        </Routes>
      </BrowserRouter>

      <Home/>
      <Footer/>
    </>
  )
}

export default App
