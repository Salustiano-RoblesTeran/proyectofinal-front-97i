import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const doctors = [
    {
      name: "Dr. Jorge Garcia Pinna",
      description: "Cardiólogo con más de 10 años de experiencia.",
      image: "https://www.centrogalvez.com.ar/wp-content/uploads/2017/01/G_garcia-pinna-343x255.png",
    },
    {
      name: "Dra. Eduardo Galvez",
      description: "Diagnostico por imagenes / Tomografia multicorte / Resonancia magenetica de alto campo",
      image: "https://centrogalvez.com.ar/wp-content/uploads/2017/01/Dr.-Eduardo-Galvez-343x255.png",
    },
    {
      name: "Dr Claudia Morales",
      description: "Especialista en clinica pediatra",
      image: "https://www.centrogalvez.com.ar/wp-content/uploads/2016/12/g-dramorales-1-343x255.png",
    },
    {
      name: "Dra. Emily White",
      description: "Clinico Medico / Radiologia digital / Ecografia",
      image: "https://www.centrogalvez.com.ar/wp-content/uploads/2017/11/g-drramirez-343x255.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mt-4">
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <div key={index} className="p-2">
            <div className="card" style={{ width: '18rem' }}>
              <img src={doctor.image} className="card-img-top" alt={doctor.name} />
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
