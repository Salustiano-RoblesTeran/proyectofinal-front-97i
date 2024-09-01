import React, { useState } from "react";
import Paciente from "../components/Pacientes";

const TablaPacientes = ({ pacientes, onAceptar, onRechazar }) => {
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const pacientesPorPagina = 5;
    const [historiaClinica, setHistoriaClinica] = useState('');
    const totalPaginas = Math.ceil(pacientes.length / pacientesPorPagina);

    const indiceUltimoPaciente = paginaActual * pacientesPorPagina;
    const indicePrimerPaciente = indiceUltimoPaciente - pacientesPorPagina;
    const pacientesActuales = pacientes.slice(indicePrimerPaciente, indiceUltimoPaciente);

    const handleVerHistoriaClinica = (paciente) => {
        setPacienteSeleccionado(paciente);
        setHistoriaClinica(''); // Resetea el formulario cuando se abre el modal
    };

    const handleGuardarHistoriaClinica = () => {
        console.log(`Guardando historia clínica para ${pacienteSeleccionado.nombre}:`, historiaClinica);
        setPacienteSeleccionado(null); // Cierra el modal después de guardar
    };

    const handleClickPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark  text-center">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>DNI</th>
                        <th>Teléfono</th>
                        <th>Consulta</th>
                        <th>Turno</th>
                        {onAceptar && onRechazar && <th>Acciones</th>}
                        {!onAceptar && !onRechazar && <th>Historia Clínica</th>}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {pacientesActuales.map(paciente => (
                        <Paciente 
                            key={paciente.id} 
                            paciente={paciente} 
                            onAceptar={onAceptar} 
                            onRechazar={onRechazar} 
                            onVerHistoriaClinica={handleVerHistoriaClinica} 
                        />
                    ))}
                </tbody>
            </table>
            {pacienteSeleccionado && (
                <div className="modal fade show" id="historiaClinicaModal" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="historiaClinicaModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="historiaClinicaModalLabel">Historia Clínica de {pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setPacienteSeleccionado(null)}></button>
                            </div>
                            <div className="modal-body">
                                {/* Formulario para agregar la historia clínica */}
                             
                                    <div className="mb-3">
                                    <p><strong>DNI:</strong> {pacienteSeleccionado.dni}</p>
                                    <p><strong>Teléfono:</strong> {pacienteSeleccionado.tel}</p>
                                    <p><strong>Consulta:</strong> {pacienteSeleccionado.consulta}</p>
                                    <p><strong> Historia Clínica</strong></p>
                                      
                                        <textarea
                                            id="historiaClinica"
                                            className="form-control"
                                            rows="5"
                                            value={historiaClinica}
                                            onChange={(e) => setHistoriaClinica(e.target.value)}></textarea>
                                          
                                    </div>
                            
                            </div>
                            <div className="modal-footer">
                              
                                <button type="button" className="btn btn-success" onClick={handleGuardarHistoriaClinica}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Paginación */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <li key={index + 1} className={`page-item ${paginaActual === index + 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => handleClickPagina(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default TablaPacientes;