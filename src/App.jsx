import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import App from "../App";
import App from "./src/components/App";

function App() {
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
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRecords(data);
      setLoading(false);
    }),
      2000;
  });
  const handleChange = (e) => {
    const filteredRecords = data.filter((record) => {
      return record.nombre.tolowercase().includes(e.target.value.tolowercase());
    });
    setRecords(filteredRecords);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <DataTable
        title="DATOS DE USUARIOS"
        columns={columns}
        data={records}
        selectableRows
        pagination
        paginationPerPage={3}
        onSelectedRowsChange={(data) => console.log(data)}
        fixedHeader
        progressPending={loading}
        progressComponent={<div>Cargando...</div>}
      />
    </div>
  );
}

export default App;
