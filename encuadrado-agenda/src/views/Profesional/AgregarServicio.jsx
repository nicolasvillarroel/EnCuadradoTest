import React, { useState } from 'react';
import './AgregarServicio.css';
import { useNavigate } from 'react-router-dom';

const AgregarServicio = () => {
    
    const navigate = useNavigate();
    
  const [servicio, setServicio] = useState({
    tipo: '',
    nombre: '',
    edad: '',
    precio: '',
    disponibilidad: [
        {
          fecha: "2023-10-23",  // formato YYYY-MM-DD
          horarios: [
            { hora: "9:00-10:00", disponible: true },
            { hora: "10:00-11:00", disponible: true },
            { hora: "11:00-12:00", disponible: true },
            { hora: "12:00-13:00", disponible: true },
            { hora: "13:00-14:00", disponible: true },
            { hora: "14:00-15:00", disponible: true },
            { hora: "15:00-16:00", disponible: true }
          ]
        },{
        fecha: "2023-10-24",  // formato YYYY-MM-DD
          horarios: [
            { hora: "9:00-10:00", disponible: true },
            { hora: "10:00-11:00", disponible: true },
            { hora: "11:00-12:00", disponible: true },
            { hora: "12:00-13:00", disponible: true },
            { hora: "13:00-14:00", disponible: true },
            { hora: "14:00-15:00", disponible: true },
            { hora: "15:00-16:00", disponible: true }
        ]},{
        fecha: "2023-10-25",  // formato YYYY-MM-DD
            horarios: [
            { hora: "9:00-10:00", disponible: true },
            { hora: "10:00-11:00", disponible: true },
            { hora: "11:00-12:00", disponible: true },
            { hora: "12:00-13:00", disponible: true },
            { hora: "13:00-14:00", disponible: true },
            { hora: "14:00-15:00", disponible: true },
            { hora: "15:00-16:00", disponible: true }
        ]},{
        fecha: "2023-10-26",  // formato YYYY-MM-DD
            horarios: [
            { hora: "9:00-10:00", disponible: true },
            { hora: "10:00-11:00", disponible: true },
            { hora: "11:00-12:00", disponible: true },
            { hora: "12:00-13:00", disponible: true },
            { hora: "13:00-14:00", disponible: true },
            { hora: "14:00-15:00", disponible: true },
            { hora: "15:00-16:00", disponible: true }
        ]},{
        fecha: "2023-10-27",  // formato YYYY-MM-DD
            horarios: [
            { hora: "9:00-10:00", disponible: true },
            { hora: "10:00-11:00", disponible: true },
            { hora: "11:00-12:00", disponible: true },
            { hora: "12:00-13:00", disponible: true },
            { hora: "13:00-14:00", disponible: true },
            { hora: "14:00-15:00", disponible: true },
            { hora: "15:00-16:00", disponible: true }
            ]}
    
        
        ,]
    
  });

  const handleDisponibilidadClick = (diaIndex, horaIndex) => {
    // Clona la disponibilidad actual
    const newDisponibilidad = [...servicio.disponibilidad];
    // Cambia la disponibilidad de la hora específica
    newDisponibilidad[diaIndex].horarios[horaIndex].disponible = !newDisponibilidad[diaIndex].horarios[horaIndex].disponible;
    // Actualiza el estado
    setServicio({ ...servicio, disponibilidad: newDisponibilidad });
};


  const handleAddService = () => {
    const { tipo, nombre, edad, precio } = servicio;

    // Verificar si alguno de los campos está vacío
    if (!tipo || !nombre || !edad || !precio) {
      alert('Por favor, rellena todos los campos antes de agregar el servicio.');
      return;
    }
    let servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    servicios.push(servicio);
    localStorage.setItem("servicios", JSON.stringify(servicios));

    navigate('/profesional/home');

    // Si todos los campos están llenos, procede con la acción de agregar
    // Aquí va el código para agregar el servicio...
  };

  // Más lógica aquí, como guardar el servicio...

  return (
    <div className="agregar-servicio-container">
      <h2>Agregar un Servicio</h2>

      <label>
        Tipo de servicio:
        <select value={servicio.tipo} onChange={e => setServicio({ ...servicio, tipo: e.target.value })}>
          <option value="" disabled>Un servicio</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Nutricionista">Nutricionista</option>
          <option value="Arquitecto">Arquitecto</option>
          <option value="Profesor">Profesor</option>
          <option value="Masajista">Masajista</option>
        </select>
      </label>

      <label>
        Nombre del Profesional:
        <input type="text" value={servicio.nombre} onChange={e => setServicio({ ...servicio, nombre: e.target.value })} />
      </label>

      <label>
        Edad:
        <input type="number" value={servicio.edad} onChange={e => setServicio({ ...servicio, edad: e.target.value })} />
      </label>

      <label>
        Precio:
        <input type="number" value={servicio.precio} onChange={e => setServicio({ ...servicio, precio: e.target.value })} />
      </label>

      <h3>Disponibilidad para trabajar:</h3>
      <div className="disponibilidad-container">
        {servicio.disponibilidad.map((dia, diaIndex) => (
          <div key={diaIndex} className="dia-disponibilidad">
            <h4>{dia.fecha}</h4>
            {dia.horarios.map((hora, horaIndex) => (
              <span 
                key={horaIndex} 
                className={hora.disponible ? "hora-disponible" : "hora-no-disponible"}
                onClick={() => handleDisponibilidadClick(diaIndex, horaIndex)}>
                {hora.hora}
              </span>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleAddService}>AÑADIR SERVICIO</button>
    </div>
  );
};

export default AgregarServicio;
