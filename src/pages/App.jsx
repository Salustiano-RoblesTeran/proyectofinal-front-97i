import DataTable from "react-data-table-component";

function App() {
  const columns = [
    {
      Nombre: "nombre",
    },
    {
      Nombre: "Apellido",
    },
    {
      Nombre: "Edad",
    },
  ];
  const data = [];
  return (
    <div>
      <DataTable columns={columns} data={[]} />
    </div>
  );
}

export default App;
