import React, { useState } from "react";
import FormularioAgregar from "./Components/FormularioUsuario";
import TablaUsuarios from "../src/Components/TablaUsuarios";

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
    <div className="container">
      <h1 className="text-left my-4 ">Gestión de Usuarios</h1>
      <FormularioAgregar onAgregar={agregarUsuario} />
      <h2>Usuarios Pendientes</h2>
      <TablaUsuarios
        usuarios={usuarios}
        onAceptar={aceptarUsuario}
        onRechazar={rechazarUsuario}
      />
      <h2>Usuarios Aceptados</h2>
      <TablaUsuarios Usuarios={usuariosAceptados} />
      <h2>Usuarios Rechazados</h2>
      <TablaUsuarios Usuarios={usuariosRechazados} />
    </div>
  );
};

export default App;
