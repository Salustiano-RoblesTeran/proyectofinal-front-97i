import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una empresa dedicada a ofrecer servicios de salud de calidad. Nuestra misión es brindar la mejor atención médica y asesoramiento a nuestros pacientes.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Inicio</Link></li>
              <li><Link to="/error" className="text-light">Servicios</Link></li>
              <li><Link to="/error" className="text-light">Contacto</Link></li>
              <li><Link to="/error" className="text-light">Acerca de</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone"></i> Teléfono: +123 456 789</li>
              <li><i className="bi bi-envelope"></i> Email: info@prosalud.com</li>
              <li><i className="bi bi-geo-alt"></i> Dirección: Calle Falsa 123, Ciudad</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 ProSalud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
