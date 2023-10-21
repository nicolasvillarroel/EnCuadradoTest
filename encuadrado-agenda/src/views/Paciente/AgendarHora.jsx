import React, { useState, useEffect } from 'react';
import './AgendarHora.css';

const AgendarHora = () => {
  const [selectedProfessional, setSelectedProfessional] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);

  const horarios = ["09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00"];

  useEffect(() => {
    const professional = JSON.parse(localStorage.getItem('selectedProfessional'));
    setSelectedProfessional(professional);
  }, []);

  const handleSlotClick = (index) => {
    if (selectedProfessional.horarios && selectedProfessional.horarios[index]) {
      setSelectedSlot(index);
    }
  };

  const handleAgendarClick = () => {
    console.log("Horario agendado:", horarios[selectedSlot]);
  };

  return (
    <div className="schedule-container">
      <h2>Agendar Hora</h2>
      <h3>{selectedProfessional.nombre}</h3>

      <div className="schedule-grid">
        {horarios.map((hora, index) => (
          <div 
            key={index} 
            className={`schedule-slot ${selectedSlot === index ? 'selected' : ''} ${selectedProfessional.horarios && selectedProfessional.horarios[index] ? 'available' : 'unavailable'}`}
            onClick={() => handleSlotClick(index)}
          >
            {hora}
          </div>
        ))}
      </div>
      
      <button onClick={handleAgendarClick}>AGENDAR HORA</button>
    </div>
  );
}

export default AgendarHora;
