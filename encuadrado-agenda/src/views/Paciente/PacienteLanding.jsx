// src/views/Paciente/PacienteLanding.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PacienteLanding.css';

function PacienteLanding({navigation}) {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('selectedService', selectedService);
    navigate("/pacienteBusqueda");
  };

  return (
    <div className="paciente-landing">
      <h1 className="landing-title">¿Qué estás buscando?</h1>
      <select className="dropdown" onChange={handleServiceChange} value={selectedService}>
        <option value="" disabled>Un servicio</option>
        <option value="Psicólogo">Psicólogo</option>
        <option value="Nutricionista">Nutricionista</option>
        <option value="Masajista">Masajista</option>
        <option value="Profesor">Profesor</option>
        <option value="Arquitecto">Arquitecto</option>
      </select>
      <button className="landing-button" onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default PacienteLanding;
