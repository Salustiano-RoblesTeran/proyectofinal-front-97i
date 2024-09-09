import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';

const Section2 = () => {
  const [medicos, setMedicos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEstudio: '',
    medicoId: '',
    message: ''
  });

  // Obtener médicos del backend
  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await fetch('/api/medicos');
        const data = await response.json();
        setMedicos(data.medicos);
      } catch (error) {
        console.error('Error fetching medicos:', error);
      }
    };
    fetchMedicos();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificamos si el usuario tiene el JWT
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Debes estar logueado para solicitar un turno");
      return;
    }

    try {
      const response = await fetch('/api/appointments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Turno solicitado con éxito');
      } else {
        alert(data.msg || 'Error al solicitar turno');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={6} id=''>
          <h2>Solicitar Turnos</h2>
          <hr className="w-25"/>
          <p>Rellena el formulario y solicita el turno con el medicos que necesites!</p>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="nombre">
                  <Form.Control
                    type="text"
                    placeholder="Nombre y apellido"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="telefono">
                  <Form.Control
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="tipoEstudio">
                  <Form.Select
                    value={formData.tipoEstudio}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Elegir estudio</option>
                    {/* Opciones de estudios */}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="medicoId">
                  <Form.Select
                    value={formData.medicoId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Elegir Médico</option>
                    {medicos.map((medico) => (
                      <option key={medico._id} value={medico._id}>
                        {medico.first_name} {medico.last_name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="message">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Solicitar Turno
            </Button>
          </Form>
        </Col>

        <Col lg={6} className="mt-4 mt-lg-0">
          <h2>Preguntas Frecuentes</h2>
          <hr className="w-25"/>
          <p>Algunas de las preguntas que nuestros pacientes suelen tener...</p>
          <Accordion className='mt-4'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Que es un estudio de alta complejidad?</Accordion.Header>
              <Accordion.Body>
              Son estudios de Resonancia Magnética, Tomografía Computada ó Mamografía Digital que profundizan en la exploración diagnóstica para una evaluación mas completa de los tejidos..
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Es necesaria internacion?</Accordion.Header>
              <Accordion.Body>
              No. Los estudios se realizan de manera ambulatoria, es decir que el paciente se va el mismo día que se realiza la práctica. Las prácticas pueden durar entre 45 minutos y 1 hora dependiendo el estudio.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Que preparacion debo realizar?</Accordion.Header>
              <Accordion.Body>
                Depende el estudio a realizarse.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Cuando recibire mis resultados?</Accordion.Header>
              <Accordion.Body>
              Los resultados suelen estar disponibles entre 24 y 48 horas después del examen. Su médico recibirá los resultados y los discutirá con usted en su cita de seguimiento.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Mi medico realizo un pedido ¿todavia sirve?</Accordion.Header>
              <Accordion.Body>
              Las órdenes ó prescripciones médicas tienen una validez de 30 días. Debiendo contar con la siguiente información: Datos del paciente y obra social, práctica a realizar, diagnóstico, fecha, firma y sello del médico especialista que lo deriva.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
