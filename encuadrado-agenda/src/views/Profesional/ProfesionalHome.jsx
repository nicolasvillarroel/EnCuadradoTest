import React, { useState } from 'react';  // Asegúrate de importar useState
import './ProfesionalHome.css';
import { useNavigate } from 'react-router-dom';

const ProfesionalHome = ({ servicios = [], eliminarServicio }) => {
  const navigate = useNavigate();
  
  // Creación del estado local para la lista de servicios
  const [serviciosList, setServiciosList] = useState(() => {
    return JSON.parse(localStorage.getItem("servicios")) || [];
});


  const eliminarServicioPorIndex = (index) => {
    let nuevosServicios = [...serviciosList];
    nuevosServicios.splice(index, 1);
    setServiciosList(nuevosServicios);
    localStorage.setItem("servicios", JSON.stringify(nuevosServicios));
}

  return (
    <div className="profesional-home-container">
      <h1>ADMINISTRADOR ENCUADRADO</h1>
      <h2>SERVICIOS A OFRECER</h2>
      
      <div className="servicios-lista">
        <div className="encabezado">
          <span>SERVICIO</span>
          <span>PROFESIONAL:</span>
          <span>EDAD:</span>
          <span>PRECIO POR HORA:</span>
          <span>  </span>
          <span>  </span>
          <span>  </span>
        </div>
        
        {/* Usa serviciosList en lugar de servicios para iterar y mostrar la lista */}
        {Array.isArray(serviciosList) && serviciosList.map((servicio, index) => (
          <div key={index} className="servicio-item">
            <span>{servicio.tipo}</span>
            <span>{servicio.nombre}</span>
            <span>{servicio.edad} AÑOS</span>
            <span>${servicio.precio}</span>
            <button className="ver-btn">VER DISPONIBILIDAD</button>
            <button className="eliminar-btn" onClick={() => eliminarServicioPorIndex(index)}>eliminar</button>

          </div>
        ))}
      </div>

      {/* Aquí debes pasar la función addNewService a la vista AgregarServicio */}
      <button className="añadir-btn" onClick={() => navigate('/profesional/agregarservicio')}>
        AÑADIR UN SERVICIO
      </button>
    </div>
  );
};

export default ProfesionalHome;
