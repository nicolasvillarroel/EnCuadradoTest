import React, { useState, useEffect } from 'react';

const FormularioHorariosServicios = ({ navigation }) => {
  const [nombreServicio, setNombreServicio] = useState('');
  const [dias, setDias] = useState([]);
  const [hora, setHora] = useState([]);
  const [proporcionador, setProporcionador] = useState('');
  const [servicios, setServicios] = useState(
    JSON.parse(localStorage.getItem('servicios')) || []
  );

  useEffect(() => {
    localStorage.setItem('servicios', JSON.stringify(servicios));
  }, [servicios]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoServicio = {
      id: new Date().getTime(),
      nombre: nombreServicio,
      dias: dias.join('-'),
      hora: hora.join('/'),
      proporcionador
    };
    setServicios([...servicios, nuevoServicio]);
    setNombreServicio('');
    setProporcionador('');
    setDias([]);
    setHora([]);
  };

  const handleDelete = (id) => {
    const nuevosServicios = servicios.filter((servicio) => servicio.id !== id);
    setServicios(nuevosServicios);
  };

  const handleDiasChange = (event) => {
    const value = event.target.value;
    setDias(
      event.target.checked
        ? [...dias, value]
        : dias.filter((dia) => dia !== value)
    );
  };

  const handleHoraChange = (event) => {
    const value = event.target.value;
    setHora(
      event.target.checked
        ? [...hora, value]
        : hora.filter((h) => h !== value)
    );
  };

  return (
    <div>
      <h1>Formulario de Horarios y Servicios</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Servicio:</label>
          <input
            type="text"
            value={nombreServicio}
            onChange={(event) => setNombreServicio(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Profesional:</label>
          <input
            type="text"
            value={proporcionador}
            onChange={(event) => setProporcionador(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Días de la semana:</label>
          <div>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((dia) => (
              <div key={dia}>
                <input
                  type="checkbox"
                  id={dia}
                  value={dia}
                  checked={dias.includes(dia)}
                  onChange={handleDiasChange}
                />
                <label htmlFor={dia}>{dia}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label>Horas:</label>
          <div>
            {Array.from({ length: 5 }, (_, i) => i + 8).map((hora) => {
              const value = hora.toString().padStart(2, '0') + ':00';
              return (
                <div key={value}>
                  <input
                    type="checkbox"
                    id={value}
                    value={value}
                    checked={hora.includes(value)} // Cambio aquí
                    onChange={handleHoraChange}
                  />
                  <label htmlFor={value}>{value}</label>
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit">Guardar</button>
      </form>

      <h2>Servicios agregados:</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            {`${servicio.nombre} por ${servicio.proporcionador} - ${servicio.dias} a las ${servicio.hora}`}
            <button onClick={() => handleDelete(servicio.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormularioHorariosServicios;
