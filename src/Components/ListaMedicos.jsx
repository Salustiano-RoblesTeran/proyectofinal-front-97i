import React from "react";
/* ayuda rolling */

const ListaMedicos = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Médicos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Localidad</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico, index) => (
            <tr key={index}>
              <td>{medico.nombre}</td>
              <td>{medico.apellido}</td>
              <td>{medico.especialidad}</td>
              <td>{medico.localidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getAllMedicos = async (req, res) => {
  try {
    const numeroPagina = req.query.numeroPagina || 0;
    const limite = req.query.limite || 8;

    // Buscar usuarios con el rol de "medico"
    const [medicos, count] = await Promise.all([
      UserModel.find({ role: "medico" })
        .select("-password")
        .skip(numeroPagina * limite)
        .limit(limite),
      UserModel.countDocuments({ role: "medico" }),
    ]);

    res.status(200).json({ msg: "All medicos: ", medicos, count, limite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error: Server", error });
  }
};

export default ListaMedicos;
