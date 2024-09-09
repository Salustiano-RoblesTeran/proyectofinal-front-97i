import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
        <Col lg={6}>
          <h2>Solicitar Turnos</h2>
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
      </Row>
    </Container>
  );
};

export default Section2;
