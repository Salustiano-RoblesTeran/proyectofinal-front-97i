import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Common/NavBar"
import Footer from "./Components/Common/Footer"

import RoutesApp from './routes/RoutesApp';
import HomeScreen from './Pages/HomeScreen';
// import AdminScreen from './Pages/AdminScreen';
import PageAdmin from './Pages/PageAdmin';
import PerfilScreen from './Pages/PerfilScreen';

import ProtectedRoutes from './routes/ProtectedRoutes';
import ProtectedRoutesAdmin from './routes/ProtectedRoutesAdmin';
import AboutScreen from './Pages/AboutScreen';

function App() {
  // Estados para manejar login y datos de usuario
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState("USER_ROLE");

  // Función para cerrar sesión 
  const cerrarSesion = () => {
    setLogin(false);
    setUser(null); // Limpia el usuario al cerrar sesión
  }

  return (
    <BrowserRouter>
      <>
        {/* NavBar siempre presente */}
        <NavBar cerrarSesion={cerrarSesion} user={user} login={login} />

        <Routes>
          {/* Ruta de inicio */}
          <Route path="/" element={<HomeScreen />} />

          {/* Ruta pública "Sobre Nosotros" */}
          <Route path="/about" element={<AboutScreen />} />

          {/* Rutas protegidas */}
          <Route path="/perfil" element={
            <ProtectedRoutes login={login}>
              <PerfilScreen />
            </ProtectedRoutes>
          } />

          <Route path="/admin" element={
            <ProtectedRoutesAdmin user={user}>
              <PageAdmin />
            </ProtectedRoutesAdmin>
          } />

          {/* Rutas protegidas adicionales */}
          <Route path="/*" element={
            <ProtectedRoutes login={login}>
              <RoutesApp cerrarSesion={cerrarSesion} user={user} />
            </ProtectedRoutes>
          } />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
