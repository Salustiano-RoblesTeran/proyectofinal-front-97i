import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/Styles/Section1.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faTooth, faBrain, faChild, faFemale} from '@fortawesome/free-solid-svg-icons';

const SectionInfo = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 350,
    centerPadding: "60px",
    slidesToShow: 3, // Mostrar 3 servicios a la vez
    slidesToScroll: 1, // Desplazarse uno por uno
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas, mostrar solo 1 servicio
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Para pantallas medianas, mostrar 2 servicios
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    { title: 'Cardiología', description: 'Servicios de cardiología avanzada.', icon: faHeartbeat , size: "2xl"},
    { title: 'Odontología', description: 'Cuidado dental para toda la familia.', icon: faTooth , size: "2xl"},
    { title: 'Neurología', description: 'Tratamiento para enfermedades neurológicas.', icon: faBrain, size: "2xl" },
    { title: 'Pediatría', description: 'Atención médica para niños y adolescentes.', icon: faChild , size: "2xl"},
    { title: 'Ginecología', description: 'Tratamiento para problemas del suelo pelviano', icon: faFemale , size: "2xl"},
  ];

  return (
    <div className='contenedor-section' id='section-info'>
      <div className="background-text">Excelencia Médica, Cuidado Integral</div>
      <div className='titulos mb-5'>
        <h2 className="text-center fw-bold ">Servicios <span id='span-title'> y Especialidades médicas </span></h2>
        <p className="text-center fw-bold"><span id='span-subtitle'>Confiados en que la mejor prevención es un diagnóstico temprano, sumamos servicios, equipamiento y especialidades médicas.</span></p>
        <hr />
        </div>
      <div className="container service-carousel">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-item mt-5">
              <div className="service-icon">
                <FontAwesomeIcon icon ={service.icon} size={service.size} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionInfo;
