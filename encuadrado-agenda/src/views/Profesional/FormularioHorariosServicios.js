// FormularioHorariosServicios.js
import React, { useState } from 'react';

const FormularioHorariosServicios = () => {
  const [nombreServicio, setNombreServicio] = useState('');
  const [dia, setDia] = useState('Lunes');
  const [hora, setHora] = useState('08:00');
  const [servicios, setServicios] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoServicio = {
      nombre: nombreServicio,
      dia: dia,
      hora: hora
    };
    setServicios([...servicios, nuevoServicio]);
    console.log('Servicios:', servicios);
    // Aquí, puedes enviar la información a tu servidor o base de datos.
  };

  return (
    <div>
      <h1>Formulario de Horarios y Servicios</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del servicio:</label>
          <input
            type="text"
            value={nombreServicio}
            onChange={(event) => setNombreServicio(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Día de la semana:</label>
          <select
            value={dia}
            onChange={(event) => setDia(event.target.value)}
          >
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>

        <div>
          <label>Hora:</label>
          <select
            value={hora}
            onChange={(event) => setHora(event.target.value)}
          >
            {Array.from({ length: 11 }, (_, i) => i + 8).map((hora) => {
              const value = hora.toString().padStart(2, '0') + ':00';
              return <option key={value} value={value}>{value}</option>;
            })}
          </select>
        </div>

        <button type="submit">Guardar</button>
      </form>

      <h2>Servicios agregados:</h2>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>{`${servicio.nombre} - ${servicio.dia} a las ${servicio.hora}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormularioHorariosServicios;
