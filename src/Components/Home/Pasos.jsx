import imgRegistrar from '../../assets/sacarTurno/registrarse.png'
import imgConfirmar from '../../assets/sacarTurno/confirmacion.png'
import imgAceptar from '../../assets/sacarTurno/aceptar.png'

const Pasos = () => {
  return (
    <>
        <section className="m-5">
      <h2 className="text-center my-4">Usar nuestra web es super sencillo</h2>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-4 text-center">
          <img src={imgRegistrar} width="128" alt="Registrarse" />
          <h5 className="card-title">Registarte</h5>
          <p className="card-text">Create una cuenta o inicia sesión</p>
        </div>
        <div className="col-12 col-md-12 col-lg-4 text-center">
          <img src={imgConfirmar} width="128" alt="Sacar turno" />
          <h5 className="card-title">Saca turno</h5>
          <p className="card-text">Busca el médico de la especialidad que necesites y saca turno</p>
        </div>
        <div className="col-12 col-md-12 col-lg-4 text-center">
          <img src={imgAceptar} width="128" alt="Esperar..." />
          <h5 className="card-title">Esperar...</h5>
          <p className="card-text">¡Tenes que esperar que el médico te acepte el turno!</p>
        </div>
      </div>
    </section>
    </>
  )
}
export default Pasos