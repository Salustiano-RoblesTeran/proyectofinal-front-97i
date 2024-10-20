// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Common/NavBar';
import HomeScreen from './Pages/HomeScreen';
import IniciarSesion from './Components/Home/IniciarSesion'; 
import UserScreen from './Pages/UserScreen';
import PageAdmin from './Pages/PageAdmin';
import MedicoScreen from './Pages/MedicoScreen';
import ProtectedRoutesUser from './routes/ProtectedRoutesUser';
import ProtectedRoutesAdmin from '../src/routes/ProtectedRoutesAdmin';
import ProtectedRoutesMedico from './routes/ProtectedRoutesMedico';
import Footer from './Components/Common/Footer';
import AboutScreen from './Pages/AboutScreen';
import ErrorScreen from './Pages/ErrorScreen';

function App() {
  // Estado global para el usuario
  const [user, setUser] = useState(null);

  // Recuperar el usuario del localStorage si ya está logueado
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Actualiza el estado con el usuario guardado en localStorage
    }
  }, []);

  // Función que se pasará como prop a IniciarSesion para actualizar el usuario
  const guardarUsuario = (usuario) => {
    setUser(usuario);  // Actualiza el estado con el usuario que viene del login
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/login"
          element={<IniciarSesion guardarUsuario={guardarUsuario} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <PageAdmin />
            </ProtectedRoutesAdmin>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoutesUser user={user}>
              <UserScreen />
            </ProtectedRoutesUser>
          }
        />
        <Route
          path="/medico"
          element={
            <ProtectedRoutesMedico user={user}>
              <MedicoScreen />
            </ProtectedRoutesMedico>
          }
        />
                <Route
          path="/about"
          element={
              <AboutScreen />
          }
        />
        <Route path='/error' element={<ErrorScreen/>}/>
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
