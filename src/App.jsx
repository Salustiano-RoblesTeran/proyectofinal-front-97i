import React, { useState } from "react";
import FormularioAgregar from "../src/Components/FormularioUsuario";
import TablaUsuarios from "../src/Components/TablaUsuarios";
import "./App.css";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosAceptados, setUsuariosAceptados] = useState([]);
  const [usuariosRechazados, setUsuariosRechazados] = useState([]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const aceptarUsuario = (id) => {
    const usuarioAceptado = usuarios.find((usuario) => usuario.id === id);
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    setUsuariosAceptados([...usuariosAceptados, usuarioAceptado]);
  };

  const rechazarUsuario = (id) => {
    const usuarioRechazado = usuarios.find((usuario) => usuario.id === id);
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    setUsuariosRechazados([...usuariosRechazados, usuarioRechazado]);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-left mt-3 mb-3">PANEL DE USUARIOS</h1>

      <div className="container">
        <FormularioAgregar onAgregar={agregarUsuario} />
        <h2>Usuarios Pendientes</h2>
        <TablaUsuarios
          usuario={usuarios}  // Corregido: pasar 'usuario' como prop
          onAceptar={aceptarUsuario}
          onRechazar={rechazarUsuario}
        />
        <h2>Usuarios Aceptados</h2>
        <TablaUsuarios usuario={usuariosAceptados} /> 
        <h2>Usuarios Rechazados</h2>
        <TablaUsuarios usuario={usuariosRechazados} />
      </div>
    </div>
  );
};

export default App;
