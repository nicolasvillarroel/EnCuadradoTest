import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const PacienteBusqueda = () => {
  const [selectedService, setSelectedService] = useState('');
  const [serviceProviders, setServiceProviders] = useState([]);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const service = localStorage.getItem('selectedService');
    setSelectedService(service);

    const allProfessionals = JSON.parse(localStorage.getItem('servicios')) || [];
    const matchedProfessionals = allProfessionals.filter(prof => prof.tipo === service);
    setServiceProviders(matchedProfessionals);
  }, [selectedService]);

  const handleAgendarHoraClick = (providerIndex) => {
    // Navega a la vista AgendarHora con el índice del proveedor como parámetro
    navigate(`/pacienteAgendarHora/${providerIndex}`);
  };

  return (
    <div>
      <h2>BUSCAMOS: {selectedService ? selectedService.toUpperCase() : 'SERVICIO NO ESPECIFICADO'}</h2>
      <p>Estas son nuestras alternativas para ti:</p>
      
      {serviceProviders.map((provider, index) => (
        <div className="professional" key={index}>
          <p>{provider.nombre}</p>
          <p>{provider.edad} AÑOS</p>
          <p>${provider.precio}</p>
          <button onClick={() => handleAgendarHoraClick(index)}>AGENDAR HORA</button>
        </div>
      ))}
    </div>
  );
}

export default PacienteBusqueda;
