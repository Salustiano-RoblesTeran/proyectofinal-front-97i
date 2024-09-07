import React from "react";
import "../App.css";

const medicos = [
  {
    nombre: "María",
    apellido: "García",
    especialidad: "Cardiología",
    localidad: "San miguel de tucuman",
  },
  {
    nombre: "José",
    apellido: "Martínez",
    especialidad: "Dermatología",
    localidad: "yerba buena",
  },
  {
    nombre: "Ana",
    apellido: "López",
    especialidad: "Pediatría",
    localidad: "Barrio Sur",
  },
  {
    nombre: "Luis",
    apellido: "Fernández",
    especialidad: "Oftalmología",
    localidad: "Barrio Norte",
  },
  {
    nombre: "Carla",
    apellido: "Gómez",
    especialidad: "Ginecología",
    localidad: "San miguel de tucuman",
  },
];

const App = () => {
  // Función para manejar el click en el botón de "Sacar turno"
  const handleSacarTurno = (medico) => {
    alert(
      `Turno solicitado con el Dr./Dra. ${medico.nombre} ${medico.apellido}, Especialidad: ${medico.especialidad}`
    );
  };

  return (
    <div>
      <h1>Lista de Médicos</h1>
      {medicos.map((medico, index) => (
        <div key={index} className="lista-m">
          <p>
            <strong>Nombre:</strong> {medico.nombre} {medico.apellido}
          </p>
          <p>
            <strong>Especialidad:</strong> {medico.especialidad}
          </p>
          <p>
            <strong>Localidad:</strong> {medico.localidad}
          </p>
          <button onClick={() => handleSacarTurno(medico)}>Sacar turno</button>
        </div>
      ))}
    </div>
  );
};
/* ejemplo sacado de app de galvez */
<div className="doctor-item" data-category="diagnostico-por-imagenes">
  <div className="info-wrap">
    <div className="info">
      <h3 classname="doctor-name">
        <a classname="theme-color-hover" href="">
          Dr. Miguel Angel Galvez
        </a>
      </h3>
      <div classname="doctor-position">
        <a href="">Diagnóstico por imágenes</a> /{" "}
        <a href="">Radiología Digital</a> / <a href="">Tomografía Multicorte</a>{" "}
        / <a href="">Resonancia Magnética de Alto Campo</a>{" "}
      </div>
      <div classname="doctor-desc">
        <p></p>
        <p>
          Especialista en Diagnóstico por Imágenes – UNC-. Director Médico del
          Centro de Diagnóstico por Imágenes. Director a cargo del curso…
        </p>
        <p></p>
      </div>
      <div classname="doctor-read-more">
        <a classname="theme-bg" href="../Components/FormularioUsuario.jsx">
          Sacar turno
        </a>
      </div>
    </div>
  </div>
</div>;

export default App;
