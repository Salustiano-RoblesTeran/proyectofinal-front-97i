const { useEffect } = require("react");

useEffect(() => {
  const getUserAppointments = async (req, res) => {
    try {
      const userId = req.params.id;
      const appointments = await AppointmentModel.find({ user: userId })
        .populate("tipoEstudio", "name")
        .populate("medico", "first_name last_name");

      if (!appointments) {
        return res.status(404).json({ msg: "Appointments not found" });
      }

      res.status(200).json({ msg: "User's appointments", appointments });
    } catch (error) {
      res.status(500).json({ msg: "Error: Server", error });
    }
  };
}, []);
