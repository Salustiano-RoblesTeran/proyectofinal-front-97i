import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      description: "Cardiólogo con más de 10 años de experiencia.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dra. Jane Smith",
      description: "Especialista en dermatología.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Michael Brown",
      description: "Cirujano ortopédico.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dra. Emily White",
      description: "Pediatra con una gran pasión por los niños.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Chris Johnson",
      description: "Endocrinólogo especializado en diabetes.",
      image: "https://via.placeholder.com/150",
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
