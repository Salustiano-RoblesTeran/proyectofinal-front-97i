import DataTable from "react-data-table-component";
// import { useState } from "react";

function App() {
  // const [records, setRecords] = useState([]);

  // const handleChange = (e) => {
  //   const filteredRecords = data.filter((record) => {
  //     return record.nombre.tolowercase().includes(e.target.value.tolowercase());
  //   });
  //   setRecords(filteredRecords);
  // };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
    },
    {
      name: "DNI",
      selector: (row) => row.dni,
    },
  ];

  const data = [
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
    {
      nombre: "Gonzalo",
      apellido: "Martinez",
      telefono: "123456789",
      dni: "12345678",
    },
  ];

  return;
  <DataTable columns={columns} data={data} />;
}

export default App;
