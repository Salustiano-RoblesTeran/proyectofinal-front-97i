import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Common/NavBar';
import HomeScreen from './Pages/HomeScreen';
import IniciarSesion from './Components/Home/IniciarSesion'; 
import UserScreen from './Pages/UserScreen';
import PageAdmin from './Pages/PageAdmin';
import MedicoScreen from './Pages/MedicoScreen';
import ProtectedRoutesUser from './routes/ProtectedRoutesUser';
import ProtectedRoutesAdmin from './routes/ProtectedRoutesAdmin';
import ProtectedRoutesMedico from './routes/ProtectedRoutesMedico';
import Footer from './Components/Common/Footer';

function App() {
  const [user, setUser] = useState(null);

  // Recuperamos el usuario desde localStorage cuando la aplicación se monta
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Cargamos el usuario en el estado
    }
  }, []);

  const guardarUsuario = (usuario) => {
    setUser(usuario);
    localStorage.setItem('user', JSON.stringify(usuario));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<IniciarSesion guardarUsuario={guardarUsuario} />} />
        
        {/* Rutas protegidas por roles */}
        <Route path="/admin" element={
          <ProtectedRoutesAdmin user={user}>
            <PageAdmin />
          </ProtectedRoutesAdmin>
        } />
        
        <Route path="/user" element={
          <ProtectedRoutesUser user={user}>
            <UserScreen />
          </ProtectedRoutesUser>
        } />
        
        <Route path="/medico" element={
          <ProtectedRoutesMedico user={user}>
            <MedicoScreen />
          </ProtectedRoutesMedico>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
