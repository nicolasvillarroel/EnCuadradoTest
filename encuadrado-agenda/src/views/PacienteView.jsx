// PacienteView.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PacienteView = () => {
  const [date, setDate] = useState(new Date());
  const servicios = JSON.parse(localStorage.getItem('servicios')) || [];
  const reservas = JSON.parse(localStorage.getItem('reservas')) || [];

  const citasConfirmadas = reservas.filter((reserva) => reserva.confirmada);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Vista del Paciente</h1>

      {citasConfirmadas.length > 0 ? (
        <div>
          <h2>Citas Confirmadas:</h2>
          <ul>
            {citasConfirmadas.map((cita, index) => (
              <li key={index}>
                {cita.nombre} - {cita.dia} {cita.hora}-{parseInt(cita.hora.split(':')[0]) + 1}:00
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No tienes citas confirmadas.</div>
      )}

      <h2>Profesionales y sus servicios:</h2>
      {servicios.map((servicio, index) => (
        <div key={index}>
          <h3>{servicio.nombre}</h3>
          <p>{servicio.dia} {servicio.hora}-{parseInt(servicio.hora.split(':')[0]) + 1}:00</p>
          <p>Precio: ${servicio.precio}</p>
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={({ date, view }) => {
              if (view === 'month') {
                // Aquí deberías añadir la lógica para determinar si la fecha está disponible o no.
                return 'available';
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PacienteView;
