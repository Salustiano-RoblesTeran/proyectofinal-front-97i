import React, { useState } from "react";
import FormularioAgregar from "../src/Components/FormularioUsuario";
import TablaUsuarios from "../src/Components/TablaUsuarios";
import "./App.css";
import ListaMedicos from "../src/Components/ListaMedicos";

/* const generarId = () => {
  return Date.now();
};

const generarFecha = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const hora = fecha.getHours();
  const minuto = fecha.getMinutes();
  const segundo = fecha.getSeconds();
  return `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo}`;
};

const generarTurno = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const hora = fecha.getHours();
  const minuto = fecha.getMinutes();
  const segundo = fecha.getSeconds();
  return `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo}`;
}; */

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosAceptados, setUsuariosAceptados] = useState([]);
  const [usuariosRechazados, setUsuariosRechazados] = useState([]);
  const [usuariosSolicitados, setUsuariosSolicitados] = useState([]);

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
  const solicitarUsuario = (id) => {
    const usuarioSolicitado = usuarios.find((usuario) => usuario.id === id);
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    setUsuariosSolicitados([...usuariosSolicitados, usuarioSolicitado]);
  };

  return (
    <div className="container-fluid">
      <h1 className="titulo-principal">PANEL DE USUARIOS</h1>

      <div className="container-tabla">
        <FormularioAgregar onAgregar={agregarUsuario} />
        <h2>TURNOS REALIZADOS</h2>
        <TablaUsuarios
          usuario={usuarios} // Corregido: pasar 'usuario' como prop
          onAceptar={aceptarUsuario}
          onRechazar={rechazarUsuario}
          onSolicitar={solicitarUsuario}
        />
        <h2>TURNOS RECHAZADOS</h2>
        <TablaUsuarios usuario={usuariosRechazados} />
        <h2>TURNOS EN ESPERA/SOLICITADOS</h2>
        <TablaUsuarios usuario={usuariosSolicitados} />
        <h2>TURNOS ACEPTADOS</h2>
        <TablaUsuarios usuario={usuariosAceptados} />
      </div>
    </div>
  );
};

export default App;
