const { useEffect } = require("react");

useEffect(() => {
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
}, []);

useEffect(() => {
  const getMedicoAppointments = async (req, res) => {
    try {
      const medicoId = req.params.id;
      const appointments = await AppointmentModel.find({ medico: medicoId })
        .populate("user", "name last_name")
        .populate("tipoEstudio", "name")
        .select("name tipoEstudio");

      if (!appointments) {
        return res.status(404).json({ msg: "Appointments not found" });
      }

      res.status(200).json({ msg: "Medico's appointments", appointments });
    } catch (error) {
      res.status(500).json({ msg: "Error: Server", error });
    }
  };
}, []);
