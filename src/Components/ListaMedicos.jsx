import React from "react";

const medicos = [
  {
    nombre: "María",
    apellido: "García",
    especialidad: "Cardiología",
    localidad: "San miguel de tucuman",
  },
  {
    nombre: "José",
    apellido: "Gonzalez",
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
const ListaMedicos = () => {
  return (
    <div>
      {medicos.map((medico) => (
        <div>
          <p>{medico.nombre}</p>
          <p>{medico.apellido}</p>
          <p>{medico.especialidad}</p>
          <p>{medico.localidad}</p>
        </div>
      ))}
    </div>
  );
};
/* const ListaMedicos = () => {
  // Función para manejar el click en el botón de "Sacar turno"
  const handleSacarTurno = (medico) => {
    alert(
      `Turno solicitado con el Dr./Dra. ${medico.nombre} ${medico.apellido}, Especialidad: ${medico.especialidad}`
    );
  }; */

  export default ListaMedicos;
};
